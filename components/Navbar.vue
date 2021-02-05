<template>
<nav class="fixed w-full flex items-center justify-between flex-wrap px-6 py-3 bg-white">
  <div v-scroll-to="'#home'" class="flex items-center flex-no-shrink text-orange cursor-pointer mr-10">
    <span class="font-semibold text-2xl tracking-wide">Shofira</span>
  </div>
  <div class="block md:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-orange border border-orange focus:outline-none" @click="collapse">
      <i class="las la-bars text-lg"></i>
    </button>
  </div>
  <div class="w-full hidden block md:flex-grow md:flex md:items-center md:w-auto space-y-3" id="collapse">
    <div class="text-sm md:flex-grow items-center md:space-x-5">
      <a href="" v-scroll-to="'#home'" class="block mt-4 md:inline-block md:mt-0 text-teal-lighter border-b border-transparent md:focus:border-orange">
        Home
      </a>
      <a href="" v-scroll-to="'#about'" class="block mt-4 md:inline-block md:mt-0 text-teal-lighter border-b border-transparent md:focus:border-orange">
        About
      </a>
      <a href="" v-scroll-to="'#project'" class="block mt-4 md:inline-block md:mt-0 text-teal-lighter border-b border-transparent md:focus:border-orange">
        Project
      </a>
    </div>
    <div class="grid md:flex items-center text-center gap-5">
      <!-- <button href="#" class="text-orange focus:outline-none">ENG</button> -->
      <a href = "mailto:shofirakhairunnisa@gmail.com?subject=Hiring&body=Message" class="bg-orange text-gray-100 text-sm tracking-wider font-semibold py-2 px-4 rounded-md text-sm shadow-md">
        Hire Me
      </a>
    </div>
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
    }
  }
}
</script>