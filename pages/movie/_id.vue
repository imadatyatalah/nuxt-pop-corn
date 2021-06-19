<template>
  <section>
    <movie-details :item="movie" :item-credits="movieCredits" />
  </section>
</template>

<script>
import { TMDB_BASE_URL, TMDB_BASE_API_KEY } from '@/config'

export default {
  async asyncData({ params, error }) {
    try {
      const movie = await fetch(
        `${TMDB_BASE_URL}movie/${params.id}?api_key=${TMDB_BASE_API_KEY}&language=en-US`
      ).then((res) => res.json())

      const movieCredits = await fetch(
        `${TMDB_BASE_URL}movie/${params.id}/credits?api_key=${TMDB_BASE_API_KEY}&language=en-US`
      ).then((res) => res.json())

      return { movie, movieCredits }
    } catch (err) {
      error(err)
    }
  },
}
</script>

<style scoped></style>
