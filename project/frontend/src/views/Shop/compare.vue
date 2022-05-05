<template>
  <welcome-layout>
    <div id="app">
      <div
        class="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100"
      >
      <div class="grid grid-cols-2 gap-16 p-4">
        <img class="drop-shadow-lg rounded-lg" :src="getCarImage(car1.car_images[0].car_img)">
        <img class="drop-shadow-lg rounded-lg" :src="getCarImage(car2.car_images[0].car_img)">
      </div>
        <!-- compare -->
        <div class="flex space-x-3 justify-center w-1/2">
          <!-- col 1 -->
          <div
            class="bg-orange-200 border-2 w-5/12 space-y-2 p-4 rounded-md text-center"
          >
          <div class="border-b-2 border-white">
            </div>
            <!-- ราคา -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ convertprice(car1.car_price) }}</p>
            </div>
            <!-- ประเภทรถ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car1.car_type }}</p>
            </div>
            <!-- แบรนด์ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car1.car_brand }}</p>
            </div>
            <!-- รุ่น -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car1.car_model }}</p>
            </div>
            <!-- ปีที่ออก -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car1.car_yearbought }}</p>
            </div>
            <!-- ระบบเกียร์ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car1.car_gear }}</p>
            </div>
            <!-- จำนวนเกียร์ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car1.car_num_of_gear }}</p>
            </div>
            <!-- เครื่องยนต์ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car1.car_engine }}</p>
            </div>
            <!-- ระบบขับเคลื่อน -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car1.car_drive_type }}</p>
            </div>
            <!-- ระยะทางที่ขับ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ convertdis(car1.car_distance) }}</p>
            </div>
            <!-- พ.ร.บ -->
            <div class="p-4">
              <p>{{ convertDate(car1.car_act) }}</p>
            </div>
          </div>
          <!-- col 2 -->
          <div class="bg-white w-3/12 space-y-2 p-4 rounded-md text-center">
            <!-- ราคา -->
            <div class="p-4 border-b-2">
              <p>ราคา</p>
            </div>
            <!-- ประเภทรถ -->
            <div class="p-4 border-b-2">
              <p>ประเภทรถ</p>
            </div>
            <!-- แบรนด์ -->
            <div class="p-4 border-b-2">
              <p>แบรนด์</p>
            </div>
            <!-- รุ่น -->
            <div class="p-4 border-b-2">
              <p>รุ่น</p>
            </div>
            <!-- ปีที่ออก -->
            <div class="p-4 border-b-2">
              <p>ปีที่ออก</p>
            </div>
            <!-- ระบบเกียร์ -->
            <div class="p-4 border-b-2">
              <p>ระบบเกียร์</p>
            </div>
            <!-- จำนวนเกียร์ -->
            <div class="p-4 border-b-2">
              <p>จำนวนเกียร์</p>
            </div>
            <!-- เครื่องยนต์ -->
            <div class="p-4 border-b-2">
              <p>เครื่องยนต์</p>
            </div>
            <!-- ระบบขับเคลื่อน -->
            <div class="p-4 border-b-2">
              <p>ระบบขับเคลื่อน</p>
            </div>
            <!-- ระยะทางที่ขับ -->
            <div class="p-4 border-b-2">
              <p>ระยะทางที่ขับ</p>
            </div>
            <!-- พ.ร.บ -->
            <div class="p-4">
              <p>พ.ร.บ</p>
            </div>
          </div>
          <!-- col 3 -->
          <div
            class="bg-orange-200 border-2 w-5/12 space-y-2 p-4 rounded-md text-center"
          >
          <div class="border-b-2 border-white">
            </div>
            <!-- ราคา -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ convertprice(car2.car_price) }}</p>
            </div>
            <!-- ประเภทรถ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car2.car_type }}</p>
            </div>
            <!-- แบรนด์ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car2.car_brand }}</p>
            </div>
            <!-- รุ่น -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car2.car_model }}</p>
            </div>
            <!-- ปีที่ออก -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car2.car_yearbought }}</p>
            </div>
            <!-- ระบบเกียร์ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car2.car_gear }}</p>
            </div>
            <!-- จำนวนเกียร์ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car2.car_num_of_gear }}</p>
            </div>
            <!-- เครื่องยนต์ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car2.car_engine }}</p>
            </div>
            <!-- ระบบขับเคลื่อน -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ car2.car_drive_type }}</p>
            </div>
            <!-- ระยะทางที่ขับ -->
            <div class="p-4 border-b-2 border-white">
              <p>{{ convertdis(car2.car_distance) }}</p>
            </div>
            <!-- พ.ร.บ -->
            <div class="p-4">
              <p>{{ convertDate(car2.car_act) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </welcome-layout>
</template>
<script>
import axios from "axios";
import WelcomeLayout from "../layouts/welcome.vue";
export default {
  name: "compare",
  components: {
    WelcomeLayout
  },
  data() {
    return {
      car1: [],
      car2: [],
    };
  },
  mounted() {
    this.getcar(this.$route.params.car1, this.$route.params.car2);
  },
  methods: {
    getcar(car1, car2) {
      axios.get(`http://localhost:3000/getCarsData/${car1}`).then(res => {
        this.car1 = res.data;
      });
      axios.get(`http://localhost:3000/getCarsData/${car2}`)
      .then(res => {
          this.car2 = res.data;
      })
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
