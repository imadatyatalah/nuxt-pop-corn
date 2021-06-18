import { convertMinutesToHours } from '@/utils/convertMinutesToHours'
import { TMDB_IMAGE_BASE_URL, LG_POSTER_SIZE } from '@/config'

export const poster = {
  computed: {
    poster() {
      return `${TMDB_IMAGE_BASE_URL}${LG_POSTER_SIZE}${this.media.poster_path}`
    },
  },
}

export const genres = {
  computed: {
    genres() {
      return this.item.genres?.map(({ name }) => name).join(', ')
    },
  },
}

export const directors = {
  computed: {
    directors() {
      const people = this.itemCredits.crew

      if (people) {
        return people
          .filter((person) => person.job === 'Director')
          .map((person) => `<a href="/person/${person.id}">${person.name}</a>`)
          .join(', ')
      }
    },
  },
}

export const creators = {
  computed: {
    creators() {
      const people = this.item.created_by

      if (people) {
        return people
          .map((person) => `<a href="/person/${person.id}">${person.name}</a>`)
          .join(', ')
      }
    },
  },
}

export const runtime = {
  computed: {
    runtime() {
      return convertMinutesToHours(this.item.runtime)
    },
  },
}

export const episodesRuntime = {
  computed: {
    episodesRuntime() {
      return this.item.episode_run_time
        ?.map((num) => {
          return convertMinutesToHours(num)
        })
        .join(', ')
    },
  },
}

export const title = {
  computed: {
    title() {
      return this.media.title ? this.media.title : this.media.name
    },
  },
}
