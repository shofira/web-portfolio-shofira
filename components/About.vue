<template>
  <div id="about">
    <h3 class="text-2xl text-center mt-32 lg:mt-0 dark:text-light">About Me</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="block md:flex items-center gap-5">
        <img src="../static/images/about.png"/>
      </div>
      <div class="my-auto">
        <div class="mb-8">
          <p class="clamp line-2 tracking-wide leading-8 dark:text-light" id="show">An organized person and motivated to develop my skills and want to learn new things in order to improve quality to be professional. <br> Based on my background in IT, I have experience developing web-based programs using the Laravel framework. After graduating from high school, join the Bootcamp coding for Fullstack Web Developer at Arkademy, what was learned during the Bootcamp is Vue Js for the frontend and Node and Express Js for the Backend.</p>
          <p style="font-size: 14px" class="text-gray-800 dark:text-gray-200 cursor-pointer" @click="showMore" id="more">See More</p>
        </div>
        <a href="https://drive.google.com/file/d/1Z_gPM5cwgGd978R1IpTIYUbph5gkszBv/view?usp=sharing" target="_blank" class="border border-orange dark:border-secondary text-orange dark:text-secondary p-4 rounded-md text-sm shadow-md">
          Download CV <i class="las la-download text-lg"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
 }
.clamp, .line-2{ 
  -webkit-line-clamp: 3;
}
</style>

<script>
export default {
  methods: {
    showMore() {
      const show = document.getElementById('show');
      const more = document.getElementById('more');
      if(show.classList.contains('clamp', 'line-2')) {
        show.classList.remove('clamp', 'line-2')
        more.classList.add('hidden')
      } 
    }
  }
}
</script>