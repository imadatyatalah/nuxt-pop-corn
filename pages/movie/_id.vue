<template>
  <section class="grid grid-cols-[auto,1fr] gap-x-[165px] mx-[165px]">
    <MediaPoster :media="movie" />

    <div class="">
      <h1 class="text-6xl font-bold">{{ movie.title }}</h1>

      <p class="py-6">
        <Tag>{{ movie.release_date }}</Tag>
        <Tag>{{ genres }}.</Tag>
        <Tag v-if="movie.runtime !== 0">{{ runtime }}</Tag>
      </p>

      <div v-if="movie.overview">
        <h2 class="font-semibold text-lg">overview</h2>

        <p class="pt-[6px]">
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { TMDB_BASE_URL, TMDB_BASE_API_KEY } from '@/config'
import { genres } from '@/mixins/mediaGenres'
import { runtime } from '@/mixins/runtime'
import MediaPoster from '@/components/MediaPoster.vue'
import Tag from '@/components/Tag.vue'

export default {
  components: { MediaPoster, Tag },
  mixins: [genres, runtime],

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
