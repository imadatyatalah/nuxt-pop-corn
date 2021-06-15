<template>
  <section>
    <h1>{{ slug }}</h1>

    <div v-for="movie of movies.results" :key="movie.id">
      <MediaCard :media="movie"></MediaCard>
    </div>
  </section>
</template>

<script>
import { TMDB_BASE_URL, TMDB_BASE_API_KEY } from '@/config'
import MediaCard from '@/components/MediaCard.vue'

export default {
  components: { MediaCard },

  async asyncData({ params }) {
    const slug = await params.category

    const movies = await fetch(
      `${TMDB_BASE_URL}movie/${slug}?api_key=${TMDB_BASE_API_KEY}&language=en-US&page=1`
    ).then((res) => res.json())

    return { slug, movies }
  },
}
</script>

<style></style>
