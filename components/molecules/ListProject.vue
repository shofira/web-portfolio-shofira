<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 md:gap-10 text-sm tracking-wider rounded-md leading-8 mt-5 mb-10">
    <div class="block md:flex items-center gap-5">
      <img :src="require(`../../static/images/${url}`)" class="mx-auto" />
    </div>
    <div class="space-y-5 col-span-2">
      <h3 class="text-xl mt-3 md:mt-3">{{ title }}</h3>
      <p class="text-sm">{{ desc }}</p>
      <div class="block md:flex items-center justify-between">
        <div class="grid grid-cols-3 items-center gap-2">
          <div class="bg-navy rounded-full text-white text-center text-xs px-2" v-for="(x, y) in tech" :key="y">
            {{ x }}
          </div>
        </div>
        <div class="flex items-center gap-3 justify-center mt-5 md:mt-0">
          <a :href="github" target="_blank"><Icon icon="lab la-github text-3xl"/></a>
          <a :href="scan" target="_blank"><Icon icon="las la-barcode text-3xl"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url', 'title', 'desc', 'tech', 'scan', 'github'],
}
</script>

<style scoped>
.clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
 }
.clamp, .line-2{ 
  -webkit-line-clamp: 2;
}
</style>