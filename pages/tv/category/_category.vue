<template>
  <section>
    <media-cards :items="tvShows" media-type="tv" />
  </section>
</template>

<script>
import { TMDB_BASE_URL, TMDB_API_KEY } from '@/config'

export default {
  async asyncData({ params, error }) {
    try {
      const tvShows = await fetch(
        `${TMDB_BASE_URL}tv/${params.category}?api_key=${TMDB_API_KEY}&language=en-US&page=1`
      ).then((res) => res.json())

      return { tvShows }
    } catch (err) {
      error(err)
    }
  },
}
</script>

<style scoped></style>
