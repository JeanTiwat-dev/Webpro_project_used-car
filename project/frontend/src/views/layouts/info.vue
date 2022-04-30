<template>
  <div id="app">
    <div class="w-full grid grid-cols-12">
        <div class="col-start-1 col-end-4 mt-2 text-center text-bold border-2 border-blue-900 m-2">
            <div class="row">Sort By</div>
            <p>- PRICE</p>
            <p>- Kilometers</p>
            <div class="row">Filter By Brand</div>
            <div class="row">Filter By Color</div>
            <div class="row">Filter By car type</div>
            <div class="row">Filter By Price Range</div>
            <div class="row">Filter By Kilometers Range</div>
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
