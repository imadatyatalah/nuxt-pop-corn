<template>
  <div class="flex justify-center">
    <div class="cardContainer">
      <div v-for="item of items.results" :key="item.id">
        <div class="m-3 shadow-lg hover:shadow-xl">
          <nuxt-link :to="'/' + mediaType + '/' + item.id">
            <media-poster :media="item" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MediaPoster from '@/components/MediaPoster.vue'

export default {
  name: 'MediaCards',
  components: { MediaPoster },

  props: {
    items: { type: Object, required: true },
    mediaType: {
      type: String,
      required: true,
      validator: (value) => {
        return value.match(/(movie|tv)/)
      },
    },
  },
}
</script>

<style scoped>
.cardContainer {
  @apply sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5;
}
</style>
