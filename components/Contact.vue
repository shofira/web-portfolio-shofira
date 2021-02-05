<template>
  <div class="flex items-center text-orange dark:text-secondary">
    <a :href="x[1]" target="_blank" v-for="(x,y) in contact" :key="y" class="mr-5">
      <Icon :icon="x[0]" class="text-2xl" />
    </a>
    <a href = "mailto:shofirakhairunnisa@gmail.com?subject=Hiring&body=Message" target="_blank" class="mr-5">
      <Icon icon="las la-envelope" class="text-2xl" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: [
        ['lab la-github', 'https://github.com/shofira'],
        ['lab la-linkedin-in', 'https://www.linkedin.com/in/shofirk/']
      ],
    }
  },
}
</script>