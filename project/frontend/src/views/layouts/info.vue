<template>
<welcome-layout>
  <div class="pt-20 pb-20">
       
    <div class="w-full grid grid-cols-12">
        <div class="col-start-1 col-end-3 text-center text-bold grid grid-cols-1 divide-y py-4 h-screen overflow-y-auto fixed">
          
            <div class="rounded shadow border p-2 w-full mt-3 bg-gray-50">
              <div>
              <input type="text" v-model="search" class=" text-base placeholder-gray-500 pl-6 pb-1 rounded-3xl border border-orange-400 max-w-screen-2xl py-2 focus:outline-none focus:border-orange-400"/>
                <i class="fa fa-search text-gray-400 z-20 m-2 hover:text-gray-500" ></i></div>
              <h5 class="text-xl text-left font-bold mb-4 mt-2">Filtered by<i class="text-gray-400 fa-solid fa-filter ml-2"></i></h5>
              <div class="dropdown text-left">
                <button class="col-span-2 rounded-full px-4 py-2 w-full bg-orange-500 text-white hover:bg-orange-300 duration-1000" @click="brandClick = !brandClick"><i class="mr-2 fa-solid fa-car-side"></i>Brand</button>
                <ul class="text-center  items-center text-gray-700 pt-2" v-show="brandClick == true">
                    <!-- <li class=""><a class="w-full rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"></a></li> -->
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full mr-10" src="../../assets/mercedes.png" /><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Mercedes Benz</a></li>
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full mr-10" src="../../assets/bmw.png" /><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">BMW</a></li>
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full mr-10" src="../../assets/nissan.png" /><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nissan</a></li>
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full mr-10" src="../../assets/honda.png" /><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Honda</a></li>
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full mr-10" src="../../assets/toyota.png" /><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Toyota</a></li>
                    <li class="flex items-center mb-3"><img class="flex-none w-6 h-full mr-10" src="../../assets/mazda.png" /><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Mazda</a></li>
                </ul>
              </div>
              <div class="dropdown  text-left mt-6">
                 <button class="col-span-2 px-4 py-2 w-full rounded-full bg-orange-500 text-white hover:bg-orange-300 duration-1000" @click="priceClick = !priceClick"><i class="fa-solid text-white mr-2 fa-money-bill"></i>Price</button>
                 <ul class="text-center items-center text-gray-700 pt-2 " v-show="priceClick == true">
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Higher than 10,000,000</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">5,000,000 - 10,000,000</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">2,000,000 - 4,999,999</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">800,000 - 1,999,999</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">500,000 - 799,999</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-baht-sign mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Cheaper than 500,000</a></li>
                </ul>
              </div>

               <div class="dropdown  text-left mt-6">
                 <button class="col-span-2 px-4 py-2 w-full rounded-full bg-orange-500 text-white hover:bg-orange-300 duration-1000" @click="yearClick = !yearClick"><i class="fa-solid text-white mr-2 fa-calendar"></i>Year</button>
                 <ul class="text-center  items-center text-gray-700 pt-2 " v-show="yearClick == true">
                    <li class="flex items-center mb-3"><i class="fa-solid fa-circle-chevron-right mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">2020 - 2022</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-circle-chevron-right mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">2016 - 2019</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-circle-chevron-right mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">2011 - 2015</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-circle-chevron-right mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">2004 - 2014</a></li>
                    <li class="flex items-center mb-3"><i class="fa-solid fa-circle-chevron-right mr-4"></i><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Older than 2004</a></li>
                </ul>
              </div>

              <div class="dropdown  text-left mt-6">
                 <button class="col-span-2 px-4 py-2 w-full rounded-full bg-orange-500 text-white hover:bg-orange-300 duration-1000" @click="colorClick = !colorClick"><i class="text-white mr-2 fa-solid fa-palette"></i>Color</button>
                
                 <ul class="text-center  items-center text-gray-700 pt-2 m-4" v-show="colorClick == true">
                  <div class="grid grid-cols-4 m-2">
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-gray-600 hover:bg-gray-500 text-gray-600 py-2 px-4 block whitespace-no-wrap" href="#">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-gray-400 hover:bg-gray-300 text-gray-400  py-2 px-4 block whitespace-no-wrap" href="#">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-blue-900 hover:bg-blue-800 text-blue-900 py-2 px-4 block whitespace-no-wrap" href="#">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-red-600 hover:bg-red-500 text-red-600 py-2 px-4 block whitespace-no-wrap" href="#">.</a></button>
                  </div>

                  <div class="grid grid-cols-4 m-2">
                     <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-green-600 hover:bg-green-500 text-green-600 py-2 px-4 block whitespace-no-wrap" href="#">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-amber-900 hover:bg-amber-800 text-amber-900 py-2 px-4 block whitespace-no-wrap" href="#">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-orange-500 hover:bg-orange-400 text-orange-500 py-2 px-4 block whitespace-no-wrap" href="#">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-yellow-500 hover:bg-yellow-400 text-yellow-500 py-2 px-4 block whitespace-no-wrap" href="#">.</a></button>
                  </div>

                  <div class="grid grid-cols-4 m-2">
                   <button class="flex items-center mb-3 p-2 "><a class="w-full drop-shadow-2xl rounded-full border-2 border-gray-100 bg-white hover:bg-gray-50 text-white py-2 px-4 block" href="#">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-black hover:bg-gray-900 text-black py-2 px-4 block whitespace-no-wrap" href="#">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-neutral-700 hover:bg-neutral-600 text-neutral-700 py-2 px-4 block whitespace-no-wrap" href="#">.</a></button>
                    <button class="flex items-center mb-3 p-2"><a class="w-full drop-shadow-2xl rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-purple-500 py-2 px-4 block whitespace-no-wrap" href="#">.</a></button>
                  </div>                                                                                                                       
                </ul>
            </div>
            <h5 class="text-xl text-left font-bold mb-4 mt-8">Sorted by<i class="text-gray-400 ml-2 fa-solid fa-sort"></i></h5>
              <div class="dropdown  text-left">
                <button class="col-span-2 rounded-full px-4 py-2 w-full bg-orange-500 text-white hover:bg-orange-300 duration-1000" @click="distanceSortClick = !distanceSortClick"><i class="mr-2 fa-solid fa-road"></i>Distance</button>
                <ul class="text-center  items-center text-gray-700 pt-2 " v-show="distanceSortClick == true"> 
                    <!-- <button class=""><a class="w-full rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"></a></li> -->
                     <li class="flex items-center mb-3"><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-solid fa-sort-down mr-2"></i>Lowest to Highest<i class="fa-solid fa-sort-up ml-2"></i></a></li>
                    <li class="flex items-center mb-3"><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-solid fa-sort-up mr-2"></i>Highest to Lowest<i class="fa-solid fa-sort-down ml-2"></i></a></li>
                </ul>
              </div>

              <div class="dropdown  text-left mt-6">
                <button class="col-span-2 rounded-full px-4 py-2 w-full bg-orange-500 text-white hover:bg-orange-300 duration-1000" @click="priceSortClick = !priceSortClick"><i class="fa-solid text-white mr-2 fa-money-bill"></i>Price</button>
                <ul class="dropdown-menu hidden text-center  items-center text-gray-700 pt-2 " v-show="priceSortClick == true">
                    <li class="flex items-center mb-3"><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-solid fa-sort-down mr-2"></i>Lowest to Highest<i class="fa-solid fa-sort-up ml-2"></i></a></li>
                    <li class="flex items-center mb-3"><a class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"><i class="fa-solid fa-sort-up mr-2"></i>Highest to Lowest<i class="fa-solid fa-sort-down ml-2"></i></a></li>
                    
                </ul>
              </div>
              
        </div>
        
        </div>
        <div class="col-start-4 col-end-13">
            <slot/>
        </div>
    </div>
  </div>
</welcome-layout>
</template>

<script>
import WelcomeLayout from '../layouts/welcome.vue'
export default {
  components: { WelcomeLayout },
  name: "DefaultLayout",

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
      priceSortClick: false
    };
  },
};
</script>
