<template>
  <div class="pt-20 pb-20" id="app">
    <div class="w-full grid grid-cols-12">
        <div class="col-start-1 col-end-4 text-center text-bold grid grid-cols-1 divide-y">
            <div class="bg-white rounded shadow border p-6 w-full mt-9">
              <h5 class="text-2xl font-bold mb-4 mt-0">Sort by</h5><hr>
              <p class="text-gray-700 text-m mt-2">Content goes here</p>
        </div>
          <div class="bg-white rounded shadow border p-6 w-full mt-2">
              <h5 class="text-2xl font-bold mb-4 mt-0">Filter by</h5><hr>
              <p class="text-gray-700 text-m mt-2">Content goes here</p>
        </div>
        </div>
        <div class="col-start-4 col-end-13">
            <slot/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
