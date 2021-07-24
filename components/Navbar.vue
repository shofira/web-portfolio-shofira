<template>
<nav class="fixed w-full flex items-center justify-between flex-wrap px-6 py-3 bg-gray-300 dark:bg-gray-900">
  <div v-scroll-to="'#home'" class="flex items-center flex-no-shrink text-orange dark:text-secondary cursor-pointer mr-10">
    <span class="font-semibold text-2xl tracking-wide">Shofira</span>
  </div>
  <div class="w-full hidden block md:flex-grow md:flex md:items-center md:w-auto space-y-3" id="collapse">
    <div class="text-sm md:flex-grow items-center md:space-x-5">
      <a href="" v-scroll-to="'#home'" class="block mt-4 md:inline-block md:mt-0 dark:text-light border-b border-transparent md:focus:border-orange">
        Home
      </a>
      <a href="" v-scroll-to="'#about'" class="block mt-4 md:inline-block md:mt-0 dark:text-light border-b border-transparent md:focus:border-orange">
        About
      </a>
      <a href="" v-scroll-to="'#project'" class="block mt-4 md:inline-block md:mt-0 dark:text-light border-b border-transparent md:focus:border-orange">
        Project
      </a>
      <a href="" v-scroll-to="'#skill'" class="block mt-4 md:inline-block md:mt-0 dark:text-light border-b border-transparent md:focus:border-orange">
        Skill
      </a>
    </div>
  </div>
  <div class="grid md:flex items-center text-center gap-5">
    <!-- switch dark mode -->
    <button @click="toggle" class="dark:text-secondary focus:outline-none">
      <Icon icon="las la-sun text-2xl" v-show="this.$colorMode.value == 'dark'" />
      <Icon icon="las la-moon text-2xl" v-show="this.$colorMode.value == 'light'" />
    </button>
    <!-- button hire -->
    <a href = "mailto:shofirakhairunnisa@gmail.com?subject=Hiring&body=Message" class="bg-orange dark:bg-secondary text-gray-100 text-sm tracking-wider font-semibold py-2 px-4 rounded-md text-sm shadow-md hidden md:flex">
      Hire Me
    </a>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    collapse() {
      const collapse = document.getElementById('collapse');
      if(collapse.classList.contains('hidden')) {
        collapse.classList.remove('hidden')
      } else {
        collapse.classList.add('hidden')
      }
    },
    toggle() {
      this.$colorMode.preference =
      this.$colorMode.value == "light" ? "dark" : "light";
    }
  }
}
</script>