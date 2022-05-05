<template>
  <div id="app">
    <!-- component -->
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
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
    py-10
    rounded-xl
    w-96
    max-w-md
    "
        >
          <div class="flex items-center justify-center">
            <svg
              width="70"
              height="70"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="text-orange-500"
                fill="currentColor"
                d="M13 21q-1.55 0-2.938-.488q-1.387-.487-2.537-1.362q-.35-.275-.375-.712q-.025-.438.325-.788q.275-.275.65-.275t.7.225q.875.65 1.925 1.025Q11.8 19 13 19q2.9 0 4.95-2.05Q20 14.9 20 12q0-2.9-2.05-4.95Q15.9 5 13 5q-2.9 0-4.95 2.05Q6 9.1 6 12v.175l1.125-1.125q.275-.275.687-.275q.413 0 .713.275q.3.3.3.712q0 .413-.3.713L5.7 15.3q-.15.15-.325.212q-.175.063-.375.063t-.375-.063Q4.45 15.45 4.3 15.3l-2.85-2.85q-.275-.275-.262-.7q.012-.425.287-.7q.275-.3.7-.3q.425 0 .7.3L4 12.2V12q0-1.875.713-3.513q.712-1.637 1.925-2.85q1.212-1.212 2.85-1.925Q11.125 3 13 3t3.513.712q1.637.713 2.85 1.925q1.212 1.213 1.925 2.85Q22 10.125 22 12q0 3.75-2.625 6.375T13 21Zm-2-5q-.425 0-.712-.288Q10 15.425 10 15v-3q0-.425.288-.713Q10.575 11 11 11v-1q0-.825.588-1.413Q12.175 8 13 8t1.413.587Q15 9.175 15 10v1q.425 0 .713.287q.287.288.287.713v3q0 .425-.287.712Q15.425 16 15 16Zm1-5h2v-1q0-.425-.287-.713Q13.425 9 13 9t-.712.287Q12 9.575 12 10Z"
              />
            </svg>
          </div>
          <div
            class="font-medium self-center text-xl sm:text-3xl text-gray-700 mt-3"
          >
            Change Password
          </div>
          <!-- <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Please sign in to access your account
          </div> -->

          <div class="mt-8">
            <form>
              <!-- old password -->
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
                    v-model="$v.Password.$model"
                    id="password"
                    type="Password"
                    name="Password"
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
                <span
                  v-if="$v.Password.$error && !$v.Password.required"
                  class="text-xs text-red-700 mt-2"
                  >Please fill in password.</span
                >
                <span v-show="oldPassword" class="text-xs text-red-700 mt-2"
                  >Your password is incorrect!</span
                >
              </div>

              <!-- new password -->
              <div class="flex flex-col mb-6">
                <label
                  for="password"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >New Password:</label
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
                    v-model="$v.newPassword.$model"
                    id="newPassword"
                    type="Password"
                    name="newPassword"
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
                    placeholder="Enter your new password"
                  />
                </div>
                <div
                  class="text-xs text-red-700 mt-2"
                  v-if="$v.newPassword.$error"
                >
                  <span v-if="!$v.newPassword.required"
                    >Please fill in new password.</span
                  >
                  <!-- must have -->
                  <p
                    v-if="
                      !$v.newPassword.complexup ||
                        !$v.newPassword.complexlow ||
                        !$v.newPassword.complexnumber ||
                        !$v.newPassword.complexspecial ||
                        !$v.newPassword.complexwhitespace
                    "
                  >
                    Password must have
                    <span v-if="!$v.newPassword.complexup">2 Uppercase </span>
                    <span v-if="!$v.newPassword.complexlow">2 Lowercase </span>
                    <span v-if="!$v.newPassword.complexnumber">2 Number </span>
                    <span v-if="!$v.newPassword.complexspecial"
                      >2 Special characters
                    </span>
                    <span v-if="!$v.newPassword.complexwhitespace"
                      >No Whitespace
                    </span>
                  </p>
                </div>
              </div>

              <!-- confirm new password -->
              <div class="flex flex-col mb-6">
                <label
                  for="password"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >Confirm New Password:</label
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
                    v-model="$v.conNewPassword.$model"
                    id="confirmNewPassword"
                    type="password"
                    name="conNewPassword"
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
                    placeholder="Enter your new password"
                  />
                </div>
                <span
                  v-if="$v.conNewPassword.$error && !$v.conNewPassword.required"
                  class="text-xs text-red-700 mt-2"
                  >Please fill in new password.</span
                >
                <span
                  v-if="$v.conNewPassword.$error && !$v.conNewPassword.sameAs"
                  class="text-xs text-red-700 mt-2"
                  >Your new password don't match!</span
                >
              </div>

              <!-- button cancle/save -->
              <div class="flex space-x-2 w-full">
                <!-- cancel -->
                <router-link class="w-full" to="/profile/:id">
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
                  >
                    <span class="mr-2 uppercase">cancel</span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18s18-8.1 18-18S33.9 6 24 6zm0 4c3.1 0 6 1.1 8.4 2.8L12.8 32.4C11.1 30 10 27.1 10 24c0-7.7 6.3-14 14-14zm0 28c-3.1 0-6-1.1-8.4-2.8l19.6-19.6C36.9 18 38 20.9 38 24c0 7.7-6.3 14-14 14z"
                        />
                      </svg>
                    </span>
                  </button>
                </router-link>
                <!-- save -->
                <button
                  type="button"
                  @click="savepassword()"
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
                  <span class="mr-2 uppercase">save</span>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M21 7v12q0 .825-.587 1.413Q19.825 21 19 21H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h12Zm-9 11q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm-6-8h9V6H6Z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, sameAs } from "vuelidate/lib/validators";

function complexlow(value) {
  if (!value.match(/[a-z]{2}/)) {
    return false;
  }
  return true;
}
function complexup(value) {
  if (!value.match(/[A-Z]{2}/)) {
    return false;
  }
  return true;
}
function complexnumber(value) {
  if (!value.match(/[0-9]{2}/)) {
    return false;
  }
  return true;
}
function complexwhitespace(value) {
  if (value.match(/(\s)/)) {
    return false;
  }
  return true;
}
function complexspecial(value) {
  if (!value.match(/[!@#$%^&*(),.?":{}|<>]{2}/)) {
    return false;
  }
  return true;
}

export default {
  name: "changepassword",
  data() {
    return {
      oldPassword: false,
      Password: "",
      newPassword: "",
      conNewPassword: ""
    };
  },
  validations: {
    Password: {
      required: required,
      sameAs: sameAs("oldPassword")
    },
    newPassword: {
      required: required,
      complexup: complexup,
      complexlow: complexlow,
      complexnumber: complexnumber,
      complexwhitespace: complexwhitespace,
      complexspecial: complexspecial
    },
    conNewPassword: {
      required: required,
      sameAs: sameAs("newPassword")
    }
  },
  methods: {
    savepassword() {
        axios
          .put(`http://localhost:3000/resetPassword/${this.$route.params.userId}`, {
            password: this.Password,
            newpassword: this.newPassword,
            confirmpassword: this.conNewPassword
          })
          .then(res => {
            if (res.data != "success") {
              alert("Can't change password!")
              this.oldPassword = true;
            } else {
              this.oldPassword = false;
              alert("Change password success!");
              this.$router.push(`/profile/${this.$route.params.userId}`);
            }
          })
          .catch(err => {
            console.log(err);
          });

    }
  }
};
</script>
