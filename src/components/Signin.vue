<template>
  <div></div>
</template>

<script>
import firebase from "firebase/app";
import firestore from "firebase/firestore";
import auth from "firebase/auth";
const Firestore = firebase.firestore;
export default {
  props: {},
  data: function() {
    return {};
  },
  beforeCreate: function() {},
  created: function() {
    this.signin();
  },
  watch: {},
  mounted: function() {},
  methods: {
    signin: function() {
      var that = this;
      console.log(that);
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function() {
          return firebase
            .auth()
            .signInAnonymously()
            .then(function(data) {
              console.log("登入");
              that.$router.push("/main");
            });
        });
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>
