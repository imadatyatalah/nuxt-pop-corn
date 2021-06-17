import { convertMinutesToHours } from '@/utils/convertMinutesToHours'

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
