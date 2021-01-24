<template>
  <div id="contact" class="mt-32 mb-20">
    <h3 class="text-2xl text-center">Contact Me</h3>
    <div class="grid grid-cols-3 md:flex items-center justify-around text-center my-8">
      <div v-for="(x,y) in skill" :key="y" >
        <Icon :icon="x" class="text-6xl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skill: ['lab la-github', 'lab la-linkedin-in text-blue-700', 'las la-envelope-open text-red-700',]
    }
  },
}
</script>