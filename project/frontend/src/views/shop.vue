<template>
  <info-layout>
    <div class="min-h-screen flex grid grid-cols-4 w-5/5 h-2/5 gap-4 p-4 z-0">
      <div v-for="(item, index) of allItems" :key="`car-card-${index}`">
        <div class="w-100 flex flex-col bg-gray-200 border rounded shadow-lg drop-shadow-xl relative">
          <div class="m-0 p-0 border flex-3 rounded">
            <img src="https://mclaren.scene7.com/is/image/mclaren/765lt-3-1200x1200-1:crop-4x3?wid=1920&hei=1440" alt="my_future_car_gift_by_angel">
          </div>
          <div class="flex-1 m-2">
            Brand:
          </div>
          <div class="flex-1 m-2">
            Price:
          </div>
          <div class="flex-1 m-2">
            My Super Car
          </div>
          <div class="card_action absolute text-black">
            <button>
              <i class="fa fa-info-circle z-40" style="font-size:40px; border: solid 1px white;border-radius: 100%;"></i>
            </button>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          </div>
        </div>
      </div>
    </div>
  </info-layout>
</template>

<script>
import axios from "axios";
import InfoLayout from './layouts/info.vue'
// @ is an alias to /src
export default {
  name: "Home",
  components :{
    InfoLayout
  },
  data() {
    return {
      loginuser: [],
      allItems: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  },
};
</script>
<style scoped>
    .card_action {
      position: absolute;
      top: 55.5%;
      right: 10px;
    }
    .card_action button {
      width: 30px;
      height: 30px;
    }
</style>
