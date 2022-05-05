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
          py-8
          rounded-xl
          max-w-md
          mt-6
        "
        >
          <!-- form -->
          <div class="">
            <div class="flex flex-col items-center justify-center mb-8">
              <svg
                width="90"
                height="90"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="text-orange-500"
                  fill="currentColor"
                  d="M17 15q-1.05 0-1.775-.725q-.725-.725-.725-1.775q0-1.05.725-1.775Q15.95 10 17 10q1.05 0 1.775.725q.725.725.725 1.775q0 1.05-.725 1.775Q18.05 15 17 15Zm-4 5q-.425 0-.712-.288Q12 19.425 12 19v-.4q0-.6.312-1.112q.313-.513.888-.738q.9-.375 1.863-.562Q16.025 16 17 16q.975 0 1.938.188q.962.187 1.862.562q.575.225.888.738Q22 18 22 18.6v.4q0 .425-.288.712Q21.425 20 21 20Zm-3-8q-1.65 0-2.825-1.175Q6 9.65 6 8q0-1.65 1.175-2.825Q8.35 4 10 4q1.65 0 2.825 1.175Q14 6.35 14 8q0 1.65-1.175 2.825Q11.65 12 10 12Zm-7 8q-.425 0-.712-.288Q2 19.425 2 19v-2q0-.65.45-1.287q.45-.638 1.325-1.113q1.35-.725 2.95-1.162Q8.325 13 10 13q.675 0 1.438.1q.762.1 1.562.3v1.3q-.35.125-.6.25t-.525.275q-.925.525-1.4 1.375Q10 17.45 10 18v2Z"
                />
              </svg>
              <p class="text-xl font-bold text-gray-700">Create Account</p>
            </div>
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
                <div class="grid grid-cols-2 gap-4">
                  <!-- date of birth -->
                  <div class="flex flex-col mb-5">
                    <div class="relative">
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
                  <div class="flex flex-col mb-5">
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
                  <div class="relative">
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
                  <div class="relative">
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
      <div class="px-16">
        <p class="mb-4 text-2xl text-orange-500 font-bold">Why create a Car247 account?</p>
        <div class="grid grid-rows-4 gap-4 text-gray-700">
          <!-- search -->
          <div class="flex items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="text-orange-500"
                fill="currentColor"
                d="m15.45 15.05l1.1-1.05l-2.1-2.1q.275-.425.413-.9q.137-.475.137-1q0-1.475-1.037-2.488Q12.925 6.5 11.5 6.5T9.038 7.512Q8 8.525 8 10t1.038 2.488Q10.075 13.5 11.5 13.5q.525 0 .988-.137q.462-.138.912-.413ZM11.5 12q-.825 0-1.412-.588Q9.5 10.825 9.5 10t.588-1.413Q10.675 8 11.5 8q.8 0 1.4.587q.6.588.6 1.413q0 .825-.587 1.412Q12.325 12 11.5 12ZM4 18q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Zm-2 3q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h20q.425 0 .712.288q.288.287.288.712t-.288.712Q22.425 21 22 21Z"
              />
            </svg>
            <p class="ml-2">Access cars and searches.</p>
          </div>
          <!-- compare -->
          <div class="flex items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="text-orange-500"
                fill="currentColor"
                d="M10 23v-2H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h5V1h2v22Zm-5-5h5v-6Zm9 3v-9l5 6V5h-5V3h5q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"
              />
            </svg>
            <p class="ml-2">Compare the car you are interested in.</p>
          </div>
          <!-- car info -->
          <div class="flex items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="text-orange-500"
                fill="currentColor"
                d="M248 104c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.25 10.7-24 24-24s24 10.75 24 24v80zm-94.2 56h140.4c32.9 0 63.9 21.3 75.3 53.1l28.3 79.3c20.1 8.5 34.2 28.4 34.2 51.6v136c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32v-32H96v32c0 17.7-14.33 32-32 32H48c-17.67 0-32-14.3-32-32V344c0-23.2 14.08-43.1 34.16-51.6l28.33-79.3C89.86 181.3 120 160 153.8 160zm0 64c-6.7 0-12.8 4.3-15 10.6L119.7 288h208.6l-19.1-53.4c-3.1-6.3-8.3-10.6-15-10.6H153.8zM96 392c13.3 0 24-10.7 24-24s-10.7-24-24-24c-13.25 0-24 10.7-24 24s10.75 24 24 24zm256-48c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24zM7.029 39.03c9.371-9.37 24.571-9.37 33.941 0l48 48c9.37 9.37 9.37 24.57 0 33.07c-9.37 10.2-24.57 10.2-33.94 0L7.029 72.97c-9.372-9.37-9.372-24.57 0-33.94zm399.971 0c9.4-9.37 24.6-9.37 33.1 0c10.2 9.37 10.2 24.57 0 33.94l-48 47.13c-8.5 10.2-23.7 10.2-33.1 0c-9.3-8.5-9.3-23.7 0-33.07l48-48z"
              />
            </svg>
            <p class="ml-2">Can see the information of each car.</p>
          </div>
          <!-- sale -->
          <div class="flex items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="text-orange-500"
                fill="currentColor"
                d="M7 8q-.825 0-1.412-.588Q5 6.825 5 6V4q0-.825.588-1.413Q6.175 2 7 2h10q.825 0 1.413.587Q19 3.175 19 4v2q0 .825-.587 1.412Q17.825 8 17 8Zm.5-2h9q.2 0 .35-.15q.15-.15.15-.35v-1q0-.2-.15-.35Q16.7 4 16.5 4h-9q-.2 0-.35.15Q7 4.3 7 4.5v1q0 .2.15.35q.15.15.35.15ZM4 22q-.825 0-1.412-.587Q2 20.825 2 20v-1h20v1q0 .825-.587 1.413Q20.825 22 20 22Zm-2-4l3.475-7.825q.25-.55.738-.863Q6.7 9 7.3 9h9.4q.6 0 1.088.312q.487.313.737.863L22 18Zm6.5-2h1q.2 0 .35-.15q.15-.15.15-.35q0-.2-.15-.35Q9.7 15 9.5 15h-1q-.2 0-.35.15q-.15.15-.15.35q0 .2.15.35q.15.15.35.15Zm0-2h1q.2 0 .35-.15q.15-.15.15-.35q0-.2-.15-.35Q9.7 13 9.5 13h-1q-.2 0-.35.15q-.15.15-.15.35q0 .2.15.35q.15.15.35.15Zm0-2h1q.2 0 .35-.15q.15-.15.15-.35q0-.2-.15-.35Q9.7 11 9.5 11h-1q-.2 0-.35.15q-.15.15-.15.35q0 .2.15.35q.15.15.35.15Zm3 4h1q.2 0 .35-.15q.15-.15.15-.35q0-.2-.15-.35q-.15-.15-.35-.15h-1q-.2 0-.35.15q-.15.15-.15.35q0 .2.15.35q.15.15.35.15Zm0-2h1q.2 0 .35-.15q.15-.15.15-.35q0-.2-.15-.35q-.15-.15-.35-.15h-1q-.2 0-.35.15q-.15.15-.15.35q0 .2.15.35q.15.15.35.15Zm0-2h1q.2 0 .35-.15q.15-.15.15-.35q0-.2-.15-.35q-.15-.15-.35-.15h-1q-.2 0-.35.15q-.15.15-.15.35q0 .2.15.35q.15.15.35.15Zm3 4h1q.2 0 .35-.15q.15-.15.15-.35q0-.2-.15-.35q-.15-.15-.35-.15h-1q-.2 0-.35.15q-.15.15-.15.35q0 .2.15.35q.15.15.35.15Zm0-2h1q.2 0 .35-.15q.15-.15.15-.35q0-.2-.15-.35q-.15-.15-.35-.15h-1q-.2 0-.35.15q-.15.15-.15.35q0 .2.15.35q.15.15.35.15Zm0-2h1q.2 0 .35-.15q.15-.15.15-.35q0-.2-.15-.35q-.15-.15-.35-.15h-1q-.2 0-.35.15q-.15.15-.15.35q0 .2.15.35q.15.15.35.15Z"
              />
            </svg>
            <p class="ml-2">Can announce the sale of their own cars.</p>
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
          .then(res => {
            if (res.data != "success") {
              alert(res.data);
              } else {
                alert("Register Success");
                this.$router.push("/login");
              }
          })
          .catch(err => {
            console.log(err);
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
