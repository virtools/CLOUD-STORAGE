(function(e){function t(t){for(var a,l,c=t[0],o=t[1],r=t[2],u=0,f=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,r||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,c=1;c<s.length;c++){var o=s[c];0!==i[o]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=s[0]))}return e}var a={},i={app:0},n=[];function l(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=a,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(s,a,function(t){return e[t]}.bind(null,a));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},"394e":function(e,t,s){"use strict";var a=s("74e1"),i=s.n(a);i.a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=n,e.exports=i,i.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app noSelect",attrs:{id:"app"}},[s("router-view")],1)},n=[],l=s("59ca"),c=s.n(l),o={apiKey:"AIzaSyAbFc7fX4R_lQ2O8Tw-eIBIG1W4QZ4fngI",authDomain:"f2e-cloud-storage.firebaseapp.com",databaseURL:"https://f2e-cloud-storage.firebaseio.com",projectId:"f2e-cloud-storage",storageBucket:"gs://f2e-cloud-storage.appspot.com",messagingSenderId:"904537894600",appId:"1:904537894600:web:0949f0f1fdd16f16"};c.a.initializeApp(o);var r={name:"app",components:{}},d=r,u=(s("034f"),s("2877")),f=Object(u["a"])(d,i,n,!1,null,null,null),h=f.exports,p=s("8c4f"),v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"appContent"},[s("router-view")],1)},m=[],b={components:{},props:{},data:function(){return{}},created:function(){},methods:{}},j=b,_=Object(u["a"])(j,v,m,!1,null,"e74f8280",null),g=_.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},k=[],C=(s("e71f"),s("ea7b"),c.a.firestore,{props:{},data:function(){return{}},beforeCreate:function(){},created:function(){this.signin()},watch:{},mounted:function(){},methods:{signin:function(){var e=this;console.log(e),c.a.auth().setPersistence(c.a.auth.Auth.Persistence.LOCAL).then(function(){return c.a.auth().signInAnonymously().then(function(t){console.log("登入"),e.$router.push("/main")})})}},computed:{}}),z=C,w=Object(u["a"])(z,y,k,!1,null,"08a3df00",null),F=w.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main"},[e._m(0),s("div",[s("div",[s("div",{staticClass:"button",on:{click:e.delete_click}},[e._v("刪除")]),s("div",{staticClass:"button",on:{click:e.newFolder_click}},[e._v("新增資料夾")]),s("div",{staticClass:"button",on:{click:e.uploadFile_click}},[e._v("上傳檔案")]),s("div",{staticClass:"spacing"}),s("div",{staticClass:"size"},[s("div",{staticClass:"sizeText"},[e._v("目前使用容量：")]),s("div",{staticClass:"rate"},[s("div",{staticClass:"rateValue",style:{width:100*e.size/e.maxSize+"%"}})]),s("div",{staticClass:"sizeText"},[e._v(e._s(e.formatSize(e.size))+" / "+e._s(e.formatSize(e.maxSize)))])])]),s("div",[e.pathContent.length>0?[s("div",{staticClass:"button",attrs:{id:"backButton"},on:{click:e.back_click}},[e._v("←")]),s("div",{staticClass:"spacing"})]:e._e(),s("div",{staticClass:"path"},[e._l(e.pathContentData,function(t){return[s("div",{key:t.id,staticClass:"pathItem",on:{click:function(s){return e.folder_click(t.id,t.data.pathContent)}}},[e._v(e._s(t.data.name))]),s("div",{key:"slash_"+t.id,staticClass:"pathSlash"},[e._v("/")])]})],2)],2),s("table",{staticClass:"table"},[s("tbody",[s("tr",e._l(e.items,function(t){return s("td",{key:"title_"+t.value},["select"===t.value?[s("div",{staticClass:"select",class:{active:e.selectAll},on:{click:function(s){return e.selectAll_click(t)}}})]:[s("div",{staticClass:"text",on:{click:function(s){return e.title_click(t)}}},[e._v(e._s(t.title))]),t.value===e.sort.type?s("div",{staticClass:"sort",class:{asc:e.sort.asc},on:{click:function(s){return e.title_click(t)}}}):e._e()]],2)}),0),e._l(e.fileData,function(t){return s("tr",{key:t.id},e._l(e.items,function(a){return s("td",{key:"content_"+a.value},["select"===a.value?[s("div",{staticClass:"select",class:{active:-1!==e.hasSelect(t.id)},on:{click:function(s){return e.select_click(t)}}})]:"name"===a.value?["folder"===t.type?[s("div",{staticClass:"folder",on:{click:function(s){return e.folder_click(t.id,t.pathContent)}}},[e._v(e._s(t.name))])]:[s("div",[e._v(e._s(t.name))])]]:"modifiedTime"===a.value?[t.modifiedTime?s("div",[e._v(e._s(e.getDate(new Date(1e3*t.modifiedTime.seconds).getTime())))]):e._e()]:"type"===a.value?[s("div",[e._v(e._s(t.type))])]:"size"===a.value?[s("div",[e._v(e._s(e.formatSize(t.size)))])]:"other"===a.value?["done"===t.uploadState?["folder"===t.type?[s("div",[e._v("-")])]:[s("div",{staticClass:"button",on:{click:function(s){return e.download_click(t)}}},[e._v("下載")])]]:e._e(),"error"===t.uploadState?[s("div",[e._v("上傳失敗")])]:e._e(),"undone"===t.uploadState?[s("div",[e._v("更新中...")])]:e._e(),"upload"===t.uploadState?[void 0===t.upload?[s("div",[e._v("上傳中...")])]:[s("div",[e._v("上傳中..."+e._s(t.upload)+"%")])]]:e._e()]:e._e()],2)}),0)})],2)])]),""!==e.features?s("div",{staticClass:"features"},["uploadFile"===e.features?s("div",{staticClass:"featuresContent"},[s("div",{staticClass:"featuresBox"},[s("div",{staticClass:"title"},[e._v("上傳檔案")]),s("label",[s("input",{attrs:{type:"file"},on:{change:e.file_change}})]),s("div",{staticClass:"button",on:{click:e.upload_click}},[e._v("上傳")]),s("div",{staticClass:"close",on:{click:e.close_click}})])]):"newFolder"===e.features?s("div",{staticClass:"featuresContent"},[s("div",{staticClass:"featuresBox"},[s("div",{staticClass:"title"},[e._v("新增資料夾")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.folderName,expression:"folderName"}],staticClass:"inputText",attrs:{type:"text",placeholder:"輸入資料夾名稱"},domProps:{value:e.folderName},on:{input:function(t){t.target.composing||(e.folderName=t.target.value)}}}),s("div",{staticClass:"button",on:{click:e.createFolder_click}},[e._v("確定")]),s("div",{staticClass:"close",on:{click:e.close_click}})])]):e._e()]):e._e()])},x=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"head"},[s("div",{staticClass:"logo"})])}],I=(s("5df3"),s("ac6a"),s("7f7f"),s("55dd"),s("20d6"),s("588e"),s("c1df")),T=s.n(I),D=c.a.firestore,O=c.a.storage,A={props:{},data:function(){return{file:null,folderName:"",currentlyFolderId:"",pathContent:[],pathContentData:[],fileData:[],unFilesRef:null,select:[],currentUser:null,dateFormat:"YYYY-MM-DD HH:mm",sort:{type:"name",asc:!0},items:[{title:"選取",value:"select",sort:!1},{title:"名稱",value:"name",sort:!0},{title:"修改日期",value:"modifiedTime",sort:!0},{title:"類型",value:"type",sort:!0},{title:"大小",value:"size",sort:!0},{title:"",value:"other",sort:!1}],selectAll:!1,features:"",size:0,maxSize:2e8}},watch:{select:{handler:function(e,t){0===this.fileData.length||this.select.length<this.fileData.length?this.selectAll=!1:this.selectAll=!0},deep:!0}},created:function(){var e=this;if(this.currentUser=c.a.auth().currentUser,this.currentUser){this.updateFolder();var t=D().collection("info").doc("size");t.onSnapshot(function(t){e.size=t.data().value})}else this.$router.push("/signin")},mounted:function(){},methods:{formatSize:function(e){if(e>1e6){var t=e/1e6;return t=t.toFixed(2),t+" MB"}if(e>1e3){t=e/1e3;return t=t.toFixed(2),t+" KB"}return e+" B"},newFolder_click:function(){this.features="newFolder"},uploadFile_click:function(){this.features="uploadFile"},hasSelect:function(e){return this.select.findIndex(function(t){return t.id===e})},title_click:function(e){e.sort&&(this.sort.type!==e.value?(this.sort.type=e.value,this.sort.asc=!0):this.sort.asc=!this.sort.asc,this.updateFolder())},select_click:function(e){var t=this.hasSelect(e.id);-1===t?this.select.push({id:e.id,type:e.type,name:e.name,uploadState:e.uploadState,size:e.size,pathContent:e.pathContent}):this.select.splice(t,1)},selectAll_click:function(e){this.selectAll=!this.selectAll,this.selectAll?(this.select.splice(0,this.select.length),this.select=this.fileData.map(function(e){return{id:e.id,type:e.type,name:e.name,uploadState:e.uploadState,size:e.size,pathContent:e.pathContent}})):this.select.splice(0,this.select.length)},back_click:function(){this.pathContent.length>0&&(this.currentlyFolderId=this.pathContent[this.pathContent.length-1],this.pathContent.splice(this.pathContent.length-1,1),this.updateFolder())},delete_click:function(){for(var e=this,t=D().collection("files"),s=O().ref(),a=s.child("files"),i=(D().collection("info").doc("size"),0);i<this.select.length;i++){var n=this.select[i].id,l=this.select[i].name,c=this.select[i].uploadState,o=this.select[i].size,r=this.select[i].pathContent;if(t.doc(n).get().then(function(e){e.ref.delete()}),"folder"===this.select[i].type)t.where("pathContent","array-contains",n).get().then(function(e){e.docs.forEach(function(e){var t=e.data();if("folder"!==t.type&&"done"===t.uploadState){var s=a.child(e.id+"/"+t.name);s.delete()}e.ref.delete()})}),e.addSize(r,-o);else if("done"===c){var d=a.child(n+"/"+l);d.delete(),e.addSize(r,-o)}}},updateFolder:function(){this.unFilesRef&&this.unFilesRef();var e=this,t=D().collection("files");this.fileData=[],this.unFilesRef=t.where("parent","==",this.currentlyFolderId).orderBy(e.sort.type,e.sort.asc?"asc":"desc").onSnapshot(function(t){t.docChanges().forEach(function(t){if(e.setData(e.fileData,t),"removed"===t.type){var s=e.hasSelect(t.doc.id);-1!==s&&e.select.splice(s,1)}else"added"===t.type&&(e.selectAll=!1)})});var s=[];if(s.push(new Promise(function(e,t){e({id:"",data:{name:"home",pathContent:[]}})})),this.pathContent.length>0){if(this.pathContent.length>1)for(var a=1;a<this.pathContent.length;a++)s.push(i(this.pathContent[a]));s.push(i(this.currentlyFolderId))}function i(e){return new Promise(function(s,a){t.doc(e).get().then(function(t){s({id:e,data:t.data()})})})}Promise.all(s).then(function(t){e.pathContentData.splice(0,e.pathContentData.length),t.forEach(function(t,s){e.pathContentData.splice(s,0,t)})})},folder_click:function(e,t){this.currentlyFolderId=e,this.pathContent=t,this.updateFolder()},upload_click:function(){this.file?(this.addFileInfo(this.currentlyFolderId,this.file,this.pathContent.concat(this.currentlyFolderId)),this.file=null,this.features=""):alert("請選擇上傳檔案")},createFolder_click:function(){""!==this.folderName?(this.addFolderInfo(this.currentlyFolderId,this.folderName,this.pathContent.concat(this.currentlyFolderId)),this.folderName="",this.features=""):alert("請輸入資料夾名稱")},close_click:function(){this.features=""},addFolderInfo:function(e,t,s){if(""!==t){var a=this,i=D().collection("files");i.add({parent:e,name:t,type:"folder",size:0,uploadState:"done",createdTime:D.FieldValue.serverTimestamp(),pathContent:s,user_uid:a.currentUser.uid,modifiedTime:D.FieldValue.serverTimestamp()})}},addSize:function(e,t){for(var s=D().collection("files"),a=0;a<e.length;a++)if(""===e[a]){var i=D().collection("info").doc("size");i.update({value:c.a.firestore.FieldValue.increment(t)})}else s.doc(e[a]).update({size:c.a.firestore.FieldValue.increment(t)})},addFileInfo:function(e,t,s){var a=this,i=D().collection("files"),n=(D().collection("info").doc("size"),i.doc());n.set({parent:e,name:t.name,type:t.type,size:t.size,uploadState:"undone",createdTime:D.FieldValue.serverTimestamp(),pathContent:s,user_uid:a.currentUser.uid}),this.addSize(s,t.size),a.addFile(t,n.id,t.name,function(e,i,l){if("complete"===e)n.update({uploadState:"done",modifiedTime:D.FieldValue.serverTimestamp()});else if("error"===e)n.update({uploadState:"error",modifiedTime:D.FieldValue.serverTimestamp()}),a.addSize(s,-t.size);else if("upload"===e)n.update({uploadState:"upload",modifiedTime:D.FieldValue.serverTimestamp()});else if("progress"===e){var c=a.fileData.findIndex(function(e){return e.id===i});-1!==c&&a.$set(a.fileData[c],"upload",l.toFixed(0))}})},addFile:function(e,t,s,a){var i=O().ref(),n=i.child("files"),l=n.child(t),o=l.child(s),r=o.put(e),d=r.on("state_changed",function(e){var s=e.bytesTransferred/e.totalBytes*100;switch(e.state){case c.a.storage.TaskState.PAUSED:break;case c.a.storage.TaskState.RUNNING:a("progress",t,s);break}},function(e){a("error")},function(){a("complete"),window.removeEventListener("beforeunload",u)});function u(){d(),a("error")}a("upload"),window.addEventListener("beforeunload",u)},file_change:function(e){if(e.target.files.length){var t=e.target.files[0];t.size>3e6?(e.target.value="",alert("檔案需小於3MB")):this.size+t.size>this.maxSize?(e.target.value="",alert("已超過容量上限")):this.file=t}},setData:function(e,t){var s=t.doc.data();s.id=t.doc.id,"added"===t.type?e.splice(t.newIndex,0,s):"modified"===t.type?e.splice(t.newIndex,1,s):"removed"===t.type&&e.splice(t.oldIndex,1)},getDate:function(e){return T()(e).format(this.dateFormat)},download_click:function(e){var t=O().ref(),s=t.child("files"),a=s.child(e.id),i=a.child(e.name);i.getDownloadURL().then(function(e){window.open(e)}).catch(function(e){alert("下載有錯誤")})}}},N=A,P=(s("394e"),Object(u["a"])(N,S,x,!1,null,"ab1c7ad0",null)),E=P.exports;a["a"].use(p["a"]);var U=[{path:"/",redirect:"/signin",component:g,meta:{},children:[{path:"signin",component:F,meta:{}},{path:"main",component:E,meta:{}}]}],B=new p["a"]({routes:U}),M=B;a["a"].config.productionTip=!1,new a["a"]({router:M,render:function(e){return e(h)}}).$mount("#app")},"64a9":function(e,t,s){},"74e1":function(e,t,s){}});
//# sourceMappingURL=app.c75ae9c2.js.map