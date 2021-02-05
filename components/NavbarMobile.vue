<template>
<nav class="fixed md:hidden bottom-0 bg-white border-t border-gray-200 w-full flex items-center justify-between py-3 px-6 text-orange">
  <a v-scroll-to="{el: '#' + x[0]}" v-for="(x,y) in menu" :key="y" class="text-center">
    <Icon :icon="x[1]" class="text-2xl" />
    <p class="text-xs">{{ x[2] }}</p>
  </a>
</nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        ['home', 'las la-home', 'Home'],
        ['about', 'las la-user', 'About'],
        ['project', 'las la-project-diagram', 'Project'],
        ['skill', 'las la-tasks', 'Skill'],
      ],
    }
  },
}
</script>