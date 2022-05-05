<template>
  <welcome-layout>
    <div id="app">
      <div class="min-h-screen flex items-center justify-center bg-gray-100 ">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden rounded-xl">
                <table class="min-w-full text-center">
                  <thead class="border-b bg-orange-500">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Firstname
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Lastname
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Tel
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        E-mail
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Vertified
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b ">
                      <!-- id -->
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        1
                      </td>
                      <!-- firstname -->
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        firstname
                      </td>
                      <!-- lastname -->
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        lastname
                      </td>
                      <!-- tel -->
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        08xxxxxxxx
                      </td>
                      <!-- email -->
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        xxxx@gmail.com
                      </td>
                      <!-- button -->
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        <!-- confirm -->
                        <div class="w-24" v-show="showConfirm">
                          <button
                            @click="confirm()"
                            type="button"
                            class="flex
                                    items-center
                                    justify-center
                                    focus:outline-none
                                    text-white
                                    bg-green-500
                                    hover:bg-green-600
                                    rounded-xl
                                    py-3
                                    w-full
                                    transition
                                    duration-150
                                    ease-in
                                "
                          >
                            <span class="uppercase">confirm</span>
                          </button>
                        </div>
                        <!-- cancel -->
                        <div class="w-24" v-show="showCancel">
                          <button
                            @click="cancel()"
                            type="button"
                            class="flex
                                    items-center
                                    justify-center
                                    focus:outline-none
                                    text-white
                                    bg-red-500
                                    hover:bg-red-600
                                    rounded-xl
                                    py-3
                                    w-full
                                    transition
                                    duration-150
                                    ease-in
                                "
                          >
                            <span class="uppercase">cancel</span>
                          </button>
                        </div>
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  name: "manageseller",
  components: {
    WelcomeLayout
  },
  data() {
    return {
      user: [],
      firstname: "",
      lastname: "",
      phone: "",
      address: "",
      email: "",
      showCancel: false,
      showConfirm: true,
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
    },
    confirm() {
      this.showConfirm = false;
      this.showCancel = true;
      
    },
    cancel() {
      this.showConfirm = true;
      this.showCancel = false;
    }
  }
};
</script>
