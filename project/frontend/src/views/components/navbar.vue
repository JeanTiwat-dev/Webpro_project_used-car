<template>
  <div class="w-full" id="app">
    <section class="w-full px-4 text-gray-700 bg-white fixed top-0 z-40">
      <div
        class="
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
        <!-- <div class="relative items-center">
                <input
                type="text"
                class="h-14 w-96 pr-8 pl-5 rounded border border-gray-200 focus:outline-none focus:border-orange-200 focus:ring-1 focus:ring-orange-200"
                placeholder="Search anything..."
                />
                <div class="absolute top-4 right-3">
                <i
                    class="fa fa-search text-gray-400 z-20 hover:text-gray-500"
                ></i>
                </div>
            </div> -->

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
        <!-- 
        <div class="dropdown ml-3 relative" @mouseover="menu = true" @mouseleave="menu = false">
          <div>
            <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>

          <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            Active: "bg-gray-100", Not Active: ""
            <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</router-link>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>
        </div> -->
        
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