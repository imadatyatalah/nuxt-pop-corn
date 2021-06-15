import { convertMinutesToHours } from '@/utils/convertMinutesToHours'

export const runtime = {
  computed: {
    runtime() {
      return convertMinutesToHours(this.movie.runtime)
    },
  },
}
