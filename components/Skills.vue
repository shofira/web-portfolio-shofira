<template>
  <div id="skill">
    <h3 class="text-2xl text-center mt-32">My Skills</h3>
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
      skill: ['lab la-html5 text-orange', 'lab la-css3-alt text-blue-600', 'lab la-vuejs text-green-600', 'lab la-node text-green-800', 'lab la-bootstrap text-purple-800', 'lab la-laravel text-red-600',]
    }
  },
}
</script>