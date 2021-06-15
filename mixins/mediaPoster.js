import { TMDB_IMAGE_BASE_URL, LG_POSTER_SIZE } from '@/config'

export const poster = {
  computed: {
    poster() {
      return `${TMDB_IMAGE_BASE_URL}${LG_POSTER_SIZE}${this.media.poster_path}`
    },
  },
}
