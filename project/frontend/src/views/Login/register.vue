<template>
  <div id="app">
    <!-- component -->
    <div class="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
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
                  <!-- dath of birth -->
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
                  bg-orange-500
                  hover:bg-orange-600
                  rounded-3xl
                  py-3
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                @click="page = true"
                >
                  <span class="mr-2 uppercase">back</span>
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
              <router-link to="/login" class="text-sm ml-2 text-orange-500 font-semibold"
                >Sign-In to your account</router-link
              ></span
            >
          </a>
        </div>
      </div>

      <!-- Description -->
      <div class="px-10">
        <p>Why create a MyCarMax account?</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WelcomeLayout from '../layouts/welcome.vue'
// @ is an alias to /src
export default {
  name: "register",
  
  data() {
    return {
      page: true,
      firstname: '',
      lastname: '',
      birthdate: null,
      gender: 'Gender',
      idcard: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      password_con: '',
      address: '',
    };
  },
  methods: {
    register() {
      if (this.password !== this.password_con) {
        alert('password not matched');
      } else {
        axios.post('http://localhost:3000/register',{
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
        }).then( _res => {
          this.$router.push('/login');
        }).catch(err => {
          console.log(err.res.data.message);
        })
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


