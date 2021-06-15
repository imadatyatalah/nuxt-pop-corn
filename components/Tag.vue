<template>
  <span :class="bgColor" class="p-2 mx-1 rounded-[10px] text-sm">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Tag',
  props: { bgColor: { type: String, default: 'bg-[#EFE8D8]' } },
}
</script>

<style scoped></style>
