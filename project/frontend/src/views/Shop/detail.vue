<template>
  <div class="container mx-auto">
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

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-black hover:text-blue-700">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-black hover:text-blue-700">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-black hover:text-blue-700">•</label>
          </li>
        </ol>
      </div>
    </div>
    <div class="mt-10 text-center">
      price
    </div>
    <div>
      <div class="rounded-full w-1/2 mx-auto mt-10">
        <!-- Tabs -->
        <ul id="tabs" class="inline-flex w-full grid grid-cols-2 border-b">
          <li
            v-for="(item, index) of tabPageItems"
            :key="`tab-item-${index}`"
            :class="`px-4 text-black font-bold rounded-t ${tabPage === item.key ? '-mb-px bg-orange-500' : ''}`"
            @click="tabPage = item.key"
          >
            <span>{{ item.title }}</span>
          </li>
        </ul>

        <div class="cursor-pointer" v-show="tabPage === 'detail'">
          <div class="grid grid-cols-2">
            <div class="m-3">
                <p>	<i class="fa-solid fa-id-badge"></i> ID </p><hr>
                <p> <i class="fa-solid fa-car-mirrors"></i>Type</p><hr>
                <p> Model</p><hr>
                <p> Model year</p>
            </div>
            <div class="m-3">
                <p> car registration</p><hr>
                <p> distance</p><hr>
                <p> Owner</p><hr>
                <p> Gear system</p>
            </div>
          </div>
        </div>
        <div class="cursor-pointer" v-show="tabPage === 'spec'">
          <div class="grid grid-cols-2">
            <div class="m-3">
                <p>	Color </p><hr>
                <p> Car engine</p><hr>
                <p> Year bought</p><hr>
                <p> Number of gears</p>
            </div>
            <div class="m-3">
                <p> Drive type</p><hr>
                <p> CMI</p><hr>
                <p> Number of doors</p><hr>
                <p> Manufactured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: "detail",
  data() {
    return {
      loginuser: [],
      allItems: [0, 0, 0, 0, 0],
      carouselItems: [
        {
          title: "Slide 1",
          checked: true,
          prev: "carousel-3",
          next: "carousel-2"
        },
        {
          title: "Slide 2",
          checked: false,
          prev: "carousel-1",
          next: "carousel-3"
        },
        {
          title: "Slide 3",
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
#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #ffb317; /*Set to match the Tailwind colour you want the active one to be */
}

</style>