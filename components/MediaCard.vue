<template>
  <nuxt-link :to="'/movie/' + media.id">
    <MediaPoster :media="media" />
  </nuxt-link>
</template>

<script>
import MediaPoster from '@/components/MediaPoster.vue'

export default {
  name: 'MediaCard',
  components: { MediaPoster },

  props: { media: { type: Object, required: true } },
}
</script>

<style scoped></style>
