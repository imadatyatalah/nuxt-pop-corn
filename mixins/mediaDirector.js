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
