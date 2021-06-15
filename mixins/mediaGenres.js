export const genres = {
  computed: {
    genres() {
      return this.movie.genres?.map(({ name }) => name).join(', ')
    },
  },
}
