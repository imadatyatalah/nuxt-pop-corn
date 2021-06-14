<template>
  <section></section>
</template>

<script>
import { TMDB_BASE_URL, TMDB_BASE_API_KEY } from '@/config'

export default {
  async asyncData({ params }) {
    const movieID = await params.id

    const movie = await fetch(
      `${TMDB_BASE_URL}movie/${movieID}?api_key=${TMDB_BASE_API_KEY}&language=en-US`
    ).then((res) => res.json())

    return { movie }
  },
}
</script>

<style></style>
