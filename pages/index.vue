<template>
  <div>
    <div id="home" class="grid grid-cols-1 md:grid-cols-2 items-center h-screen">
      <div class="tracking-wide space-y-6">
        <p class="text-lg md:text-xl my-10">Welcome!</p>
        <h3 class="text-2xl md:text-3xl lg:text-4xl">
          I'm Shofira Khairunnisa
          <div class="flex">
            as a &nbsp; <div class="typing text-orange">Frontend Developer.</div>
          </div>
        </h3>
        <button class="btn-outline-orange" v-scroll-to="'#about'">Get to Know Me</button>
        <Contact />
      </div>
      <img src="../static/images/jumbotron.png">
    </div>
    <About />
    <Project />
    <Skills />
  </div>
</template>

<style scoped>
.typing {
  width: 17ch;
  animation: typing 3s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
}
@keyframes typing {
  from {
    width: 0
  }
}
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>