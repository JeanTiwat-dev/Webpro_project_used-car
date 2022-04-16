<template>
  <welcome-layout>
    <div class="min-h-screen">
    <h1 class='h-100'> Welcome to my WEB!! </h1></div>
  </welcome-layout>
</template>

<script>
import axios from "axios";
import WelcomeLayout from './layouts/welcome.vue'
// @ is an alias to /src
export default {
  name: "Home",
  components :{
    WelcomeLayout
  },
  // data() {
  //   return {
  //     loginuser: [],
  //     allItems: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //   };
  // },
};
</script>

