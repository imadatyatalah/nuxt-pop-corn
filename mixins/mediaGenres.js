export const genres = {
  computed: {
    genres() {
      return this.item.genres?.map(({ name }) => name).join(', ')
    },
  },
}
