<template>
  <div id="app">
    <!-- nav bar -->
    <router-view :key="$route.fullPath" />
  </div>
</template>
