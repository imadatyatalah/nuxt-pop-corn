export const title = {
  computed: {
    title() {
      return this.media.title ? this.media.title : this.media.name
    },
  },
}
