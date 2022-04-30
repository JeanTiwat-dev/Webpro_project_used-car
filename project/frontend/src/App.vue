<template>
  <WelcomeLayout>
    <div id="app">
      <!-- nav bar -->
      <router-view :key="$route.fullPath" />
    </div>
  </WelcomeLayout>
</template>

<script>
import WelcomeLayout from './views/layouts/welcome.vue'

export default {
  name: "App",
  components :{
    WelcomeLayout
  },
};
</script>
