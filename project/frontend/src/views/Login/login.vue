<template>
  <div id="app">
    <!-- component -->
    <div
      class="min-h-screen flex items-center justify-center bg-gray-100 pt-20"
    >
      <!-- pic logo -->
      <div class="px-10">
        <img
          class="w-96"
          src="https://www.clipartmax.com/png/full/198-1989161_sports-car-logo-car-logo-orange-png.png"
          alt=""
        />
      </div>
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
          py-20
          rounded-xl
          w-96
          max-w-md
        "
        >
          <div
            class="font-medium self-center text-xl sm:text-3xl text-gray-800"
          >
            Welcome Back!
          </div>
          <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Please sign in to access your account
          </div>

          <!-- user -->
          <div class="mt-10">
            <form>
              <div class="flex flex-col mb-5">
                <label
                  for="email"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >Username:</label
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
                    v-model="$v.username.$model"
                    id="username"
                    type="text"
                    name="username"
                    class="
                    text-base
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-3xl
                    border border-gray-400
                    w-full
                    py-3
                    focus:outline-none focus:border-orange-400
                  "
                    placeholder="Enter your username"
                  />
                </div>
                <!-- validate -->
                <span
                  v-if="$v.username.$error && !$v.username.required"
                  class="text-xs text-red-700 mt-2"
                  id="passwordHelp"
                  >Please fill in Username.</span
                >
              </div>

              <!-- password -->
              <div class="flex flex-col mb-6">
                <label
                  for="password"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >Password:</label
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
                      <i class="fas fa-lock text-orange-500"></i>
                    </span>
                  </div>

                  <input
                    v-model="$v.password.$model"
                    id="password"
                    type="password"
                    name="password"
                    class="
                    text-base
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-3xl
                    border border-gray-400
                    w-full
                    py-3
                    focus:outline-none focus:border-orange-400
                  "
                    placeholder="Enter your password"
                  />
                </div>
                <div>
                  <span
                    v-if="$v.password.$error && !$v.password.required"
                    class="text-xs text-red-700 mt-2"
                    id="passwordHelp"
                    >Please fill in Password.</span
                  >
                  <span
                    v-if="error"
                    class="text-xs text-red-700 mt-2"
                    id="passwordHelp"
                    >Your username or password is incorrect!</span
                  >
                </div>
              </div>

              <div class="flex w-full">
                <button
                  @click="login()"
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
                  <span class="mr-2 uppercase">sign in</span>
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
            href="#"
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
              >You don't have an account?
              <router-link
                to="/register"
                class="text-sm ml-2 text-orange-500 font-semibold"
                >Register now</router-link
              ></span
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
export default {
  name: "login",

  data() {
    return {
      username: "",
      password: "",
      error: false
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    login() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        axios
          .post("http://localhost:3000/goto", {
            username: this.username,
            password: this.password
          })
          .then(res => {
            if (res.data == "error") {
              this.error = true;
            } else {
              localStorage.setItem("user_account", JSON.stringify(res.data));
              this.$router.push({ name: "home" });
            }
          })
          .catch(err => console.log(err));
      }
    }
  }
};
</script>
