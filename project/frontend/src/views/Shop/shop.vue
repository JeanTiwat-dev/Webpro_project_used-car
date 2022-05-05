<template>
<welcome-layout>
<div class="pt-20 pb-20" id="app">
       
    <div class="w-full grid grid-cols-12">
        <div class="col-start-1 col-end-3 text-center text-bold grid grid-cols-1 divide-y py-4 h-screen overflow-y-auto fixed">
          
            <div class="rounded shadow border p-5 w-full mt-3 bg-gray-50">
              <div>
              <input type="text" v-model="search" class=" text-base placeholder-gray-500 pl-6 pb-1 rounded-3xl border border-orange-400 max-w-screen-2xl py-2 focus:outline-none focus:border-orange-400"/>
                <i class="fa fa-search text-gray-400 z-20 m-2 hover:text-gray-500" ></i></div>
              <h5 class="text-xl text-left font-bold mb-4 mt-2">Filtered by<i class="text-gray-400 fa-solid fa-filter ml-2"></i></h5>
              <div class="dropdown text-left">
                <button class="col-span-2 rounded-full px-4 py-2 w-full bg-orange-500 text-white hover:bg-orange-300 duration-300" @click="brandClick = !brandClick"><i class="mr-2 fa-solid fa-car-side"></i>Brand</button>
                <ul class="text-center  items-center text-gray-700 pt-2" v-show="brandClick == true">
                    <!-- <li class=""><a class="w-full rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"></a></li> -->
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full m-3" src="../../assets/mercedes.png" /><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="BrandFiltered('Mercedes Benz'); mer = !mer">Mercedes Benz</button></li>
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full m-2" src="../../assets/bmw.png" /><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="BrandFiltered('BMW')">BMW</button></li>
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full m-2" src="../../assets/nissan.png" /><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="BrandFiltered('Nissan')">Nissan</button></li>
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full m-2" src="../../assets/honda.png" /><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="BrandFiltered('Honda')">Honda</button></li>
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full m-2" src="../../assets/toyota.png" /><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="BrandFiltered('Toyota')">Toyota</button></li>
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full m-2" src="../../assets/mazda.png" /><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="BrandFiltered('Mazda')">Mazda</button></li>
                </ul>
              </div>
              <div class="dropdown  text-left mt-6">
                 <button class="col-span-2 px-4 py-2 w-full rounded-full bg-orange-500 text-white hover:bg-orange-300 duration-300" @click="priceClick = !priceClick"><i class="fa-solid text-white mr-2 fa-money-bill"></i>Price</button>
                 <ul class="text-center items-center text-gray-700 pt-2 " v-show="priceClick == true">
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="PriceFiltered(1)">Higher than 10,000,000</button></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="PriceFiltered(2)">5,000,000 - 10,000,000</button></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="PriceFiltered(3)">2,000,000 - 4,999,999</button></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="PriceFiltered(4)">800,000 - 1,999,999</button></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="PriceFiltered(5)">500,000 - 799,999</button></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><button class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="PriceFiltered(6)">Cheaper than 500,000</button></li>
                </ul>
              </div>

               <div class="dropdown  text-left mt-6">
                 <button class="col-span-2 px-4 py-2 w-full rounded-full bg-orange-500 text-white hover:bg-orange-300 duration-300" @click="yearClick = !yearClick"><i class="fa-solid text-white mr-2 fa-calendar"></i>Year</button>
                 <ul class="text-center  items-center text-gray-700 pt-2 " v-show="yearClick == true">
                    <li class="flex items-center mb-3"><i class="fa-solid fa-circle-chevron-right mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="yearFiltered(1)">2020 - 2022</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-circle-chevron-right mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="yearFiltered(2)">2016 - 2019</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-circle-chevron-right mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="yearFiltered(3)">2011 - 2015</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-circle-chevron-right mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="yearFiltered(4)">2004 - 2014</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-circle-chevron-right mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="yearFiltered(5)">Older than 2004</a></li>
                </ul>
              </div>

              <div class="dropdown  text-left mt-6">
                 <button class="col-span-2 px-4 py-2 w-full rounded-full bg-orange-500 text-white hover:bg-orange-300 duration-300" @click="colorClick = !colorClick"><i class="text-white mr-2 fa-solid fa-palette"></i>Color</button>
                
                 <ul class="text-center  items-center text-gray-700 pt-2 m-4" v-show="colorClick == true">
                  <div class="grid grid-cols-4 m-2">
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-gray-600 hover:bg-gray-500 text-gray-600 py-2 px-4 block whitespace-no-wrap" @click="checkColor('Gray')">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-gray-400 hover:bg-gray-300 text-gray-400  py-2 px-4 block whitespace-no-wrap" @click="checkColor('Silver')">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-blue-900 hover:bg-blue-800 text-blue-900 py-2 px-4 block whitespace-no-wrap" @click="checkColor(color)">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-red-600 hover:bg-red-500 text-red-600 py-2 px-4 block whitespace-no-wrap">.</a></button>
                  </div>

                  <div class="grid grid-cols-4 m-2">
                     <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-green-600 hover:bg-green-500 text-green-600 py-2 px-4 block whitespace-no-wrap">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-amber-900 hover:bg-amber-800 text-amber-900 py-2 px-4 block whitespace-no-wrap">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-orange-500 hover:bg-orange-400 text-orange-500 py-2 px-4 block whitespace-no-wrap">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-yellow-500 hover:bg-yellow-400 text-yellow-500 py-2 px-4 block whitespace-no-wrap">.</a></button>
                  </div>

                  <div class="grid grid-cols-4 m-2">
                   <button class="flex items-center mb-3 p-2 "><a class="w-full drop-shadow-2xl rounded-full border-2 border-gray-100 bg-white hover:bg-gray-50 text-white py-2 px-4 block">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-black hover:bg-gray-900 text-black py-2 px-4 block whitespace-no-wrap">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-neutral-700 hover:bg-neutral-600 text-neutral-700 py-2 px-4 block whitespace-no-wrap">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-purple-500 py-2 px-4 block whitespace-no-wrap">.</a></button>
                  </div>                                                                                                                       
                </ul>
            </div>
            <h5 class="text-xl text-left font-bold mb-4 mt-8">Sorted by<i class="text-gray-400 ml-2 fa-solid fa-sort"></i></h5>
              <div class="dropdown  text-left">
                <button class="col-span-2 rounded-full px-4 py-2 w-full bg-orange-500 text-white hover:bg-orange-300 duration-300" @click="distanceSortClick = !distanceSortClick"><i class="mr-2 fa-solid fa-road"></i>Distance</button>
                <ul class="text-center  items-center text-gray-700 pt-2 " v-show="distanceSortClick == true"> 
                    <!-- <button class=""><a class="w-full rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"></a></li> -->
                     <li class="flex items-center mb-3"><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-solid fa-sort-down mr-2"></i>Lowest to Highest<i class="fa-solid fa-sort-up ml-2"></i></a></li>
                    <li class="flex items-center mb-3"><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-solid fa-sort-up mr-2"></i>Highest to Lowest<i class="fa-solid fa-sort-down ml-2"></i></a></li>
                </ul>
              </div>

              <div class="dropdown  text-left mt-6">
                <button class="col-span-2 rounded-full px-4 py-2 w-full bg-orange-500 text-white hover:bg-orange-300 duration-300" @click="priceSortClick = !priceSortClick"><i class="fa-solid text-white mr-2 fa-money-bill"></i>Price</button>
                <ul class="text-center  items-center text-gray-700 pt-2 " v-show="priceSortClick == true">
                    <li class="flex items-center mb-3"><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-solid fa-sort-down mr-2"></i>Lowest to Highest<i class="fa-solid fa-sort-up ml-2"></i></a></li>
                    <li class="flex items-center mb-3"><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-solid fa-sort-up mr-2"></i>Highest to Lowest<i class="fa-solid fa-sort-down ml-2"></i></a></li>
                    
                </ul>
              </div>
              
        </div>
        
        </div>

        <div class="col-start-4 col-end-13 m-2">
            <div class="min-h-screen container mt-6 mr-3 mx-auto">
              <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-2">
                <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 mt-4" v-for="(item, index) of car" :key="`car-card-${index}`">
                  <router-link :to="`/detail/${item.car_id}`">
                  <div class="m-3">
                    <img class="rounded" :src=getCarImage(item.car_img)>
                  <button class="align-top float-right"><span class="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 mt-3">{{item.car_price}} ฿</span></button>
                  <h2 class="text-s mt-6 mb-2">Brand: {{item.car_brand}}</h2>
                    <h2 class="text-lg mt-2 mb-2">Distance: {{item.car_distance}}</h2>
                  <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">{{item.car_desc}}</p>
                  </div>
                  </router-link>
                </div>
                 <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 mt-4" v-for="(item, index) of car" :key="`car-card-${index}`">
                  <router-link :to="`/detail/${item.car_id}`">
                  <div class="m-3">
                    <img class="rounded" :src=getCarImage(item.car_img)>
                  <button class="align-top float-right"><span class="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 mt-3">{{item.car_price}} ฿</span></button>
                  <h2 class="text-s mt-6 mb-2">Brand: {{item.car_brand}}</h2>
                    <h2 class="text-lg mt-2 mb-2">Distance: {{item.car_distance}}</h2>
                  <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">{{item.car_desc}}</p>
                  </div>
                  </router-link>
                </div>
                
  
              </div>
         </div>
        </div>
    </div>
  </div>
</welcome-layout>
</template>

<script>
import axios from "axios";
import WelcomeLayout from '../layouts/welcome.vue'

export default {
  components: { WelcomeLayout },
  data() {
    return {
      loginuser: [],
      el: '#app',
      search: "",
      // filtered by
      brandClick: false,
      priceClick: false,
      yearClick: false,
      colorClick: false,

      // sorted by
      distanceSortClick: false,
      priceSortClick: false,
      // allItems: [
      //   {id:1, name: "Mercedes Benz", price: "2,000,000", description: "รถมือสองออนไลน์", distance: "40,000 km"},
      //   {id:2, name: "BMW", price: "500,000", description: "รถมือสองออนไลน์", distance: "20,000 km"},
      //   {id:3, name: "Nissan", price: "100,000", description: "รถมือสองออนไลน์", distance: "320,000 km"},
      //   {id:4, name: "Honda", price: "20,000,000", description: "รถมือสองออนไลน์", distance: "250,000 km"},
      //   {id:5, name: "Toyota", price: "899,900", description: "รถมือสองออนไลน์", distance: "17,000 km"},
      //   {id:6, name: "Mazda", price: "311,450", description: "รถมือสองออนไลน์", distance: "90,000 km"},
      //   {id:7, name: "Ferrari", price: "220,000", description: "รถมือสองออนไลน์", distance: "1,000 km"},
      //   {id:8, name: "Lamborgi", price: "460,000", description: "รถมือสองออนไลน์", distance: "20,050 km"},
      //   {id:9, name: "Mini", price: "1,200,000", description: "รถมือสองออนไลน์", distance: "70,000 km"},
      //   {id:10, name: "Agoda", price: "3,200,000", description: "รถมือสองออนไลน์", distance: "40,000 km"}
      // ],
      car: []
      };
    },
    mounted() {
      this.getCar();
    },
    methods: {
      helloWorld(item) {
        console.log(item)

      },
      getCar() {
        axios
        .get("http://localhost:3000/CarsData")
        .then(res => {
          this.car = res.data
          console.log(this.car)
        })
        .catch(err => console.log(err));
      },
      getCarImage(path) {
        if (path) {
          return "http://localhost:3000/" + path
        }
      },
      BrandFiltered(brand) {
      this.car = this.car.filter((val) => val.car_brand == brand)
      },
      PriceFiltered(num) {
        if (num == 1) {
          this.car = this.car.filter((val => val.car_price > 10000000))
        }
        else if (num == 2) {
          this.car = this.car.filter((val) => ((val.car_price <= 10000000) && (val.car_price >= 5000000 )))
        }
        else if (num == 3) {
          this.car = this.car.filter((val) => ((val.car_price < 5000000) && (val.car_price >= 2000000 )))
        }
        else if (num == 4) {
          this.car = this.car.filter((val) => ((val.car_price < 2000000) && (val.car_price >= 800000 )))
        }
        else if (num == 5) {
          this.car = this.car.filter((val) => ((val.car_price < 800000) && (val.car_price >= 500000 )))
        }
        else {
          this.car = this.car.filter((val) => ((val.car_price < 500000 )))
        }
      },
      yearFiltered(num) {
        if (num == 1) {
          this.car = this.car.filter((val) => ((val.car_modelyear >= 2020 ) && (val.car_modelyear <= 2022)))
        }
        else if (num == 2) {
          this.car = this.car.filter((val) => ((val.car_modelyear >= 2016 ) && (val.car_modelyear <= 2019)))
        }
        else if (num == 3) {
          this.car = this.car.filter((val) => ((val.car_modelyear >= 2011 ) && (val.car_modelyear <= 2015)))
        }
        else if (num == 4) {
          this.car = this.car.filter((val) => ((val.car_modelyear >= 2014 ) && (val.car_modelyear <= 2004)))
        }
        else {
          this.car = this.car.filter((val) => val.car_modelyear < 2014)
        }
      }
    
  }
  
  
};
</script>