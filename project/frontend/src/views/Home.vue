<template>
  <div id="app">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import navbar from "./components/navbar.vue";
import footer from "./components/footer.vue";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      loginuser: [],
    };
  },
  components :{
    Navbar : navbar,
    Footer : footer
  },
};
</script>
