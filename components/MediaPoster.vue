<template>
  <nuxt-img
    :src="poster"
    width="342"
    height="513"
    :alt="title"
    :title="title"
    quality="75"
  />
</template>

<script>
import { poster, title } from '@/mixins/details'

export default {
  name: 'MediaPoster',
  mixins: [poster, title],

  props: { media: { type: Object, required: true } },
}
</script>

<style scoped>
img {
  border-radius: 0.375rem;
}
</style>
