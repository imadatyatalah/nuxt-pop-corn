<template>
  <section>
    <media-cards :items="movies" media-type="movie" />
  </section>
</template>

<script>
import { TMDB_BASE_URL, TMDB_BASE_API_KEY } from '@/config'

export default {
  async asyncData({ params, error }) {
    try {
      const movies = await fetch(
        `${TMDB_BASE_URL}movie/${params.category}?api_key=${TMDB_BASE_API_KEY}&language=en-US&page=1`
      ).then((res) => res.json())

      return { movies }
    } catch (err) {
      error(err)
    }
  },
}
</script>

<style scoped></style>
