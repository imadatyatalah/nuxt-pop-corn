<template>
  <section></section>
</template>

<script>
import { TMDB_BASE_URL, TMDB_BASE_API_KEY } from '@/config'

export default {
  async asyncData({ params }) {
    const movies = await fetch(
      `${TMDB_BASE_URL}movie/${params.category}?api_key=${TMDB_BASE_API_KEY}&language=en-US&page=1`
    ).then((res) => res.json())

    return { movies }
  },
}
</script>

<style></style>
