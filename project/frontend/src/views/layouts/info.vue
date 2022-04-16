<template>
  <div id="app">
    <Navbar />
    <div class="w-full grid grid-cols-12">
        <div class="col-start-1 col-end-3">
            SideBar??
        </div>
        <div class="col-start-3 col-end-13">
            <slot/>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import footer from "../components/footer.vue";
export default {
  name: "DefaultLayout",
  components :{
    Navbar : navbar,
    Footer : footer
  },
};
</script>
