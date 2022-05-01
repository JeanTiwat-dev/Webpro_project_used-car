<template>
  <info-layout>
  <div class="min-h-screen container mt-4 mx-auto" >
  <router-link to="/detail">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 mt-4" v-for="(item, index) of allItems" :key="`car-card-${index}`">
        <div class="m-3">
          <img class="rounded" src="https://mclaren.scene7.com/is/image/mclaren/765lt-3-1200x1200-1:crop-4x3?wid=1920&hei=1440" alt="my_future_car_gift_by_angel">
         <button class="align-top float-right"><span class="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 mt-3">info</span></button>
         <h2 class="text-lg mt-2 mb-2">Brand:</h2>
          <h2 class="text-lg mt-2 mb-2">Price:</h2>
        <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">BLABLA</p>
        </div>
      </div>
  
 </div>
  </router-link>  
  </div>
  </info-layout>
</template>

<script>
import axios from "axios";
import InfoLayout from '../layouts/info.vue'
// @ is an alias to /src
export default {
  name: "Home",
  components :{
    InfoLayout
  },
  data() {
    return {
      loginuser: [],
      allItems: [0, 0, 0, 0, 0]
    };
  },
};
</script>