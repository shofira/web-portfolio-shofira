<template>
  <div>
    <div id="home" class="grid grid-cols-1 md:grid-cols-2 items-center">
      <div class="py-40 tracking-wide space-y-6">
        <p class="text-xl my-10">Welcome!</p>
        <h3 class="text-3xl">
          I'm Shofira Khairunnisa <br>
          as a <span class="text-secondary">Frontend Developer</span>
        </h3>
        <button class="btn-outline-secondary" @click="toAbout">Get to Know Me</button>
      </div>
      <img src="../static/images/jumbotron.png">
    </div>
    <About />
    <Project />
    <Skills />
  </div>
</template>

<script>
export default {
  methods: {
    toAbout() {
      this.$router.push('/#about')
    }
  }
}
</script>

<style scoped>
.bg-image {
  background-image: url(../static/images/bg1.png);
  background-position: center;
  background-size: cover;
}
</style>