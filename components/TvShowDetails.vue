<template>
  <section>
    <div class="page-container">
      <div class="flex justify-center">
        <media-poster :media="item" />
      </div>

      <div>
        <div class="text-center lg:text-left py-4 lg:pt-0">
          <h1 class="title">{{ item.name }}</h1>

          <div class="pt-4">
            <p>
              <tag>{{ genres }}.</tag>

              <tag>
                {{ item.number_of_seasons }}
                {{ item.number_of_seasons === 1 ? 'Season' : 'Seasons' }}
              </tag>

              <tag>
                {{ item.number_of_episodes }}
                {{ item.number_of_episodes === 1 ? 'Episode' : 'Episodes' }}
              </tag>

              <tag>{{ episodesRuntime }}</tag>
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

          <li v-if="creators">
            <strong class="label">Creator: </strong>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p class="value" v-html="creators" />
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

          <li>
            <strong class="label">First Aired: </strong>
            <p class="value">{{ item.first_air_date | date }}</p>
          </li>

          <li>
            <strong class="label">Last Aired: </strong>
            <p class="value">{{ item.last_air_date | date }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { genres, episodesRuntime, creators } from '@/mixins/details'
import MediaPoster from '@/components/MediaPoster.vue'
import Tag from '@/components/Tag.vue'

export default {
  name: 'MovieDetails',
  components: { MediaPoster, Tag },
  mixins: [genres, episodesRuntime, creators],

  props: { item: { type: Object, required: true } },
}
</script>

<style scoped>
@import url('~/assets/css/detailsPage.css');
</style>
