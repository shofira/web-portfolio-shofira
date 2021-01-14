<template>
  <div class="grid grid-cols-1 md:grid-cols-2 text-sm tracking-wider rounded-md leading-8 my-5">
    <div class="block md:flex items-center gap-5">
      <img src="../../static/images/ankasa.png"/>
    </div>
    <div class="space-y-5">
      <h3 class="text-2xl">{{ title }}</h3>
      <p class="text-sm">{{ desc }}</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="bg-navy rounded-full text-white text-xs px-4" v-for="(x, y) in tech" :key="y">
            {{ x }}
          </div>
        </div>
        <p class="barcode">{{ scan }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc', 'tech', 'scan'],
}
</script>

<style scoped>
.barcode {
  font-family: 'Libre Barcode 39', cursive;
  font-size: 1.5rem;
}
</style>