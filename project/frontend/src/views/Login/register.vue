<template>
  <div id="app">
    <!-- component -->
    <div
      class="min-h-screen flex items-center justify-center bg-gray-100 pt-20"
    >
      <!-- card -->
      <div>
        <div
          class="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-5
          rounded-xl
          max-w-md
          mt-6
        "
        >
          <!-- form -->
          <div class="mt-10">
            <form>
              <!-- page1 -->
              <div v-show="page">
                <!-- name -->
                <div class="grid grid-cols-2 gap-4">
                  <!-- firstname -->
                  <div class="flex flex-col mb-5">
                    <div class="relative">
                      <input
                        v-model="firstname"
                        id="firstname"
                        type="text"
                        name="firstname"
                        class="
                            appearance-none 
                            bg-transparent 
                            border-b 
                            border-gray-400 
                            w-full text-gray-700 
                            mr-3 pl-3 py-2 px-2 
                            leading-tight 
                            focus:outline-none focus:border-orange-400
                            "
                        placeholder="First name"
                      />
                    </div>
                  </div>

                  <!-- lastname -->
                  <div class="flex flex-col mb-5">
                    <div class="relative">
                      <input
                        v-model="lastname"
                        id="lastname"
                        type="text"
                        name="lastname"
                        class="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 mr-3 pl-3 py-2 px-2 leading-tight focus:outline-none focus:border-orange-400"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>

                <!--PAGE1 birth gender -->
                <div class="flex">
                  <!-- date of birth -->
                  <div class="flex flex-col mb-5 w-full">
                    <div class="flex items-center">
                      <input
                        v-model="birthdate"
                        class="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 pl-3 mr-3 py-2 px-2 leading-tight focus:outline-none focus:border-orange-400"
                        type="text"
                        placeholder="Date of Birth"
                        onfocus="(this.type='date')"
                      />
                    </div>
                  </div>

                  <!-- gender -->
                  <div class="flex items-center mb-5 w-full">
                    <select
                      v-model="gender"
                      class="appearance-none bg-transparent border-b border-gray-400 w-full pl-3 mr-3 py-2 px-2 leading-tight focus:outline-none focus:border-orange-400"
                      id="grid-state"
                      type="text"
                      required
                    >
                      <option value="Gender" selected disabled>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>

                <!--PAGE1 id card -->
                <div class="flex flex-col mb-5">
                  <div class="flex items-center">
                    <input
                      v-model="idcard"
                      class="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 pl-3 mr-3 py-2 px-2 leading-tight focus:outline-none focus:border-orange-400"
                      type="text"
                      placeholder="ID card"
                    />
                  </div>
                </div>

                <!--PAGE1 address -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <input
                      v-model="address"
                      class="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 pl-3 mr-3 py-2 px-2 leading-tight focus:outline-none focus:border-orange-400"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                </div>

                <!--PAGE1 email -->
                <div class="flex flex-col mb-5">
                  <div class="flex items-center">
                    <input
                      v-model="email"
                      class="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 pl-3 mr-3 py-2 px-2 leading-tight focus:outline-none focus:border-orange-400"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <!--PAGE1 phone -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <input
                      v-model="phone"
                      class="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 pl-3 mr-3 py-2 px-2 leading-tight focus:outline-none focus:border-orange-400"
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>

              <!-- page2 -->
              <div v-show="!page">
                <!--PAGE2 user -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <input
                      v-model="username"
                      class="appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 mr-3 pl-3 py-2 px-2 leading-tight focus:outline-none focus:border-orange-400"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                </div>

                <!--PAGE2 password -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <input
                      v-model="password"
                      id="password"
                      type="password"
                      name="password"
                      class="
                    appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 pl-3 mr-3 py-2 px-2 leading-tight focus:outline-none focus:border-orange-400
                  "
                      placeholder="Password"
                    />
                  </div>
                </div>

                <!--PAGE2 Confirm password -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <input
                      v-model="password_con"
                      type="password"
                      name="password"
                      class="
                    appearance-none 
                    bg-transparent 
                    border-b 
                    border-gray-400 
                    w-full 
                    text-gray-700 
                    pl-3 
                    mr-3 
                    py-2 
                    px-2 
                    leading-tight 
                    focus:outline-none 
                    focus:border-orange-400
                  "
                      placeholder="Confirm password"
                    />
                  </div>
                </div>
              </div>

              <!-- button -->
              <!-- next button-->
              <div class="flex w-full" v-show="page">
                <button
                  type="button"
                  class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-orange-500
                  hover:bg-orange-600
                  rounded-3xl
                  py-3
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                  @click="page = false"
                >
                  <span class="mr-2 uppercase">next</span>
                  <span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <!-- button back/register -->
              <div class="grid grid-cols-2 gap-2">
                <!-- button back-->
                <div class="flex w-full" v-show="!page">
                  <button
                    type="button"
                    class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-gray-400
                  hover:bg-gray-500
                  rounded-3xl
                  py-3
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                    @click="page = true"
                  >
                    <span>
                      <svg
                        class="h-6 w-6 rotate-180"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span class="ml-2 uppercase ">back</span>
                  </button>
                </div>

                <!-- register button -->
                <div class="flex w-full" v-show="!page" @click="register()">
                  <button
                    type="button"
                    class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-orange-500
                  hover:bg-orange-600
                  rounded-3xl
                  py-3
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                  >
                    <span class="mr-2 uppercase">Register</span>
                    <span>
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- footer form -->
        <div class="flex justify-center items-center mt-6">
          <a
            href=""
            target="_blank"
            class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-sm text-center
          "
          >
            <span class="ml-2"
              >Already have an account?
              <router-link
                to="/login"
                class="text-sm ml-2 text-orange-500 font-semibold"
                >Sign-In to your account</router-link
              ></span
            >
          </a>
        </div>
      </div>

      <!-- Description right side -->
      <div class="px-10">
        <p class="mb-4">Why create a MyCarMax account?</p>
        <div class="grid grid-rows-4 gap-2">
          <!-- search -->
          <div class="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="m15.45 15.05l1.1-1.05l-2.1-2.1q.275-.425.413-.9q.137-.475.137-1q0-1.475-1.037-2.488Q12.925 6.5 11.5 6.5T9.038 7.512Q8 8.525 8 10t1.038 2.488Q10.075 13.5 11.5 13.5q.525 0 .988-.137q.462-.138.912-.413ZM11.5 12q-.825 0-1.412-.588Q9.5 10.825 9.5 10t.588-1.413Q10.675 8 11.5 8q.8 0 1.4.587q.6.588.6 1.413q0 .825-.587 1.412Q12.325 12 11.5 12ZM4 18q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Zm-2 3q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h20q.425 0 .712.288q.288.287.288.712t-.288.712Q22.425 21 22 21Z"
              />
            </svg>
            <p>Access saved cars and searches</p>
          </div>
          <!-- compare -->
          <div class="flex items-center">
            <img
              src="https://www.carmax.com/mycarmax/img/saved-cars.svg"
              alt=""
            />
            <p>Compare your favorites</p>
          </div>
          <!-- set up -->
          <div class="flex items-center">
            <img
              src="https://www.carmax.com/mycarmax/img/car-alerts.svg"
              alt=""
            />
            <p>Set up new inventory alerts</p>
          </div>
          <!-- payment -->
          <div class="flex items-center">
            <img src="https://www.carmax.com/mycarmax/img/account.svg" alt="" />
            <p>Make car payments and manage finance account</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WelcomeLayout from "../layouts/welcome.vue";
// @ is an alias to /src
export default {
  name: "register",

  data() {
    return {
      page: true,
      firstname: "",
      lastname: "",
      birthdate: null,
      gender: "Gender",
      idcard: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      password_con: "",
      address: ""
    };
  },
  methods: {
    register() {
      if (this.password !== this.password_con) {
        alert("password not matched");
      } else {
        axios
          .post("http://localhost:3000/register", {
            username: this.username,
            password: this.password,
            firstname: this.firstname,
            lastname: this.lastname,
            birthdate: this.birthdate,
            gender: this.gender,
            idcard: this.idcard,
            email: this.email,
            phone: this.phone,
            address: this.address
          })
          .then(_res => {
            this.$router.push("/login");
          })
          .catch(err => {
            console.log(err.res.data.message);
          });
      }
    }
  }
};
</script>

<style>
select:required {
  color: #9ca3af;
}
option[value="Gender"][disabled] {
  display: none;
}
option {
  color: #000;
}
</style>
