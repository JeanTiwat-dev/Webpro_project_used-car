<template>
<welcome-layout>
  <div id="app">
    <!-- component -->
    <div
      class="min-h-screen flex items-center justify-center bg-gray-100 pt-20 pb-20"
    >
      <!-- card -->
      <div>
        <div
          class="
            flex flex-col
            bg-white
            shadow-md
            sm:px-6
            md:px-8
            lg:px-10
            py-5
            rounded-xl
            max-w-2xl
            mt-10
          "
        >
          <!-- head -->
          <div class="flex flex-col items-center justify-center">
            <svg
              width="90"
              height="90"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="text-orange-500"
                cx="14"
                cy="13.5"
                r="1.5"
                fill="currentColor"
              />
              <path
                class="text-orange-500"
                fill="currentColor"
                d="M16.1 9h-1.6c-.6-2.7-3.2-4.5-5.9-3.9C6.6 5.5 5 7 4.6 9h-.7c-1 0-1.9.9-1.9 1.9v1.3c0 .7.6 1.3 1.3 1.3h.3c0-1.3 1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4h3.2c0-1.3 1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4h.3c.7 0 1.3-.6 1.3-1.3V11c0-1.1-.9-2-1.9-2zM6.2 9c.5-1.9 2.5-2.9 4.3-2.4c1.1.3 2 1.2 2.4 2.4H6.2zM6 12c-.8 0-1.5.7-1.5 1.5S5.2 15 6 15s1.5-.7 1.5-1.5S6.8 12 6 12z"
              />
            </svg>
            <div
              class="font-medium self-center text-xl sm:text-3xl text-gray-700"
            >
              Addproduct
            </div>
          </div>
          <!-- form -->
          <div class="mt-8">
            <form>
              <!-- page1 -->
              <div v-show="page">
                <!-- PAGE1 carbrand (select)-->
                <div class="flex flex-col mb-5">
                  <select
                    v-model="carbrand"
                    id="grid-state"
                    type="text"
                    required
                    class="
                      appearance-none
                      bg-transparent
                      border-b border-gray-400
                      w-full
                      pl-3
                      mr-3
                      py-2
                      px-2
                      leading-tight
                      focus:outline-none focus:border-orange-400
                    "
                  >
                    <option value="" selected disabled>Car Brand</option>
                    <option value="">Mercedes Benz</option>
                    <option value="">BMW</option>
                    <option value="">Nissan</option>
                    <option value="">Honda</option>
                    <option value="">Toyota</option>
                    <option value="">Mazda</option>
                    <option value="">Other</option>
                  </select>
                </div>

                <!-- PAGE1 model car/year -->
                <div class="grid grid-cols-2 gap-4">
                  <!-- model car -->
                  <div class="flex flex-col mb-5">
                    <div class="relative">
                      <input
                        v-model="car_model"
                        id="car_model"
                        type="text"
                        name="car_model"
                        placeholder="Car Model"
                        class="
                        appearance-none
                        bg-transparent
                        border-b border-gray-400
                        w-full
                        text-gray-700
                        mr-3
                        pl-3
                        py-2
                        px-2
                        leading-tight
                        focus:outline-none focus:border-orange-400
                      "
                      />
                    </div>
                  </div>
                  <!-- model year -->
                  <div class="flex flex-col mb-5">
                    <div class="relative">
                      <input
                        v-model="car_modelyear"
                        id="car_modelyear"
                        type="text"
                        name="car_modelyear"
                        placeholder="Car Model Year"
                        class="
                        appearance-none
                        bg-transparent
                        border-b border-gray-400
                        w-full
                        text-gray-700
                        mr-3
                        pl-3
                        py-2
                        px-2
                        leading-tight
                        focus:outline-none focus:border-orange-400
                      "
                      />
                    </div>
                  </div>
                </div>

                <!-- PAGE1  number of doors -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <input
                      v-model="number_doors"
                      id="numberofdoors"
                      type="text"
                      name="numberofdoors"
                      placeholder="Number of Doors"
                      class="
                        appearance-none
                        bg-transparent
                        border-b border-gray-400
                        w-full
                        text-gray-700
                        mr-3
                        pl-3
                        py-2
                        px-2
                        leading-tight
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!-- PAGE1 Driving Type (select) -->
                <div class="flex flex-col mb-5">
                  <select
                    v-model="driving_type"
                    id="driving_type"
                    type="text"
                    required
                    class="
                      appearance-none
                      bg-transparent
                      border-b border-gray-400
                      w-full
                      pl-3
                      mr-3
                      py-2
                      px-2
                      leading-tight
                      focus:outline-none focus:border-orange-400
                    "
                  >
                    <option value="" selected disabled>Driving Type</option>
                    <option value="">4wd</option>
                    <option value="">awd</option>
                    <option value="">fwd</option>
                    <option value="">rwd</option>
                  </select>
                </div>

                <!-- PAGE1 car engine -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <input
                      v-model="car_engine"
                      type="text"
                      placeholder="Car Engine"
                      class="
                        appearance-none
                        bg-transparent
                        border-b border-gray-400
                        w-full
                        text-gray-700
                        pl-3
                        mr-3
                        py-2
                        px-2
                        leading-tight
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>
              </div>

              <!-- page 2 -->
              <div v-show="page2">
                <!-- PAGE2 gear/numgear/owner -->
                <div class="grid grid-cols-3 gap-4">
                  <!-- page2 gear transmission -->
                  <div class="flex flex-col mb-5">
                    <div class="relative">
                      <input
                        v-model="gear_transmission"
                        type="text"
                        placeholder="Gear Transmission"
                        class="
                          appearance-none
                          bg-transparent
                          border-b border-gray-400
                          w-full
                          text-gray-700
                          pl-3
                          mr-3
                          py-2
                          px-2
                          leading-tight
                          focus:outline-none focus:border-orange-400
                        "
                      />
                    </div>
                  </div>

                  <!-- PAGE2 number of gears -->
                  <div class="flex flex-col mb-5">
                    <div class="relative">
                      <input
                        v-model="number_gears"
                        type="text"
                        placeholder="Number of Gears"
                        class="
                          appearance-none
                          bg-transparent
                          border-b border-gray-400
                          w-full
                          text-gray-700
                          pl-3
                          mr-3
                          py-2
                          px-2
                          leading-tight
                          focus:outline-none focus:border-orange-400
                        "
                      />
                    </div>
                  </div>

                  <!-- PAGE2 Owner (select)-->
                  <div class="flex items-center mb-5">
                    <select
                      v-model="owner"
                      id="owner"
                      type="text"
                      required
                      class="
                        appearance-none
                        bg-transparent
                        border-b border-gray-400
                        w-full
                        pl-3
                        mr-3
                        py-2
                        px-2
                        leading-tight
                        focus:outline-none focus:border-orange-400
                      "
                    >
                      <option value="" selected disabled>Owner</option>
                      <option value="">1st</option>
                      <option value="">2nd</option>
                      <option value="">3rd</option>
                      <option value="">4th</option>
                      <option value="">5th</option>
                    </select>
                  </div>
                </div>

                <!-- PAGE2 compulsory insurance -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <input
                      v-model="compulsory_insurance"
                      type="text"
                      class="
                        appearance-none
                        bg-transparent
                        border-b border-gray-400
                        w-full
                        text-gray-700
                        pl-3
                        mr-3
                        py-2
                        px-2
                        leading-tight
                        focus:outline-none focus:border-orange-400
                      "
                      placeholder="Compulsory Insurance"
                      onfocus="(this.type='date')"
                    />
                  </div>
                </div>

                <!-- PAGE2 car register -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <input
                      v-model="car_register"
                      type="text"
                      class="
                        appearance-none
                        bg-transparent
                        border-b border-gray-400
                        w-full
                        text-gray-700
                        pl-3
                        mr-3
                        py-2
                        px-2
                        leading-tight
                        focus:outline-none focus:border-orange-400
                      "
                      placeholder="Car Register"
                    />
                  </div>
                </div>

                <!-- PAGE2 Mileage -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <input
                      v-model="mileage"
                      type="text"
                      class="
                        appearance-none
                        bg-transparent
                        border-b border-gray-400
                        w-full
                        text-gray-700
                        pl-3
                        mr-3
                        py-2
                        px-2
                        leading-tight
                        focus:outline-none focus:border-orange-400
                      "
                      placeholder="Mileage"
                    />
                  </div>
                </div>

                <!-- PAGE2 registration year -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <input
                      v-model="registration_year"
                      type="text"
                      class="
                        appearance-none
                        bg-transparent
                        border-b border-gray-400
                        w-full
                        text-gray-700
                        pl-3
                        mr-3
                        py-2
                        px-2
                        leading-tight
                        focus:outline-none focus:border-orange-400
                      "
                      placeholder="Registration Year"
                    />
                  </div>
                </div>

                <!-- PAGE2 color (select) -->
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <select
                      v-model="color"
                      id="color"
                      type="text"
                      required
                      class="
                      appearance-none
                      bg-transparent
                      border-b border-gray-400
                      w-full
                      pl-3
                      mr-3
                      py-2
                      px-2
                      leading-tight
                      focus:outline-none focus:border-orange-400
                    "
                    >
                      <option value="" selected disabled>Color</option>
                      <option value="">White</option>
                      <option value="">Black</option>
                      <option value="">Gray</option>
                      <option value="">Bronze</option>
                      <option value="">Blue</option>
                      <option value="">Red</option>
                      <option value="">Green</option>
                      <option value="">Brown</option>
                      <option value="">Orange</option>
                      <option value="">Gold</option>
                      <option value="">Sliver</option>
                      <option value="">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- page3 -->
              <div v-show="page3">
                <!--PAGE3 selling price -->
                <div class="flex flex-col mb-5">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Selling Price:</label
                  >
                  <div class="relative">
                    <input
                      v-model="selling_price"
                      type="text"
                      class="
                        appearance-none
                        bg-transparent
                        border-b border-gray-400
                        w-full
                        text-gray-700
                        mr-3
                        pl-3
                        py-2
                        px-2
                        leading-tight
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!--PAGE3 desciption -->
                <div class="flex flex-col mb-5">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Desciption:</label
                  >
                  <div class="relative">
                    <textarea
                      v-model="desciption"
                      id="desciption"
                      name="desciption"
                      type="text"
                      class="
                        appearance-none
                        bg-transparent
                        border border-gray-400
                        rounded-lg
                        w-full
                        text-gray-700
                        pl-3
                        mr-3
                        py-2
                        px-2
                        leading-tight
                        focus:outline-none focus:border-orange-400
                      "
                    />
                  </div>
                </div>

                <!--PAGE3 picture -->
                <div class="flex flex-col mb-5 ">
                  <div class="relative ">
                    <label
                      class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                      >Picture:</label
                    >
                    <div
                      v-show="boxupimg < 6"
                      class="flex items-center justify-center w-full"
                    >
                      <label
                        class="flex flex-col w-full h-32 border-4 border-gray-200 border-dashed duration-500 cursor-pointer hover:bg-orange-100 hover:border-orange-300"
                      >
                        <div
                          class="flex flex-col items-center justify-center pt-7"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 text-gray-400 group-hover:text-orange-600 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p
                            class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-orange-600"
                          >
                            Attach a file
                          </p>
                        </div>
                        <!-- input file -->
                        <input
                          @change="addpic"
                          type="file"
                          class="opacity-0"
                          accept="image/png, image/jpeg, image/webp"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <!-- show pic -->
                <div v-if="images" class="grid grid-cols-3 gap-4">
                  <div
                    class="relative"
                    v-for="(image, index) in images"
                    :key="image.id"
                  >
                    <div class="rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full object-cover h-36"
                        :src="showSelectImage(image)"
                        alt="Placeholder image"
                      />
                    </div>
                    <div class="grid grid-cols-1 text-center my-1">
                      <img
                        width="20px"
                        @click="deleteSelectImage(index)"
                        class="absolute top-1 right-1 cursor-pointer"
                        src="https://cdn.discordapp.com/attachments/958256273592307722/963833361779015730/x_mark.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <!-- end page2 -->
              </div>

              <!-- button -->
              <!--page1 button next -->
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
                  @click="
                    page = false;
                    page2 = true;
                  "
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
              <!--psge2 button back/next -->
              <div class="grid grid-cols-2 gap-2">
                <!-- button back-->
                <div class="flex w-full" v-show="page2">
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
                    @click="
                      page = true;
                      page2 = false;
                    "
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
                    <span class="ml-2 uppercase">back</span>
                  </button>
                </div>

                <!-- button next -->
                <div class="flex w-full" v-show="page2">
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
                    @click="
                      page3 = true;
                      page2 = false;
                    "
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
              </div>

              <!-- page3 button back/add -->
              <div class="grid grid-cols-2 gap-2">
                <!-- button back-->
                <div class="flex w-full" v-show="page3">
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
                    @click="
                      page3 = false;
                      page2 = true;
                    "
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
                    <span class="ml-2 uppercase">back</span>
                  </button>
                </div>

                <!-- button addproduct -->
                <div class="flex w-full" v-show="page3">
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
                    <span class="mr-2 uppercase">add product</span>
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
      </div>
    </div>
  </div>
</welcome-layout>
</template>

<script>
import axios from "axios";
import WelcomeLayout from '../layouts/welcome.vue'
// @ is an alias to /src
export default {
  name: "addproduct",
  components :{
    WelcomeLayout
  },
  data() {
    return {
      page: true,
      page2: false,
      page3: false,
      carbrand: "",
      car_model: "",
      car_modelyear: "",
      number_doors: "",
      driving_type: "",
      car_engine: "",
      gear_transmission: "",
      number_gears: "",
      owner: "",
      compulsory_insurance: "",
      car_register: "",
      mileage: "",
      registration_year: "",
      color: "",
      selling_price: "",
      desciption: "",
      boxupimg: 0,
      images: []
    };
  },
  methods: {
    addpic(event) {
      this.images.push(event.target.files);
      this.boxupimg = this.images.length;
      console.log(this.images);
    },
    showSelectImage(image) {
      return URL.createObjectURL(image[0]);
    },
    deleteSelectImage(index) {
      this.images = Array.from(this.images);
      this.images.splice(index, 1);
      this.boxupimg -= 1;
    }
  }
};
</script>

<style>
select:required:invalid {
  color: #9ca3af;
}
option[value=""][disabled] {
  display: none;
}
option {
  color: #000;
}
</style>
