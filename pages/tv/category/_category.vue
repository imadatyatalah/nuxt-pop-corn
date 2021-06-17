<template>
  <section>
    <media-cards :items="tvShows" media-type="tv" />
  </section>
</template>

<script>
import { TMDB_BASE_URL, TMDB_BASE_API_KEY } from '@/config'
import MediaCards from '@/components/MediaCards.vue'

export default {
  components: { MediaCards },

  async asyncData({ params }) {
    const tvShows = await fetch(
      `${TMDB_BASE_URL}tv/${params.category}?api_key=${TMDB_BASE_API_KEY}&language=en-US&page=1`
    ).then((res) => res.json())

    return { tvShows }
  },
}
</script>

<style scoped></style>
