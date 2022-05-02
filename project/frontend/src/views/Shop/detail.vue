<template>
<welcome-layout>
  <div class="container mx-auto pt-20 pb-20">
    <div class="carousel relative shadow-2xl bg-white w-full mt-4">
      <div class="carousel-inner relative overflow-hidden">
        <div v-for="(carousel, index) of carouselItems" :key="`carousel-item-${index}`">
          <input class="carousel-open" type="radio" :id="`carousel-${index+1}`" name="carousel" aria-hidden="true" hidden="" :checked="carousel.checked">
          <div class="carousel-item absolute opacity-0">
            <div class="block h-full w-full bg-gray-200 text-white text-5xl text-center">{{ carousel.title }}</div>
          </div>
          <label :for="carousel.prev" :class="`prev control-${index + 1} w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-orange-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto`">‹</label>
          <label :for="carousel.next" :class="`next control-${index + 1} w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto`">›</label>
        </div>

      </div>
    </div>
    <div class="mt-10 text-center bg-gray-100 p-2 w-full">
      200,000 ฿
    </div>
    <div>
      <div class="w-2/3 mx-auto mt-10 rounded-lg">
        <!-- Tabs -->
        <div class="w-full bg-gray-100  rounded-full grid grid-cols-2">
          <div
            v-for="(item, index) of tabPageItems"
            :key="`tab-item-${index}`"
            :class="`px-4 text-blue-900 text-xl font-bold rounded-full cursor-pointer mr-5 ${tabPage === item.key ? '-mb-px bg-gray-300' : ''}`"
            @click="tabPage = item.key"
          >
            <span>{{ item.title }}</span>
          </div>
        </div>

        <div class="cursor-pointer" v-show="tabPage === 'detail'">
          <div class="grid grid-cols-2">
            <div class="m-3">
                <p class="pt-2">	<i class="fa-solid fa-id-badge"></i> ID </p><hr>
                <p class="pt-2"> <i class="fa-solid fa-car-mirrors"></i>Type</p><hr>
                <p class="pt-2"> Model</p><hr>
                <p class="pt-2"> Model year</p>
            </div>
            <div class="m-3">
                <p class="pt-2"> car registration</p><hr>
                <p class="pt-2"> distance</p><hr>
                <p class="pt-2"> Owner</p><hr>
                <p > Gear system</p>
            </div>
          </div>
        </div>
        <div class="cursor-pointer" v-show="tabPage === 'spec'">
          <div v-for="(item, index) of spec" :key="`color-${index}`" class="grid grid-cols-2">
            <div class="m-3">
                <p class="pt-2">	Color: {{item.color}}</p><hr>
                <p class="pt-2"> Car engine</p><hr>
                <p class="pt-2"> Year bought</p><hr>
                <p class="pt-2"> Number of gears</p>
            </div>
            <div class="m-3">
                <p class="pt-2"> Drive type</p><hr>
                <p class="pt-2"> CMI</p><hr>
                <p class="pt-2"> Number of doors</p><hr>
                <p class="pt-2"> Manufactured</p>
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
// @ is an alias to /src
export default {
  name: "detail",
  components :{
    WelcomeLayout
  },
  data() {
    return {
      loginuser: [],
      allItems: [0, 0, 0, 0, 0],
      carouselItems: [
        {
          title: "Image 1",
          checked: true,
          prev: "carousel-3",
          next: "carousel-2"
        },
        {
          title: "Image 2",
          checked: false,
          prev: "carousel-1",
          next: "carousel-3"
        },
        {
          title: "Image 3",
          checked: false,
          prev: "carousel-2",
          next: "carousel-1"
        }
      ],
      tabPage: "detail",
      tabPageItems: [
        {
          key: 'detail',
          title: 'Detail'
        },
        {
          key: 'spec',
          title: 'Spec'
        }
      ],
      spec: [
        {id:1, color: "Black"}
      ]
    };
  },
};
</script>
<style scoped>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  height: 50vh;
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

</style>