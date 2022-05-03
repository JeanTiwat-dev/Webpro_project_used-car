<template>
  <div id="app">
    <!-- component -->
    <div class="py-12 flex items-center justify-center bg-gray-100 pb-18 pt-10">
      <div class="flex">
        <!-- left card -->
        <div>
          <!-- data -->
          <div
            class="
              flex flex-col
              items-center 
              justify-center
              bg-orange-400
              shadow-l-md
              px-4
              sm:px-6
              md:px-8
              lg:px-10
              h-full
              py-4
              rounded-l-xl
              max-w-md
            "
          >
            <!-- pic profile -->
            <div>
              <svg
                width="150"
                height="150"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="text-orange-100"
                  fill="currentColor"
                  d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"
                />
                <path
                  class="text-gray-800"
                  fill="currentColor"
                  d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"
                />
              </svg>
            </div>
            <!-- head -->
            <div
              class="flex flex-col items-center 
              justify-center"
            >
              <div
                class="font-medium mt-4 self-center text-xl sm:text-3xl text-gray-800"
              >
                {{ firstname + " " + lastname }}
              </div>
              <!-- <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
                บลาๆๆๆๆ
              </div> -->
            </div>
            <!-- button home-->
            <div
              class="flex 
                items-center 
                justify-center 
                w-full 
                mt-10
                "
            >
              <router-link to="/">
                <a
                  class="bg-red-500 hover:bg-red-700 duration-150 text-white text-center py-2 px-4 rounded-full h-14 w-14 inline-flex items-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M4 21V9l8-6l8 6v12h-6v-7h-4v7Z"
                    />
                  </svg>
                </a>
              </router-link>
            </div>
          </div>
        </div>

        <!-- right card -->
        <div>
          <div
            class="
              flex flex-col
              bg-white
              shadow-r-md
              px-4
              sm:px-6
              md:px-8
              lg:px-10
              py-10
              rounded-r-xl
              w-96
              max-w-md
            "
          >
            <!-- profile -->
            <!-- page1 form-->
            <div v-show="isActive">
              <form>
                <!-- firstname -->
                <div class="flex flex-col mb-5">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Firstname:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-12
                        text-gray-400
                      "
                    >
                      <i class="fas fa-solid fa-user text-orange-500"></i>
                    </div>

                    <input
                    disabled="disabled"
                      v-model="firstname"
                      id="firstname"
                      type="text"
                      name="firstname"
                      class="
                        text-base
                        placeholder-gray-500
                        pl-12
                        pr-4
                        rounded-3xl
                        border border-gray-400
                        w-full
                        py-3
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!-- lastname -->
                <div class="flex flex-col mb-5">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Lastname:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-12
                        text-gray-400
                      "
                    >
                      <span>
                        <i class="fas fa-user text-orange-500"></i>
                      </span>
                    </div>

                    <input
                    disabled="disabled"
                      v-model="lastname"
                      id="lastname"
                      type="text"
                      name="lastname"
                      class="
                        text-base
                        placeholder-gray-500
                        pl-12
                        pr-4
                        rounded-3xl
                        border border-gray-400
                        w-full
                        py-3
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex flex-col mb-5">
                  <label
                    for="email"
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Phone:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-12
                        text-gray-400
                      "
                    >
                      <!-- <i class="fas fa-solid fa-user text-orange-500"></i> -->
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="text-orange-500"
                          fill="currentColor"
                          d="M17.256 12.253c-.096-.667-.611-1.187-1.274-1.342c-2.577-.604-3.223-2.088-3.332-3.734C12.193 7.092 11.38 7 10 7s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734c-.663.156-1.178.675-1.274 1.342l-.497 3.442C2.072 16.907 2.962 18 4.2 18h11.6c1.237 0 2.128-1.093 1.953-2.305l-.497-3.442zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5s2.526 1.12 2.526 2.5s-1.132 2.5-2.526 2.5zM19.95 6c-.024-1.5-3.842-3.999-9.95-4C3.891 2.001.073 4.5.05 6s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876C5.345 5.227 7.737 4.98 10 4.98s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876C19.928 9.452 19.973 7.5 19.95 6z"
                        />
                      </svg>
                    </div>

                    <input
                    disabled="disabled"
                      v-model="phone"
                      id="phone"
                      type="text"
                      name="phone"
                      class="
                        text-base
                        placeholder-gray-500
                        pl-12
                        pr-4
                        rounded-3xl
                        border border-gray-400
                        w-full
                        py-3
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!-- Address -->
                <div class="flex flex-col mb-5">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Address:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-12
                        text-gray-400
                      "
                    >
                      <!-- <i class="fas fa-solid fa-user text-orange-500"></i> -->
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="text-orange-500"
                          fill="currentColor"
                          d="M4 21V9l8-6l8 6v12h-6v-7h-4v7Z"
                        />
                      </svg>
                    </div>

                    <textarea
                    disabled="disabled"
                    rows="3"
                      v-model="address"
                      id="address"
                      type="text"
                      name="address"
                      class="
                      resize-none
                        text-base
                        placeholder-gray-500
                        pl-12
                        pr-4
                        rounded-3xl
                        border border-gray-400
                        w-full
                        py-3
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!-- Email -->
                <div class="flex flex-col mb-5">
                  <label
                    for="email"
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Email:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-12
                        text-gray-400
                      "
                    >
                      <!-- <i class="fas fa-solid fa-user text-orange-500"></i> -->
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="text-orange-500"
                          fill="currentColor"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"
                        />
                      </svg>
                    </div>

                    <input
                    disabled="disabled"
                      v-model="email"
                      id="email"
                      type="email"
                      name="email"
                      class="
                        text-base
                        placeholder-gray-500
                        pl-12
                        pr-4
                        rounded-3xl
                        border border-gray-400
                        w-full
                        py-3
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!-- button edit -->
                <div
                  class="flex 
                items-center 
                justify-center 
                w-full 
                mt-8
                "
                  v-show="showButton"
                >
                  <a
                    class="bg-sky-700 hover:bg-sky-600 cursor-pointer duration-150 text-white text-center py-2 px-4 rounded-full h-14 w-14 inline-flex items-center"
                    @click="isActive = false; showButton = false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path
                          d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z"
                        />
                        <path
                          d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </form>
            </div>
            <!-- page2 form edit -->
            <div v-show="!isActive">
              <form>
                <!-- firstname2 -->
                <div class="flex flex-col mb-5">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Firstname:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-12
                        text-gray-400
                      "
                    >
                      <i class="fas fa-solid fa-user text-orange-500"></i>
                    </div>

                    <input
                      v-model="firstname2"
                      id="firstname2"
                      type="text"
                      name="firstname2"
                      class="
                        text-base
                        placeholder-gray-500
                        pl-12
                        pr-4
                        rounded-3xl
                        border border-gray-400
                        w-full
                        py-3
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!-- lastname2 -->
                <div class="flex flex-col mb-5">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Lastname:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-12
                        text-gray-400
                      "
                    >
                      <span>
                        <i class="fas fa-user text-orange-500"></i>
                      </span>
                    </div>

                    <input
                      v-model="lastname2"
                      id="lastname2"
                      type="text"
                      name="lastname2"
                      class="
                        text-base
                        placeholder-gray-500
                        pl-12
                        pr-4
                        rounded-3xl
                        border border-gray-400
                        w-full
                        py-3
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex flex-col mb-5">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Phone:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-12
                        text-gray-400
                      "
                    >
                      <!-- <i class="fas fa-solid fa-user text-orange-500"></i> -->
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="text-orange-500"
                          fill="currentColor"
                          d="M17.256 12.253c-.096-.667-.611-1.187-1.274-1.342c-2.577-.604-3.223-2.088-3.332-3.734C12.193 7.092 11.38 7 10 7s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734c-.663.156-1.178.675-1.274 1.342l-.497 3.442C2.072 16.907 2.962 18 4.2 18h11.6c1.237 0 2.128-1.093 1.953-2.305l-.497-3.442zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5s2.526 1.12 2.526 2.5s-1.132 2.5-2.526 2.5zM19.95 6c-.024-1.5-3.842-3.999-9.95-4C3.891 2.001.073 4.5.05 6s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876C5.345 5.227 7.737 4.98 10 4.98s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876C19.928 9.452 19.973 7.5 19.95 6z"
                        />
                      </svg>
                    </div>

                    <input
                      v-model="phone2"
                      id="phone2"
                      type="text"
                      name="phone2"
                      class="
                        text-base
                        placeholder-gray-500
                        pl-12
                        pr-4
                        rounded-3xl
                        border border-gray-400
                        w-full
                        py-3
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!-- Address -->
                <div class="flex flex-col mb-5">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Address:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-12
                        text-gray-400
                      "
                    >
                      <!-- <i class="fas fa-solid fa-user text-orange-500"></i> -->
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="text-orange-500"
                          fill="currentColor"
                          d="M4 21V9l8-6l8 6v12h-6v-7h-4v7Z"
                        />
                      </svg>
                    </div>

                    <textarea
                    rows="3"
                      v-model="address2"
                      id="address2"
                      type="text"
                      name="address2"
                      class="
                      resize-none
                        text-base
                        placeholder-gray-500
                        pl-12
                        pr-4
                        rounded-3xl
                        border border-gray-400
                        w-full
                        py-3
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!-- Email -->
                <div class="flex flex-col mb-5">
                  <label
                    for="email"
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Email:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-12
                        text-gray-400
                      "
                    >
                      <!-- <i class="fas fa-solid fa-user text-orange-500"></i> -->
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="text-orange-500"
                          fill="currentColor"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"
                        />
                      </svg>
                    </div>

                    <input
                      v-model="email2"
                      id="email2"
                      type="email"
                      name="email2"
                      class="
                        text-base
                        placeholder-gray-500
                        pl-12
                        pr-4
                        rounded-3xl
                        border border-gray-400
                        w-full
                        py-3
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!-- button edit -->
                <div
                  class="flex 
                items-center 
                justify-center 
                w-full 
                mt-8
                "
                  v-show="showButton"
                >
                  <a
                    class="bg-sky-700 hover:bg-sky-600 cursor-pointer duration-150 text-white text-center py-2 px-4 rounded-full h-14 w-14 inline-flex items-center"
                    @click="showButton = false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path
                          d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z"
                        />
                        <path
                          d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"
                        />
                      </g>
                    </svg>
                  </a>
                </div>

                <!-- button cancle/save -->
                <div class="grid grid-cols-2 gap-2 mt-8" v-show="!showButton">
                  <!-- button cancle-->
                  <div class="flex w-full">
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
                      @click="showButton = true; isActive = true; cancle()"
                    >
                      <span class="ml-2 uppercase">cancle</span>
                    </button>
                  </div>

                  <!-- button save -->
                  <div class="flex w-full">
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
                    bg-green-500
                    hover:bg-green-600
                    rounded-3xl
                    py-3
                    w-full
                    transition
                    duration-150
                    ease-in
                  "
                  @click="saveprofile()"
                    >
                      <span class="mr-2 uppercase">save</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
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
  name: "profile",
  data() {
    return {
      user: [],
      showButton: true,
      isActive: true,
      firstname: "",
      lastname: "",
      phone: "",
      address: "",
      email: "",
      firstname2: "",
      lastname2: "",
      phone2: "",
      address2: "",
      email2: ""
    };
  },
  mounted() {
    this.getuser();
  },
  methods: {
    getuser() {
      this.user = JSON.parse(localStorage.getItem("user_account"));
      this.firstname = this.user.user_firstname;
      this.lastname = this.user.user_lastname;
      this.phone = this.user.user_phone;
      this.address = this.user.user_address;
      this.email = this.user.user_email;
      this.firstname2 = this.user.user_firstname;
      this.lastname2 = this.user.user_lastname;
      this.phone2 = this.user.user_phone;
      this.address2 = this.user.user_address;
      this.email2 = this.user.user_email;
      
    },
    saveprofile() {
      this.firstname = this.firstname2;
      this.lastname = this.lastname2;
      this.phone = this.phone2;
      this.address = this.address2;
      this.email = this.email;
      this.isActive = true;
      this.showButton = true;
    },
    cancle() {
      this.firstname2 = this.user.user_firstname;
      this.lastname2 = this.user.user_lastname;
      this.phone2 = this.user.user_phone;
      this.address2 = this.user.user_address;
      this.email2 = this.user.user_email;
    }
  }
};
</script>
