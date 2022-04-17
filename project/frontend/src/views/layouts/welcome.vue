<template>
  <div id="app">
    <Navbar />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import footer from "../components/footer.vue";
export default {
  name: "WelcomeLayout",
  components :{
    Navbar : navbar,
    Footer : footer
  },
};
</script>
