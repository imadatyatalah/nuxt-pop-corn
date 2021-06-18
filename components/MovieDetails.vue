<template>
  <section>
    <div class="page-container">
      <div class="flex justify-center">
        <media-poster :media="item" />
      </div>

      <div>
        <div class="text-center lg:text-left py-4 lg:pt-0">
          <h1 class="title">{{ item.title }}</h1>

          <div class="pt-4">
            <p>
              <tag>{{ genres }}.</tag>
              <tag>{{ item.release_date | date }}</tag>
              <tag v-if="item.runtime !== 0">{{ runtime }}</tag>
            </p>

            <h2 v-if="item.tagline" class="tagline">
              {{ item.tagline }}
            </h2>
          </div>
        </div>

        <ul>
          <li>
            <strong class="label">Overview: </strong>
            <p class="value">{{ item.overview }}</p>
          </li>

          <li v-if="directors">
            <strong class="label">Director: </strong>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p class="value" v-html="directors" />
          </li>

          <li>
            <strong class="label">Status: </strong>
            <p class="value">{{ item.status }}.</p>
          </li>

          <li v-if="item.budget">
            <strong class="label">Budget: </strong>
            <p class="value">${{ item.budget | numberToPrice }}.</p>
          </li>

          <li v-if="item.revenue">
            <strong class="label">Revenue: </strong>
            <p class="value">${{ item.revenue | numberToPrice }}.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { genres, runtime, directors } from '@/mixins/details'
import MediaPoster from '@/components/MediaPoster.vue'
import Tag from '@/components/Tag.vue'

export default {
  name: 'MovieDetails',
  components: { MediaPoster, Tag },
  mixins: [genres, runtime, directors],

  props: {
    item: { type: Object, required: true },
    itemCredits: { type: Object, required: true },
  },
}
</script>

<style scoped>
@import url('~/assets/css/detailsPage.css');
</style>
