<template>
  <span :class="[colorScheme]" class="tag">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Tag',

  props: {
    colorScheme: {
      type: String,
      default: 'default-color-sheme',
      validator: (value) => {
        return value.match(/(default-color-sheme)/)
      },
    },
  },
}
</script>

<style scoped>
.tag {
  @apply p-2 inline-block mr-2 mb-2 rounded-[10px] text-sm whitespace-nowrap;
}
.default-color-sheme {
  @apply bg-[#EFE8D8] text-black;
}
</style>
