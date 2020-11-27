<template>
  <div> this will be a flash card {{ cardIndex }}</div>
</template>

<script>
export default {
  name: "FlashCards",
  props: {
    cardIndex: {
      type: Number,
      default: 0
    },
  },

}
</script>

<style scoped>

</style>