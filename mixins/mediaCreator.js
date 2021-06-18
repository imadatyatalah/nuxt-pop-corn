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
