<template>
<welcome-layout>
  <div v-if="car" class="container mx-auto">
     <div class="carousel relative shadow-2xl bg-white w-full mt-4">
    <div class="carousel-inner relative overflow-hidden w-full">
      <!--Slide 1-->
      <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
      <div class="carousel-item absolute opacity-0" style="height:75vh;">
        <img :src="getCarImage(car.car_images[0].car_img)" class="block h-full w-full bg-gray-200 text-white text-5xl text-center" style="background-size: 100% auto"/>
      </div>
      <label for="carousel-6" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-200 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

      <!--Slide 2-->
      <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
      <div class="carousel-item absolute opacity-0" style="height:75vh;">
        <img :src="getCarImage(car.car_images[1].car_img)" class="block h-full w-full bg-gray-200 text-white text-5xl text-center"/>
      </div>
      <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

      <!--Slide 3-->
      <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
      <div class="carousel-item absolute opacity-0" style="height:75vh;">
        <img :src="getCarImage(car.car_images[2].car_img)" class="block h-full w-full bg-gray-200 text-white text-5xl text-center"/>
      </div>
      <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-4" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

      <!--Slide 4-->
       <input class="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden="">
      <div class="carousel-item absolute opacity-0" style="height:75vh;">
        <img :src="getCarImage(car.car_images[3].car_img)" class="block h-full w-full bg-gray-200 text-white text-5xl text-center"/>
      </div>
      <label for="carousel-3" class="prev control-4 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-5" class="next control-4 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

       <!--Slide 5-->
       <input class="carousel-open" type="radio" id="carousel-5" name="carousel" aria-hidden="true" hidden="">
      <div class="carousel-item absolute opacity-0" style="height:75vh;">
        <img :src="getCarImage(car.car_images[4].car_img)" class="block h-full w-full bg-gray-200 text-white text-5xl text-center"/>
      </div>
      <label for="carousel-4" class="prev control-5 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-6" class="next control-5 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

       <!--Slide 6-->
       <input class="carousel-open" type="radio" id="carousel-6" name="carousel" aria-hidden="true" hidden="">
      <div class="carousel-item absolute opacity-0" style="height:75vh;">
        <img :src="getCarImage(car.car_images[5].car_img)" class="block h-full w-full bg-gray-200 text-white text-5xl text-center"/>
      </div>
      <label for="carousel-5" class="prev control-6 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-1" class="next control-6 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
      <!-- Add additional indicators for each slide-->
      <ol class="carousel-indicators">
        <li class="inline-block mr-3">
          <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
        </li>
        <li class="inline-block mr-3">
          <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
        </li>
        <li class="inline-block mr-3">
          <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
        </li>
        <li class="inline-block mr-3">
          <label for="carousel-4" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
        </li>
        <li class="inline-block mr-3">
          <label for="carousel-5" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
        </li>
        <li class="inline-block mr-3">
          <label for="carousel-6" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
        </li>
      </ol>

    </div>
    </div>
    <div class="mt-10 text-center bg-gray-100 p-2 w-full">
      {{convertprice(car.car_price)}}
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
                <p class="pt-2">	<i class="fa-solid fa-id-badge"></i> Model: {{car.car_model}}</p><hr>
                <p class="pt-2"> <i class="fa-solid fa-car-mirrors"></i>Type: {{car.car_type}}</p><hr>
                <p class="pt-2"> Color: {{car.car_color}}</p><hr>
                <p class="pt-2"> Model year: {{car.car_modelyear}}</p>
            </div>
            <div class="m-3">
                <p class="pt-2"> Car registration: {{car.car_regis}}</p><hr>
                <p class="pt-2">Distance: {{car.car_distance}}</p><hr>
                <p class="pt-2"> Owner: {{car.car_owner}}</p><hr>
                <p >Year bought: {{car.car_yearbought}}</p>
            </div>
          </div>
        </div>
        <div class="cursor-pointer" v-show="tabPage === 'spec'">
          <div  class="grid grid-cols-2">
            <div class="m-3">
                
                <p class="pt-2"> Car engine: {{car.car_engine}}</p><hr>
                <p class="pt-2">  Gear system: {{car.car_gear}}</p><hr>
                <p class="pt-2"> Number of gears: {{car.car_num_of_gear}}</p>
            </div>
            <div class="m-3">
              <p class="pt-2">	Compulsory Insurance: {{convertDate(car.car_act)}}</p><hr>
                <p class="pt-2"> Drive type: {{car.car_drive_type}}</p><hr>
                <p class="pt-2"> Number of doors: {{car.car_num_of_door}}</p><hr>
                
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
      car: {},
      };
    },
      mounted() {
        this.getCar();
      },
      methods: {
        getCar() {
        axios
        .get(`http://localhost:3000/getCarsData/${this.$route.params.id}`)
        .then(res => {
          // const carData = res.data.find((val) => val.car_id == this.$route.params.id)
          // console.log(this.$route.params.id)
          // console.log(carData)
          console.log(res.data)
          this.car = res.data
        })
        .catch(err => console.log(err));
        },
        getCarImage(path) {
          if (path) {
            return "http://localhost:3000/" + path
          }
        },
        convertDate(date) {
          return date.slice(0, 10);
        },
        convertprice(price) {
          let price2 = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "THB"
          }).format(price);
          return price2.slice(4, price2.length - 3) + ' ฿';
    },
      }
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
#carousel-3:checked ~ .control-3,
#carousel-4:checked ~ .control-4,
#carousel-5:checked ~ .control-5,
#carousel-6:checked ~ .control-6 {
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