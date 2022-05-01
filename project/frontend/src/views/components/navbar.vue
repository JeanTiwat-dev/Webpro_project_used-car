<template>
  <div class="w-full" id="app">
    <section class="w-full px-8 text-gray-700 bg-white fixed top-0 h-20 z-40">
      <div
        class="
          container
          flex flex-col flex-wrap
          items-center
          justify-between
          py-5
          mx-auto
          md:flex-row
          max-w-7xl
        "
      >
        <div class="relative flex flex-col md:flex-row">
          <router-link
            to="/"
            class="
              flex
              items-center
              mb-5
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

        <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
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
              focus:ring-indigo-600
            "
          >
            Sign in
          </router-link>
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
    };
  },
};
</script>