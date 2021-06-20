<template>
  <tv-show-details :item="tvShow" />
</template>

<script>
import { TMDB_API_KEY, TMDB_BASE_URL } from '@/config'

export default {
  async asyncData({ params, error }) {
    try {
      const tvShow = await fetch(
        `${TMDB_BASE_URL}tv/${params.id}?api_key=${TMDB_API_KEY}&language=en-US`
      ).then((res) => res.json())

      return { tvShow }
    } catch (err) {
      error(err)
    }
  },
}
</script>

<style scoped></style>
