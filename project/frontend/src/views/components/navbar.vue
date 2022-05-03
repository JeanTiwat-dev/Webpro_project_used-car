<template>
  <div class="w-full" id="app">
    <section class="w-full px-4 text-gray-700 bg-white fixed top-0 z-40 drop-shadow-md">
      <div
        class="
          py-5
          container
          flex
          items-center
          justify-between
          mx-auto
          md:flex-row
          
        "
      >
        <div class="relative flex flex-col md:flex-row">
          <router-link
            to="/"
            class="
              flex
              items-center
              
              font-medium
              text-gray-900
              lg:w-auto lg:items-center lg:justify-center
              md:mb-0
            "
          >
            <span
              class="
                mx-auto
                text-xl
                font-blue-900
                leading-none
                text-gray-900
                select-none
              "
              ><i class="fas fa-car mr-6 font-blue-900 text-2xl"></i
            ></span>
            <span class="font-bold text-2xl text-orange-500 tracking-tight"
              >Car247</span
            >
          </router-link>
          <nav
            class="
              flex flex-wrap
              items-center
              mb-5
              text-base
              md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200
            "
          >
            <router-link
              to="/shop"
              class="
                mr-10
                font-medium
                leading-6
                text-gray-600
                hover:text-gray-900
                focus:text-blue-900
              "
              ><b>shop</b></router-link
            >
            <router-link
              to="/sell"
              class="
                mr-10
                font-medium
                leading-6
                text-gray-600
                hover:text-gray-900
                focus:text-blue-900
              "
              ><b>sell car</b></router-link
            >
          </nav>
        </div>


        <div
          class="inline-flex items-center ml-5 space-x-6 lg:justify-end"
          v-if="user == null"
        >
          <router-link
            to="/register"
            class="
              text-base
              font-medium
              leading-6
              text-gray-600
              whitespace-no-wrap
              transition
              duration-150
              ease-in-out
              hover:text-gray-900
            "
          >
            Sign up
          </router-link>
          <router-link
            to="/login"
            class="
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              text-base
              font-medium
              leading-6
              text-white
              whitespace-no-wrap
              bg-orange-500
              border border-transparent
              rounded-md
              shadow-sm
              hover:bg-orange-200
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-orange-300
            "
          >
            Sign in
          </router-link>
        </div>
        
        <div
          class="dropdown inline-block relative"
          @mouseover="menu = true"
          @mouseleave="menu = false"
          v-else
        >
        <div class="flex items-center ">
            <p>{{user.user_firstname + " " + user.user_lastname}}</p>
        
          <div class="rounded-full">
            <button
              type="button"
              class="
                text-blue-900
                font-medium
                rounded
                text-sm
                px-4
                py-4
                text-center
                mr-2
                mb-2
              "
            >
              <img
                class="h-8 w-8 rounded-full"
                src="../../assets/boy.jpeg"
                alt=""
                v-show="user.user_gender === 'male'"
              />
              <img
                class="h-8 w-8 rounded-full"
                src="../../assets/girl.jpeg"
                alt=""
                v-show="user.user_gender === 'female'"
              />
            </button>
          </div>
          </div>

          <ul
            class="
              dropdown-menu
              absolute
              text-gray-700
              right-2
              border
              rounded
              drop-shadow-xl
              z-40
            "
            style="width: 200px"
            v-show="menu"
          >
            <li class="">
              <router-link
                to="/profile"
                class="
                  rounded-t
                  bg-white
                  hover:bg-gray-200
                  py-2
                  px-4
                  block
                  whitespace-no-wrap
                "
                >My Profile
              </router-link>
            </li>
            <div @click="islogOut()">
              <li
                class="
                  rounded-t
                  bg-white
                  hover:bg-gray-200
                  py-2
                  px-4
                  block
                  whitespace-no-wrap
                "
              >
                Logout
              </li>
            </div>
          </ul>
        </div>

        
      </div>
    </section>
  </div>
</template>
    <script>
export default {
  data() {
    return {
      menu: false,
      user: [],
    };
  },
  mounted() {
    this.isLoggedin();
  },
  methods: {
    isLoggedin() {
      this.user = JSON.parse(localStorage.getItem("user_account"));
      console.log(this);
    },
    islogOut() {
      localStorage.removeItem("user_account");
      //   this.$router.push("/");
      location.reload();
    },
  },
};
</script>