<template>
  <section>
    <tv-show-details :item="tvShow" />
  </section>
</template>

<script>
import { TMDB_BASE_API_KEY, TMDB_BASE_URL } from '@/config'
import TvShowDetails from '@/components/TvShowDetails.vue'

export default {
  components: { TvShowDetails },

  async asyncData({ params }) {
    const tvShow = await fetch(
      `${TMDB_BASE_URL}tv/${params.id}?api_key=${TMDB_BASE_API_KEY}&language=en-US`
    ).then((res) => res.json())

    return { tvShow }
  },
}
</script>

<style scoped></style>
