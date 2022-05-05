<template>
  <welcome-layout>
    <div class="w-full grid grid-cols-12" id="app">
      <div
        class="col-start-1 col-end-3 text-center text-bold grid grid-cols-1 divide-y h-screen overflow-y-auto fixed"
      >
        <div class="rounded shadow border px-5 py-10 w-full bg-gray-50">
          <div>
            <!-- search -->
            <input
              type="text"
              v-model="search"
              class=" text-base placeholder-gray-500 pl-6 pb-1 rounded-3xl border border-orange-400 max-w-screen-2xl py-2 focus:outline-none focus:border-orange-400"
            />
            <i
              class="fa fa-search text-gray-400 z-20 m-2 hover:text-gray-500"
            ></i>
          </div>
          <button
            class="rounded-full px-4 py-2 mt-3 w-full bg-orange-500 text-white"
            @click="goToCompare()"
          >
            compare
          </button>
          <h5 class="text-xl text-left font-bold mb-4 mt-2">
            Filtered by<i class="text-gray-400 fa-solid fa-filter ml-2"></i>
          </h5>
          <div class="dropdown text-left">
            <button
              class="col-span-2 rounded-full px-4 py-2 w-full bg-orange-500 text-white hover:bg-orange-300 duration-300"
              @click="brandClick = !brandClick"
            >
              <i class="mr-2 fa-solid fa-car-side"></i>Brand
            </button>
            <ul
              class="text-center  items-center text-gray-700 pt-2"
              v-show="brandClick == true"
            >
              <!-- <li class=""><a class="w-full rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"></a></li> -->
              <li class="flex items-center mb-3">
                <img
                  class="flex-none w-6 h-full m-3"
                  src="../../assets/mercedes.png"
                /><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('brand', 'Mercedes Benz')"
                >
                  Mercedes Benz
                </button>
              </li>
              <li class="flex items-center mb-3">
                <img
                  class="flex-none w-6 h-full m-2"
                  src="../../assets/bmw.png"
                /><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('brand', 'BMW')"
                >
                  BMW
                </button>
              </li>
              <li class="flex items-center mb-3">
                <img
                  class="flex-none w-6 h-full m-2"
                  src="../../assets/nissan.png"
                /><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('brand', 'Nissan')"
                >
                  Nissan
                </button>
              </li>
              <li class="flex items-center mb-3">
                <img
                  class="flex-none w-6 h-full m-2"
                  src="../../assets/honda.png"
                /><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('brand', 'Honda')"
                >
                  Honda
                </button>
              </li>
              <li class="flex items-center mb-3">
                <img
                  class="flex-none w-6 h-full m-2"
                  src="../../assets/toyota.png"
                /><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('brand', 'Toyota')"
                >
                  Toyota
                </button>
              </li>
              <li class="flex items-center mb-3">
                <img
                  class="flex-none w-6 h-full m-2"
                  src="../../assets/mazda.png"
                /><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('brand', 'Mazda')"
                >
                  Mazda
                </button>
              </li>
            </ul>
          </div>
          <div class="dropdown  text-left mt-6">
            <button
              class="col-span-2 px-4 py-2 w-full rounded-full bg-orange-500 text-white hover:bg-orange-300 duration-300"
              @click="priceClick = !priceClick"
            >
              <i class="fa-solid text-white mr-2 fa-money-bill"></i>Price
            </button>
            <ul
              class="text-center items-center text-gray-700 pt-2 "
              v-show="priceClick == true"
            >
              <li class="flex items-center mb-3">
                <i class="fa-solid fa-baht-sign mr-4"></i
                ><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('price', [10000000, 0])"
                >
                  Higher than 10,000,000
                </button>
              </li>
              <li class="flex items-center mb-3">
                <i class="fa-solid fa-baht-sign mr-4"></i
                ><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('price', [5000000, 10000000])"
                >
                  5,000,000 - 10,000,000
                </button>
              </li>
              <li class="flex items-center mb-3">
                <i class="fa-solid fa-baht-sign mr-4"></i
                ><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('price', [2000000, 4999999])"
                >
                  2,000,000 - 4,999,999
                </button>
              </li>
              <li class="flex items-center mb-3">
                <i class="fa-solid fa-baht-sign mr-4"></i
                ><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('price', [800000, 1999999])"
                >
                  800,000 - 1,999,999
                </button>
              </li>
              <li class="flex items-center mb-3">
                <i class="fa-solid fa-baht-sign mr-4"></i
                ><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('price', [500000, 799999])"
                >
                  500,000 - 799,999
                </button>
              </li>
              <li class="flex items-center mb-3">
                <i class="fa-solid fa-baht-sign mr-4"></i
                ><button
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('price', [0, 500000])"
                >
                  Cheaper than 500,000
                </button>
              </li>
            </ul>
          </div>

          <div class="dropdown  text-left mt-6">
            <button
              class="col-span-2 px-4 py-2 w-full rounded-full bg-orange-500 text-white hover:bg-orange-300 duration-300"
              @click="yearClick = !yearClick"
            >
              <i class="fa-solid text-white mr-2 fa-calendar"></i>Year
            </button>
            <ul
              class="text-center  items-center text-gray-700 pt-2 "
              v-show="yearClick == true"
            >
              <li class="flex items-center mb-3">
                <i class="fa-solid fa-circle-chevron-right mr-4"></i
                ><a
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('modelYear', [2020, 2022])"
                  >2020 - 2022</a
                >
              </li>
              <li class="flex items-center mb-3">
                <i class="fa-solid fa-circle-chevron-right mr-4"></i
                ><a
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('modelYear', [2016, 2019])"
                  >2016 - 2019</a
                >
              </li>
              <li class="flex items-center mb-3">
                <i class="fa-solid fa-circle-chevron-right mr-4"></i
                ><a
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('modelYear', [2011, 2015])"
                  >2011 - 2015</a
                >
              </li>
              <li class="flex items-center mb-3">
                <i class="fa-solid fa-circle-chevron-right mr-4"></i
                ><a
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('modelYear', [2004, 2014])"
                  >2004 - 2014</a
                >
              </li>
              <li class="flex items-center mb-3">
                <i class="fa-solid fa-circle-chevron-right mr-4"></i
                ><a
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="setFilter('modelYear', [0, 2004])"
                  >Older than 2004</a
                >
              </li>
            </ul>
          </div>

          <div class="dropdown  text-left mt-6">
            <button
              class="col-span-2 px-4 py-2 w-full rounded-full bg-orange-500 text-white hover:bg-orange-300 duration-300"
              @click="colorClick = !colorClick"
            >
              <i class="text-white mr-2 fa-solid fa-palette"></i>Color
            </button>

            <ul
              class="text-center  items-center text-gray-700 pt-2 m-4"
              v-show="colorClick == true"
            >
              <div class="grid grid-cols-4 m-2">
                <button class="flex items-center mb-3 p-2">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full bg-gray-600 hover:bg-gray-500 text-gray-600 py-2 px-4 block whitespace-no-wrap"
                    @click="setFilter('color', 'Gray')"
                    >.</a
                  >
                </button>
                <button class="flex items-center mb-3 p-2">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full bg-gray-400 hover:bg-gray-300 text-gray-400  py-2 px-4 block whitespace-no-wrap"
                    @click="setFilter('color', 'Silver')"
                    >.</a
                  >
                </button>
                <button class="flex items-center mb-3 p-2">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full bg-blue-900 hover:bg-blue-800 text-blue-900 py-2 px-4 block whitespace-no-wrap"
                    @click="setFilter('color', 'Blue')"
                    >.</a
                  >
                </button>
                <button class="flex items-center mb-3 p-2">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full bg-red-600 hover:bg-red-500 text-red-600 py-2 px-4 block whitespace-no-wrap"
                    @click="setFilter('color', 'Red')"
                  ></a>
                </button>
              </div>

              <div class="grid grid-cols-4 m-2">
                <button class="flex items-center mb-3 p-2">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full bg-green-600 hover:bg-green-500 text-green-600 py-2 px-4 block whitespace-no-wrap"
                    @click="setFilter('color', 'Green')"
                    >.</a
                  >
                </button>
                <button class="flex items-center mb-3 p-2">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full bg-amber-900 hover:bg-amber-800 text-amber-900 py-2 px-4 block whitespace-no-wrap"
                    @click="setFilter('color', 'Brown')"
                    >.</a
                  >
                </button>
                <button class="flex items-center mb-3 p-2">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full bg-orange-500 hover:bg-orange-400 text-orange-500 py-2 px-4 block whitespace-no-wrap"
                    @click="setFilter('color', 'Orange')"
                    >.</a
                  >
                </button>
                <button class="flex items-center mb-3 p-2">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full bg-yellow-500 hover:bg-yellow-400 text-yellow-500 py-2 px-4 block whitespace-no-wrap"
                    @click="setFilter('color', 'Yellow')"
                    >.</a
                  >
                </button>
              </div>

              <div class="grid grid-cols-4 m-2">
                <button class="flex items-center mb-3 p-2 ">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full border-2 border-gray-100 bg-white hover:bg-gray-50 text-white py-2 px-4 block"
                    @click="setFilter('color', 'White')"
                    >.</a
                  >
                </button>
                <button class="flex items-center mb-3 p-2">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full bg-black hover:bg-gray-900 text-black py-2 px-4 block whitespace-no-wrap"
                    @click="setFilter('color', 'Black')"
                    >.</a
                  >
                </button>
                <button class="flex items-center mb-3 p-2">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full bg-neutral-700 hover:bg-neutral-600 text-neutral-700 py-2 px-4 block whitespace-no-wrap"
                    @click="setFilter('color', 'Bronze')"
                    >.</a
                  >
                </button>
                <button class="flex items-center mb-3 p-2">
                  <a
                    class="w-11 h-11 drop-shadow-2xl rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-purple-500 py-2 px-4 block whitespace-no-wrap"
                    @click="setFilter('color', 'Other')"
                    >.</a
                  >
                </button>
              </div>
            </ul>
          </div>
          <h5 class="text-xl text-left font-bold mb-4 mt-8">
            Sorted by<i class="text-gray-400 ml-2 fa-solid fa-sort"></i>
          </h5>
          <div class="dropdown  text-left">
            <button
              class="col-span-2 rounded-full px-4 py-2 w-full bg-orange-500 text-white hover:bg-orange-300 duration-300"
              @click="distanceSortClick = !distanceSortClick"
            >
              <i class="mr-2 fa-solid fa-road"></i>Distance
            </button>
            <ul
              class="text-center  items-center text-gray-700 pt-2 "
              v-show="distanceSortClick == true"
            >
              <!-- <button class=""><a class="w-full rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"></a></li> -->
              <li class="flex items-center mb-3">
                <a
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                  @click="setSort('distanceAsc')"
                  ><i class="fa-solid fa-sort-down mr-2"></i>Lowest to Highest<i
                    class="fa-solid fa-sort-up ml-2"
                  ></i
                ></a>
              </li>
              <li class="flex items-center mb-3">
                <a
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                  @click="setSort('distanceDesc')"
                  ><i class="fa-solid fa-sort-up mr-2"></i>Highest to Lowest<i
                    class="fa-solid fa-sort-down ml-2"
                  ></i
                ></a>
              </li>
            </ul>
          </div>

          <div class="dropdown  text-left mt-6">
            <button
              class="col-span-2 rounded-full px-4 py-2 w-full bg-orange-500 text-white hover:bg-orange-300 duration-300"
              @click="priceSortClick = !priceSortClick"
            >
              <i class="fa-solid text-white mr-2 fa-money-bill"></i>Price
            </button>
            <ul
              class="text-center  items-center text-gray-700 pt-2 "
              v-show="priceSortClick == true"
            >
              <li class="flex items-center mb-3">
                <a
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                  @click="setSort('priceAsc')"
                  ><i class="fa-solid fa-sort-down mr-2"></i>Lowest to Highest<i
                    class="fa-solid fa-sort-up ml-2"
                  ></i
                ></a>
              </li>
              <li class="flex items-center mb-3">
                <a
                  class="w-full rounded-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                  @click="setSort('priceDesc')"
                  ><i class="fa-solid fa-sort-up mr-2"></i>Highest to Lowest<i
                    class="fa-solid fa-sort-down ml-2"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-start-4 col-end-13 m-2">
        <div class="min-h-screen container mt-6 mr-3 mx-auto">
          <!-- <button class="rounded-full px-4 py-2 w-full bg-orange-500 text-white hover:bg-orange-300 duration-300">Compare Cars</button> -->
          <div
            class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-2"
          >
            <div
              class="card m-2  border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 mt-4"
              v-for="(item, index) of getCars"
              :key="`car-card-${index}`"
            >
              <div class="m-3">
                <router-link :to="`/detail/${item.car_id}`">
                  <img class="rounded" :src="getCarImage(item.car_img)" />
                </router-link>
                <button class="align-top float-right">
                  <span
                    class="text-sm text-teal-800 font-mono bg-gray-100 inline rounded-full px-2 mt-3"
                    >{{ item.car_price }} ฿</span
                  >
                </button>
                <h2 class="text-xl font-bold mb-2 mt-6">{{ item.car_brand }}</h2>
                <!-- <h2 class="text-s mb-2">Model: {{ item.car_model }}</h2> -->
                <!-- <h2 class="text-xl font-bold mb-2 mt-6">{{ item.car_model }}</h2> -->
                <router-link
                  :to="`/detail/${item.car_id}`"
                  class="cursor-pointer float-right"
                  ><i class="fa-solid fa-circle-info"></i
                ></router-link>
                <h2 class="text-lg mt-2 mb-2">
                  Distance: {{ item.car_distance }}
                </h2>
                <button
                  class="float-right cursor-pointer"
                  :class="{
                    'cursor-not-allowed disabled:opacity-50': isUnavailableToCompare(
                      item.car_id
                    ),
                    'text-red-500': isInCompareList(item.car_id)
                  }"
                  @click="addToCompare(item.car_id)"
                  :disabled="isUnavailableToCompare(item.car_id)"
                >
                  <i
                    v-if="!isInCompareList(item.car_id)"
                    class="fa-solid fa-circle-plus text-green-500"
                  ></i>
                  <i v-else class="fa-solid fa-circle-minus"></i>
                </button>
                <p
                  class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200"
                >
                  {{ item.car_desc }}
                </p>
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
import WelcomeLayout from "../layouts/welcome.vue";

export default {
  components: { WelcomeLayout },
  data() {
    return {
      loginuser: [],
      el: "#app",
      search: "",
      // filtered by
      brandClick: false,
      brandValue: "",
      priceClick: false,
      yearClick: false,
      colorClick: false,

      // sorted by
      distanceSortClick: false,
      priceSortClick: false,
      car: [],
      compareList: [],
      sort: null,
      filters: {
        brand: null,
        price: null,
        modelYear: null,
        color: null
      }
    };
  },
  mounted() {
    this.getCar();
  },
  computed: {
    // searchcar() {
    //   if (this.search != "") {
    //     this.getCars.filters(car => {});
    //   } else {
    //   }
    // },
    priceRange() {
      return (carPrice, range) => {
        if (range == null) return true;

        if (range[0] == 0) {
          return carPrice <= range[1];
        } else if (range[1] == 0) {
          return carPrice >= range[0];
        } else {
          return carPrice >= range[0] && carPrice <= range[1];
        }
      };
    },
    yearRange() {
      return (carModelYear, range) => {
        if (range == null) return true;

        if (range[0] == 0) {
          return carModelYear <= range[1];
        } else if (range[1] == 0) {
          return carModelYear >= range[0];
        } else {
          return carModelYear >= range[0] && carModelYear <= range[1];
        }
      };
      // setFilter('modelYear', [2007, 0])
      // setFilter('modelYear', [0, 2004])
    },
    getCars() {
      return this.car
        .filter(item => {
          if (
            (this.filters.brand == item.car_brand ||
              this.filters.brand == null) &&
            (this.priceRange(item.car_price, this.filters.price) ||
              this.filters.price == null) &&
            (this.yearRange(item.car_modelyear, this.filters.modelYear) ||
              this.filters.modelYear == null) &&
            (this.filters.color == item.car_color || this.filters.color == null)
          ) {
            return true;
          }
        })
        .sort(this.sortMethod(this.sort));
    },
    isInCompareList() {
      return carId => {
        return this.compareList.includes(carId);
      };
    },
    isUnavailableToCompare() {
      return carId => {
        return (
          this.compareList.length == 2 && !this.compareList.includes(carId)
        );
      };
    }
  },
  methods: {
    sortMethod(method) {
      if (method == "distanceAsc") {
        return function(a, b) {
          if (a.car_distance < b.car_distance) {
            return -1;
          } else if (a.car_distance > b.car_distance) {
            return 1;
          }
          return 0;
        };
      } else if (method == "distanceDesc") {
        return function(a, b) {
          if (a.car_distance > b.car_distance) {
            return -1;
          } else if (a.car_distance < b.car_distance) {
            return 1;
          }
          return 0;
        };
      } else if (method == "priceAsc") {
        return function(a, b) {
          if (a.car_price < b.car_price) {
            return -1;
          } else if (a.car_price < b.car_price) {
            return 1;
          }
          return 0;
        };
      } else if (method == "priceDesc") {
        return function(a, b) {
          if (a.car_price > b.car_price) {
            return -1;
          } else if (a.car_price < b.car_price) {
            return 1;
          }
          return 0;
        };
      }
    },
    helloWorld(item) {
      console.log(item);
    },
    addToCompare(id) {
      if (this.compareList.includes(id)) {
        this.compareList.splice(this.compareList.indexOf(id), 1);
      } else {
        if (this.compareList.length < 2) {
          this.compareList.push(id);
        }
      }
    },
    goToCompare() {
      console.log(this.compareList);
      if (this.compareList.length == 2) {
        this.$router.push(
          `/comparecar/${this.compareList[0]}/${this.compareList[1]}`
        );
      }
    },
    getCar() {
      axios
        .get("http://localhost:3000/CarsData")
        .then(res => {
          this.car = res.data;
          console.log(this.car);
        })
        .catch(err => console.log(err));
      },
      getCarImage(path) {
        if (path) {
          return "http://localhost:3000/" + path
        }
      },
      setFilter(key, value){
        if(this.filters[key] == value){
          this.filters[key] = null
        }else{
          this.filters[key] = value
        }
      },
      setSort(method){
        this.sort = method
      },
      BrandFiltered(brand) {
        this.brandValue = this.brandValue == brand ? "" : brand
        this.car.filter((val) => val.car_brand == this.brandValue)
      },
      convertprice(price) {
        let price2 = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "THB"
        }).format(price);
        return price2.slice(4, price2.length - 3) + ' ฿'
    },
    
  }
};
</script>
