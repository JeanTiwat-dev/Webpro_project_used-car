<template>
  <div id="app">
    <Navbar />
    <div class="min-h-screen">
      <slot/>
    </div>
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
