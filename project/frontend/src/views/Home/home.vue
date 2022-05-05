<template>
<welcome-layout>
  <div class="min-h-screen bg-gradient-to-br">
    <div class="hero-bg flex items-center justify-center text-center">
      <div
        class="
          bg-orange-500 bg-opacity-50
          w-50
          text-white
          rounded-md
          w-100
          m-5
          p-5
          sm:m-10 sm:p-10
          md:max-w-xl
          lg:rounded-lg
        "
      >
        <h1 class="font-bold text-xl mb-2 md:mb-4 md:text-3xl">
          Love Your Car Guarantee®
        </h1>
        <router-link to="/shop"
          ><button
            type="button"
            class="
              bg-gray-800
              text-white
              uppercase
              py-2
              px-7
              mt-5
              rounded-full
              inline-block
              sm:mt-8
              text-sm
              tracking-wider
            "
          >
            shop all car
          </button></router-link
        >
      </div>
    </div>

    <!--Container-->
    <!-- <div
      class="
        md:my-24
        justify-items-center
        md:max-w-3xl md:mx-auto md:mt-24 md:mb-24
      "
    >
      <div class="text-center bg-white shadow-lg md:max-w-sm">
        <div class="px-7 py-9">
          <h2 class="font-bold text-lg mb-2 md:mb-4 md:text-3xl">
            Ready for spring collection
          </h2>
          <p>
            Treat yourself to some of our brand new spring collection - all with
            wonderful colours surrounding you.
          </p>
          <button
            type="button"
            class="
              bg-transparent
              border-gray-700 border-2
              text-gray-800
              font-bold
              uppercase
              py-2
              px-7
              mt-7
              rounded-full
              inline-block
              sm:mt-8
              text-xs
              tracking-wider
              hover:bg-gray-700 hover:text-white
            "
          >
            purchase now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1514861997808-4789788dded2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Spring collection"
          class="h-56 object-cover w-full md:h-64"
        />
      </div>
    </div> -->
    <!-- Section 5 -->
    <!-- <section
      id="footer"
      class="flex items-center justify-center py-20 bg-white min-w-screen"
    >
      <div class="px-16 bg-white">
        <div
          class="container flex flex-col items-start mx-auto lg:items-center"
        >
          <h2
            class="
              relative
              flex
              items-start
              justify-start
              w-full
              max-w-3xl
              text-5xl
              font-bold
              lg:justify-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="
                absolute
                right-0
                hidden
                w-12
                h-12
                -mt-2
                -mr-16
                text-gray-200
                lg:inline-block
              "
              viewBox="0 0 975.036 975.036"
            >
              <path
                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
              ></path>
            </svg>
            See what others are doing
          </h2>
          <div
            class="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"
          ></div>

          <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
            <div
              class="
                flex flex-col
                items-start
                justify-start
                w-full
                h-auto
                mb-12
                lg:w-1/3 lg:mb-0
              "
            >
              <div class="flex items-center justify-center">
                <div
                  class="
                    w-16
                    h-16
                    mr-4
                    overflow-hidden
                    bg-gray-200
                    rounded-full
                  "
                >
                  <img
                    src="../../../../../develop/angel.jpg"
                    class="object-cover w-full h-full"
                  />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <h4 class="font-bold text-gray-800">
                    Nattarinee Sawalaksana
                  </h4>
                  <p class="text-gray-600">UI Design & Front-End Developer</p>
                </div>
              </div>
            </div>
            <div
              class="
                flex flex-col
                items-start
                justify-start
                w-full
                h-auto
                px-0
                mx-0
                mb-12
                border-l border-r border-transparent
                lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200
              "
            >
              <div class="flex items-center justify-center">
                <div
                  class="
                    w-16
                    h-16
                    mr-4
                    overflow-hidden
                    bg-gray-200
                    rounded-full
                  "
                >
                  <img
                    src="../../../../../develop/jean.jpg"
                    class="object-cover w-full h-full"
                  />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <h4 class="font-bold text-gray-800">Tiwat Parkpoompisal</h4>
                  <p class="text-gray-600">Backend Developer</p>
                  <p class="text-gray-600">Database (MySQL)</p>
                </div>
              </div>
            </div>
            <div
              class="
                flex flex-col
                items-start
                justify-start
                w-full
                h-auto
                lg:w-1/3
              "
            >
              <div class="flex items-center justify-center">
                <div
                  class="
                    w-16
                    h-16
                    mr-4
                    overflow-hidden
                    bg-gray-200
                    rounded-full
                  "
                >
                  <img
                    src="../../../../../develop/fah.jpg"
                    class="object-cover w-full h-full"
                  />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <h4 class="font-bold text-gray-800">Wannasa Chonchoochart</h4>
                  <p class="text-gray-600">
                    UX/UI Design & Front-End Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
  </welcome-layout>
</template>

<script>
import axios from "axios";
import WelcomeLayout from '../layouts/welcome.vue'
// @ is an alias to /src
export default {
  name: "Home",
  components :{
    WelcomeLayout
  },
  // data() {
  //   return {
  // },
};
</script>
<style scoped>
.hero-bg {
  background: url("../../assets/back.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 70vh;
}
</style>

 