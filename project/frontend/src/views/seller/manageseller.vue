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
                    <tr class="bg-white border-b " v-for="(seller, index) in sellers " :key="seller.user_id">
                      <!-- id -->
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        {{ seller.user_id }}
                      </td>
                      <!-- firstname -->
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        {{ seller.user_firstname }}
                      </td>
                      <!-- lastname -->
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        {{ seller.user_lastname }}
                      </td>
                      <!-- phone -->
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        {{ seller.user_phone }}
                      </td>
                      <!-- email -->
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        {{ seller.user_email }}
                      </td>
                      <!-- button -->
                      <td
                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                      >
                        <!-- confirm -->
                        <div class="w-24" v-show="seller.s_vertified == 'Not-Vertified'">
                          <button
                            @click="confirm(seller.user_id, index)"
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
                        <div class="w-24" v-show="seller.s_vertified == 'Vertified'">
                          <button
                            @click="cancel(seller.user_id, index)"
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
      sellers: []
    };
  },
  mounted() {
    this.getuser();
  },
  methods: {
    getuser() {
      this.user = JSON.parse(localStorage.getItem("user_account"));
      if(this.user.role != 'admin') {
        alert("You are not admin");
        this.$router.push("/");
      }
      this.firstname = this.user.user_firstname;
      this.lastname = this.user.user_lastname;
      this.phone = this.user.user_phone;
      this.address = this.user.user_address;
      this.email = this.user.user_email;
      axios.get(`http://localhost:3000/getSellerData`).then(res => {
        this.sellers = res.data;
      });
    },
    confirm(user_id, index) {
      axios.put(`http://localhost:3000/vertified/${user_id}`)
      .then(
        this.sellers[index].s_vertified = "Vertified"
      ).catch(err => {
        console.log(err);
      });
    },
    cancel(user_id, index) {
      axios.put(`http://localhost:3000/unvertified/${user_id}`)
      .then(
        this.sellers[index].s_vertified = "Not-Vertified"
      ).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>
