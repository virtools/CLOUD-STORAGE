<template>
  <div class="main">
    <div class="head">
      <div class="logo"></div>
    </div>
    <div>
      <div>
        <div class="button" @click="delete_click">刪除</div>
        <div class="button" @click="newFolder_click">新增資料夾</div>
        <div class="button" @click="uploadFile_click">上傳檔案</div>
        <div class="spacing"></div>
        <div class="size">
          <div class="sizeText">目前使用容量：</div>
          <div class="rate">
            <div class="rateValue" :style="{width:100*size/maxSize+'%'}"></div>
          </div>
          <div class="sizeText">{{formatSize(size)}} / {{formatSize(maxSize)}}</div>
        </div>
      </div>
      <div>
        <template v-if="pathContent.length > 0">
          <div id="backButton" class="button" @click="back_click">←</div>
          <div class="spacing"></div>
        </template>
        <div class="path">
          <template v-for="(item) in pathContentData">
            <div
              class="pathItem"
              :key="item.id"
              @click="folder_click(item.id,item.data.pathContent)"
            >{{item.data.name}}</div>
            <div class="pathSlash" :key="'slash_'+item.id">&#47;</div>
          </template>
        </div>
      </div>
      <table class="table">
        <tbody>
          <tr>
            <td v-for="item in items" :key="'title_'+item.value">
              <template v-if="item.value==='select'">
                <div class="select" @click="selectAll_click(item)" :class="{active:selectAll}"></div>
              </template>
              <template v-else>
                <div @click="title_click(item)" class="text">{{item.title}}</div>
                <div
                  @click="title_click(item)"
                  v-if="item.value===sort.type"
                  class="sort"
                  :class="{asc:sort.asc}"
                ></div>
              </template>
            </td>
          </tr>
          <tr v-for="(fileDataItem) in fileData" :key="fileDataItem.id">
            <td v-for="item in items" :key="'content_'+item.value">
              <template v-if="item.value==='select'">
                <div
                  class="select"
                  @click="select_click(fileDataItem)"
                  :class="{active:hasSelect(fileDataItem.id)!==-1}"
                ></div>
              </template>
              <template v-else-if="item.value==='name'">
                <template v-if="fileDataItem.type === 'folder'">
                  <div
                    @click="folder_click(fileDataItem.id,fileDataItem.pathContent)"
                    class="folder"
                  >{{fileDataItem.name}}</div>
                </template>
                <template v-else>
                  <div>{{fileDataItem.name}}</div>
                </template>
              </template>
              <template v-else-if="item.value==='modifiedTime'">
                <div
                  v-if="fileDataItem.modifiedTime"
                >{{getDate(new Date(fileDataItem.modifiedTime.seconds*1000).getTime())}}</div>
              </template>
              <template v-else-if="item.value==='type'">
                <div>{{fileDataItem.type}}</div>
              </template>
              <template v-else-if="item.value==='size'">
                <!--<template v-if="fileDataItem.type==='folder'">
                  <div>-</div>
                </template>
                <template v-else>-->
                <div>{{formatSize(fileDataItem.size)}}</div>
                <!--</template>-->
              </template>
              <template v-else-if="item.value==='other'">
                <template v-if="fileDataItem.uploadState==='done'">
                  <template v-if="fileDataItem.type==='folder'">
                    <div>-</div>
                  </template>
                  <template v-else>
                    <div class="button" @click="download_click(fileDataItem)">下載</div>
                  </template>
                </template>
                <template v-if="fileDataItem.uploadState==='error'">
                  <div>上傳失敗</div>
                </template>
                <template v-if="fileDataItem.uploadState==='undone'">
                  <div>更新中...</div>
                </template>
                <template v-if="fileDataItem.uploadState==='upload'">
                  <template v-if="fileDataItem.upload===undefined">
                    <div>上傳中...</div>
                  </template>
                  <template v-else>
                    <div>上傳中...{{fileDataItem.upload}}%</div>
                  </template>
                </template>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="features" v-if="features!==''">
      <div v-if="features==='uploadFile'" class="featuresContent">
        <div class="featuresBox">
          <div class="title">上傳檔案</div>
          <label>
            <input type="file" @change="file_change" />
          </label>
          <div class="button" @click="upload_click">上傳</div>
          <div class="close" @click="close_click"></div>
        </div>
      </div>
      <div v-else-if="features==='newFolder'" class="featuresContent">
        <div class="featuresBox">
          <div class="title">新增資料夾</div>
          <input type="text" v-model="folderName" class="inputText" placeholder="輸入資料夾名稱" />
          <div class="button" @click="createFolder_click">確定</div>
          <div class="close" @click="close_click"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import firestore from "firebase/firestore";
import storage from "firebase/storage";
import auth from "firebase/auth";
import moment from "moment";
const Firestore = firebase.firestore;
const Storage = firebase.storage;
export default {
  props: {},
  data: function() {
    return {
      file: null,
      folderName: "",
      currentlyFolderId: "",
      pathContent: [],
      pathContentData: [],
      fileData: [],
      unFilesRef: null,
      select: [],
      currentUser: null,
      dateFormat: "YYYY-MM-DD HH:mm",
      sort: {
        type: "name",
        asc: true
      },
      items: [
        { title: "選取", value: "select", sort: false },
        { title: "名稱", value: "name", sort: true },
        { title: "修改日期", value: "modifiedTime", sort: true },
        { title: "類型", value: "type", sort: true },
        { title: "大小", value: "size", sort: true },
        { title: "", value: "other", sort: false }
      ],
      selectAll: false,
      features: "",
      size: 0,
      maxSize: 200000000
    };
  },
  watch: {
    select: {
      handler(newVal, oldVal) {
        if (
          this.fileData.length === 0 ||
          this.select.length < this.fileData.length
        ) {
          this.selectAll = false;
        } else {
          this.selectAll = true;
        }
      },
      /*immediate: true,*/
      deep: true
    }
  },
  created: function() {
    var that = this;
    this.currentUser = firebase.auth().currentUser;
    if (this.currentUser) {
      this.updateFolder();
      var sizeRef = Firestore()
        .collection("info")
        .doc("size");
      sizeRef.onSnapshot(function(snapshot) {
        that.size = snapshot.data().value;
      });
    } else {
      this.$router.push("/signin");
    }
  },
  mounted: function() {},
  methods: {
    formatSize: function(value) {
      if (value > 1000000) {
        var s = value / 1000000;
        s = s.toFixed(2);
        return s + " MB";
      }
      if (value > 1000) {
        var s = value / 1000;
        s = s.toFixed(2);
        return s + " KB";
      }
      return value + " B";
    },
    newFolder_click: function() {
      this.features = "newFolder";
    },
    uploadFile_click: function() {
      this.features = "uploadFile";
    },
    hasSelect: function(id) {
      return this.select.findIndex(function(el) {
        return el.id === id;
      });
    },
    title_click: function(item) {
      if (item.sort) {
        if (this.sort.type !== item.value) {
          this.sort.type = item.value;
          this.sort.asc = true;
        } else {
          this.sort.asc = !this.sort.asc;
        }
        this.updateFolder();
      }
    },
    select_click: function(item) {
      var index = this.hasSelect(item.id);
      if (index === -1) {
        this.select.push({
          id: item.id,
          type: item.type,
          name: item.name,
          uploadState: item.uploadState,
          size: item.size,
          pathContent: item.pathContent
        });
      } else {
        this.select.splice(index, 1);
      }
    },
    selectAll_click: function(item) {
      this.selectAll = !this.selectAll;
      if (this.selectAll) {
        this.select.splice(0, this.select.length);
        this.select = this.fileData.map(function(el) {
          return {
            id: el.id,
            type: el.type,
            name: el.name,
            uploadState: el.uploadState,
            size: el.size,
            pathContent: el.pathContent
          };
        });
      } else {
        this.select.splice(0, this.select.length);
      }
    },
    back_click: function() {
      if (this.pathContent.length > 0) {
        this.currentlyFolderId = this.pathContent[this.pathContent.length - 1];
        this.pathContent.splice(this.pathContent.length - 1, 1);
        this.updateFolder();
      }
    },
    delete_click: function() {
      var that = this;
      var filesRef = Firestore().collection("files");
      var storageRef = Storage().ref();
      var storageFilesRef = storageRef.child("files");
      var sizeRef = Firestore()
        .collection("info")
        .doc("size");
      for (var i = 0; i < this.select.length; i++) {
        var id = this.select[i].id;
        var name = this.select[i].name;
        var uploadState = this.select[i].uploadState;
        var size = this.select[i].size;
        var pathContent = this.select[i].pathContent;
        filesRef
          .doc(id)
          .get()
          .then(function(doc) {
            doc.ref.delete();
          });
        if (this.select[i].type === "folder") {
          filesRef
            .where("pathContent", "array-contains", id)
            .get()
            .then(function(snapshot) {
              snapshot.docs.forEach(function(doc) {
                var data = doc.data();
                if (data.type !== "folder") {
                  if (data.uploadState === "done") {
                    var fileRef = storageFilesRef.child(
                      doc.id + "/" + data.name
                    );
                    fileRef.delete();
                  }
                }
                doc.ref.delete();
              });
            });

          that.addSize(pathContent, -size);
        } else {
          if (uploadState === "done") {
            var fileRef = storageFilesRef.child(id + "/" + name);
            fileRef.delete();
            that.addSize(pathContent, -size);
          }
        }
      }
    },
    updateFolder: function() {
      if (this.unFilesRef) {
        this.unFilesRef();
      }
      var that = this;
      var filesRef = Firestore().collection("files");
      this.fileData = [];
      this.unFilesRef = filesRef
        .where("parent", "==", this.currentlyFolderId)
        .orderBy(that.sort.type, that.sort.asc ? "asc" : "desc")
        .onSnapshot(function(snapshot) {
          snapshot.docChanges().forEach(function(change) {
            that.setData(that.fileData, change);
            if (change.type === "removed") {
              var index = that.hasSelect(change.doc.id);
              if (index !== -1) {
                that.select.splice(index, 1);
              }
            } else if (change.type === "added") {
              that.selectAll = false;
            }
          });
        });
      var a = [];
      a.push(
        new Promise(function(resolve, reject) {
          resolve({
            id: "",
            data: { name: "home", pathContent: [] }
          });
        })
      );
      if (this.pathContent.length > 0) {
        if (this.pathContent.length > 1) {
          for (var i = 1; i < this.pathContent.length; i++) {
            a.push(getPathItem(this.pathContent[i]));
          }
        }
        a.push(getPathItem(this.currentlyFolderId));
      }
      Promise.all(a).then(function(values) {
        that.pathContentData.splice(0, that.pathContentData.length);
        values.forEach(function(el, index) {
          that.pathContentData.splice(index, 0, el);
        });
      });
      function getPathItem(id) {
        return new Promise(function(resolve, reject) {
          filesRef
            .doc(id)
            .get()
            .then(function(doc) {
              resolve({ id: id, data: doc.data() });
            });
        });
      }
    },
    folder_click: function(id, pathContent) {
      this.currentlyFolderId = id;
      this.pathContent = pathContent;
      this.updateFolder();
    },
    upload_click: function() {
      if (this.file) {
        this.addFileInfo(
          this.currentlyFolderId,
          this.file,
          this.pathContent.concat(this.currentlyFolderId)
        );
        this.file = null;
        this.features = "";
      } else {
        alert("請選擇上傳檔案");
      }
    },
    createFolder_click: function() {
      if (this.folderName !== "") {
        this.addFolderInfo(
          this.currentlyFolderId,
          this.folderName,
          this.pathContent.concat(this.currentlyFolderId)
        );
        this.folderName = "";
        this.features = "";
      } else {
        alert("請輸入資料夾名稱");
      }
    },
    close_click: function() {
      this.features = "";
    },
    addFolderInfo: function(currentlyFolderId, name, pathContent) {
      if (name !== "") {
        var that = this;
        var filesRef = Firestore().collection("files");
        filesRef.add({
          parent: currentlyFolderId,
          name: name,
          type: "folder",
          size: 0,
          uploadState: "done",
          createdTime: Firestore.FieldValue.serverTimestamp(),
          pathContent: pathContent,
          user_uid: that.currentUser.uid,
          modifiedTime: Firestore.FieldValue.serverTimestamp()
        });
      }
    },
    addSize: function(pathContent, size) {
      var filesRef = Firestore().collection("files");
      for (var i = 0; i < pathContent.length; i++) {
        if (pathContent[i] === "") {
          var sizeRef = Firestore()
            .collection("info")
            .doc("size");
          sizeRef.update({
            value: firebase.firestore.FieldValue.increment(size)
          });
        } else {
          filesRef.doc(pathContent[i]).update({
            size: firebase.firestore.FieldValue.increment(size)
          });
        }
      }
    },
    addFileInfo: function(currentlyFolderId, file, pathContent) {
      var that = this;
      var filesRef = Firestore().collection("files");
      var sizeRef = Firestore()
        .collection("info")
        .doc("size");
      var doc = filesRef.doc();
      doc.set({
        parent: currentlyFolderId,
        name: file.name,
        type: file.type,
        size: file.size,
        uploadState: "undone",
        createdTime: Firestore.FieldValue.serverTimestamp(),
        pathContent: pathContent,
        user_uid: that.currentUser.uid
      });
      this.addSize(pathContent, file.size);
      that.addFile(file, doc.id, file.name, function(state, id, val) {
        if (state === "complete") {
          doc.update({
            uploadState: "done",
            modifiedTime: Firestore.FieldValue.serverTimestamp()
          });
        } else if (state === "error") {
          doc.update({
            uploadState: "error",
            modifiedTime: Firestore.FieldValue.serverTimestamp()
          });
          that.addSize(pathContent, -file.size);
        } else if (state === "upload") {
          doc.update({
            uploadState: "upload",
            modifiedTime: Firestore.FieldValue.serverTimestamp()
          });
        } else if (state === "progress") {
          var index = that.fileData.findIndex(function(el) {
            return el.id === id;
          });
          if (index !== -1) {
            that.$set(that.fileData[index], "upload", val.toFixed(0));
          }
        }
      });
    },
    addFile: function(file, id, name, fun) {
      var storageRef = Storage().ref();
      var filesRef = storageRef.child("files");
      var fileIdRef = filesRef.child(id);
      var fileRef = fileIdRef.child(name);
      var uploadTask = fileRef.put(file);
      var unUploadTask = uploadTask.on(
        "state_changed",
        function(snapshot) {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              //console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              //console.log("Upload is running");
              fun("progress", id, progress);
              break;
          }
        },
        function(error) {
          fun("error");
        },
        function() {
          fun("complete");
          window.removeEventListener("beforeunload", beforeunload);
        }
      );
      fun("upload");
      function beforeunload() {
        unUploadTask();
        fun("error");
      }
      window.addEventListener("beforeunload", beforeunload);
    },
    file_change: function(e) {
      if (e.target.files.length) {
        var file = e.target.files[0];
        if (file.size > 3000000) {
          e.target.value = "";
          alert("檔案需小於3MB");
        } else if (this.size + file.size > this.maxSize) {
          e.target.value = "";
          alert("已超過容量上限");
        } else {
          this.file = file;
        }
      }
    },
    setData: function(data, change) {
      var temp = change.doc.data();
      temp.id = change.doc.id;
      if (change.type === "added") {
        data.splice(change.newIndex, 0, temp);
      } else if (change.type === "modified") {
        data.splice(change.newIndex, 1, temp);
      } else if (change.type === "removed") {
        data.splice(change.oldIndex, 1);
      }
    },
    getDate: function(time) {
      return moment(time).format(this.dateFormat);
    },
    download_click: function(item) {
      var storageRef = Storage().ref();
      var filesRef = storageRef.child("files");
      var fileIdRef = filesRef.child(item.id);
      var fileRef = fileIdRef.child(item.name);
      fileRef
        .getDownloadURL()
        .then(function(url) {
          window.open(url);
        })
        .catch(function(error) {
          alert("下載有錯誤");
        });
    }
  }
};
</script>

<style scoped>
.select {
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 1px solid #556f96;
}
.select.active {
  background-color: #556f96;
}
.table {
  position: relative;
  width: 100%;
}
.table td {
  padding: 10px;
}
.text {
  position: relative;
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
}
.sort {
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #556f96 transparent transparent transparent;
  vertical-align: middle;
}
.sort.asc {
  border-width: 0 5px 5px 5px;
  border-color: transparent transparent #556f96 transparent;
}
.logo {
  position: relative;
  display: inline-block;
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(../assets/img/logo.svg);
}
.main {
  position: relative;
  display: block;
  padding: 10px;
  box-sizing: border-box;
}
.button {
  position: relative;
  display: inline-block;
  padding: 10px;
  box-sizing: border-box;
  background-color: #556f96;
  color: #fff;
  cursor: pointer;
  margin: 4px;
}
.features {
  position: fixed;
  display: table;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.5);
}
.featuresContent {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.featuresBox {
  position: relative;
  display: inline-block;
  max-width: 400px;
  padding: 20px 40px;
  box-sizing: border-box;
  background-color: #fff;
}
.featuresBox .title {
  position: relative;
  display: inline-block;
  font-size: 24px;
  margin-bottom: 10px;
  width: 100%;
}
.featuresBox .close {
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  right: 0px;
  top: 0px;
  cursor: pointer;
}
.featuresBox .close::before {
  content: "";
  position: absolute;
  display: block;
  width: 20px;
  height: 2px;
  background-color: #556f96;
  left: 50%;
  top: 50%;
  margin-left: -10px;
  margin-top: -1px;
  transform: rotate(45deg);
}
.featuresBox .close::after {
  content: "";
  position: absolute;
  display: block;
  width: 2px;
  height: 20px;
  background-color: #556f96;
  left: 50%;
  top: 50%;
  margin-left: -1px;
  margin-top: -10px;
  transform: rotate(45deg);
}
.inputText {
  position: relative;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
}
.spacing {
  position: relative;
  display: inline-block;
  width: 5px;
}
.folder {
  text-decoration: underline;
  cursor: pointer;
}
.size {
  position: relative;
  display: inline-block;
}
.path {
  position: relative;
  display: inline-block;
  padding: 5px;
}
.pathItem {
  position: relative;
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
}
.pathSlash {
  position: relative;
  display: inline-block;
  margin: 0px 2px;
}
#backButton {
  padding: 5px;
  border-radius: 1em;
}
.sizeText {
  position: relative;
  display: inline-block;
}
.rate {
  position: relative;
  display: inline-block;
  width: 400px;
  height: 10px;
  border: 1px solid #556f96;
}
.rateValue {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background-color: #556f96;
}
</style>
