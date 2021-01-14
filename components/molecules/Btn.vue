<template>
  <nuxt-link :to="url" class="flex items-center border border-secondary text-secondary px-3 py-1 rounded-full">
    {{text}} <Icon :icon='icon' class="ml-2" />
  </nuxt-link>
</template>

<script>
export default {
  props: ['url', 'text', 'icon']
}
</script>