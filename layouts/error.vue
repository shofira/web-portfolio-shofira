<template>
  <div class="mx-auto md:max-w-sm text-center p-3">
    <img src="../static/images/error.png" class="mx-auto mt-20" />
    <p class="text-secondary text-2xl font-semibold my-5">
      Opps! Page Not Found
    </p>
    <p class="text-md text-gray-700 mb-5">
      The link you followed may be broken, or the page may have been removed.
    </p>
    <button class="bg-secondary text-white rounded-full px-6 py-2 focus:outline-none" @click="goHome">Back Home</button>
  </div>
</template>

<script>
export default {
  layout: 'error-page',
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>