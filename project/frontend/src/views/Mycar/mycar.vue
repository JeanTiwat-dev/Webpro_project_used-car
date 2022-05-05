<template>
<welcome-layout>
    <div class="min-h-screen bg-gradient-to-br">
        <h2 class="text-3xl m-6 mt-12">{{user.user_firstname}}'s Cars</h2>
    <div class="col-start-4 col-end-13 ">
            <div class="min-h-screen container mt-4 mx-auto" id="app">
              <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-2">
                <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 mt-4" v-for="(item, index) of car" :key="`car-card-${index}`">
                  <router-link :to="`/detail/${item.car_id}`">
                  <div class="m-3">
                    <img class="rounded" :src=getCarImage(item.car_img)>
                  <button class="align-top float-right"><span class="text-sm text-teal-800 font-mono bg-gray-200 inline rounded-full px-2 mt-3">{{convertprice(item.car_price)}} </span></button>
                  <h2 class="text-lg mt-6 mb-2">{{item.car_brand}}</h2>
                  <router-link :to="`/editcar/${item.car_id}`" ><i class="mt-6 float-right cursor-pointer font-3xl text-sky-900 fa-solid fa-pen-to-square"></i></router-link>
                    <h2 class="text-s mt-2 mb-2">Distance: {{convertdis(item.car_distance)}}</h2>
                    <h2 class="text-s mt-6 mb-2">{{item.car_modelyear}}</h2>
                  <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">{{item.car_desc}}</p>
                  </div>
                  </router-link>
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
  name: "mycar",
  components :{
    WelcomeLayout
  },
  data() {
    return {
      car: {},
      user: []
      };
    },
      mounted() {
        this.getCar();
        this.isLoggedin();
      },
      methods: {
        isLoggedin() {
      this.user = JSON.parse(localStorage.getItem("user_account"));
      console.log(this);
        },
        getCar() {
            console.log(this.$route.params.userId);
        axios
        .get(`http://localhost:3000/CarsData/${this.$route.params.userId}`)
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
      convertprice(price) {
          let price2 = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "THB"
          }).format(price);
          return price2.slice(4, price2.length - 3) + ' ฿';
      },
      convertdis(price) {
          let price2 = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "THB"
          }).format(price);
          return price2.slice(4, price2.length - 3) + ' KM';
    },
      }
    };
</script>
