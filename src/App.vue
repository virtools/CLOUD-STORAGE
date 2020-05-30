<template>
  <div class="app noSelect" id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyAbFc7fX4R_lQ2O8Tw-eIBIG1W4QZ4fngI",
  authDomain: "f2e-cloud-storage.firebaseapp.com",
  databaseURL: "https://f2e-cloud-storage.firebaseio.com",
  projectId: "f2e-cloud-storage",
  storageBucket: "gs://f2e-cloud-storage.appspot.com",
  messagingSenderId: "904537894600",
  appId: "1:904537894600:web:0949f0f1fdd16f16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default {
  name: "app",
  components: {}
};
</script>

<style>
[v-cloak] {
  display: none;
}
html {
}
body {
  margin: 0;
}
.app {
  min-width: 800px;
}
</style>
