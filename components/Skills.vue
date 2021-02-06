<template>
  <div id="skill" class="mt-20 md:mt-32 mb-20 dark:text-light">
    <h3 class="text-2xl text-center">My Skills</h3>
    <div class="grid grid-cols-3 md:flex items-center justify-around text-center">
      <div v-for="(x,y) in skill" :key="y">
        <Icon :icon="x[0]" class="text-6xl mt-8" />
        <p class="text-xs">{{ x[1] }}</p>
      </div>
    </div>
    <div class="text-center mt-8">
      <img src="../static/images/tw.png" class="mx-auto w-15 h-10 my-3">
      <p class="text-xs">Tailwind</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skill: [
        ['lab la-html5 text-orange', 'HTML'],
        ['lab la-css3-alt text-blue-600', 'CSS'],
        ['lab la-vuejs text-green-600', 'Vue Js'],
        ['lab la-node text-green-800', 'Node Js'],
        ['lab la-laravel text-red-600', 'Laravel'],
        ['lab la-bootstrap text-purple-800', 'Bootstrap'],
      ],
    }
  },
}
</script>