<template>
  <info-layout>

  <div class="min-h-screen container mt-4 mx-auto" id="app">
  <router-link to="/detail">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-2">
      <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 mt-4" v-for="(item, index) of allItems" :key="`car-card-${index}`">
        <div class="m-3">
          <img class="rounded" src="https://mclaren.scene7.com/is/image/mclaren/765lt-3-1200x1200-1:crop-4x3?wid=1920&hei=1440" alt="my_future_car_gift_by_angel">
         <button class="align-top float-right"><span class="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 mt-3">{{item.price}} ฿</span></button>
         <h2 class="text-s mt-6 mb-2">Brand: {{item.name}}</h2>
          <h2 class="text-lg mt-2 mb-2">Distance: {{item.distance}}</h2>
        <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">{{item.description}}</p>
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
      el: '#app',
      allItems: [
        {id:1, name: "Mercedes Benz", price: "2,000,000", description: "รถมือสองออนไลน์", distance: "40,000 km"},
        {id:2, name: "BMW", price: "500,000", description: "รถมือสองออนไลน์", distance: "20,000 km"},
        {id:3, name: "Nissan", price: "100,000", description: "รถมือสองออนไลน์", distance: "320,000 km"},
        {id:4, name: "Honda", price: "20,000,000", description: "รถมือสองออนไลน์", distance: "250,000 km"},
        {id:5, name: "Toyota", price: "899,900", description: "รถมือสองออนไลน์", distance: "17,000 km"},
        {id:6, name: "Mazda", price: "311,450", description: "รถมือสองออนไลน์", distance: "90,000 km"},
        {id:7, name: "Ferrari", price: "220,000", description: "รถมือสองออนไลน์", distance: "1,000 km"},
        {id:8, name: "Lamborgi", price: "460,000", description: "รถมือสองออนไลน์", distance: "20,050 km"},
        {id:9, name: "Mini", price: "1,200,000", description: "รถมือสองออนไลน์", distance: "70,000 km"},
        {id:10, name: "Agoda", price: "3,200,000", description: "รถมือสองออนไลน์", distance: "40,000 km"}
      ],
      
    }
  
  },
};
</script>