<template>
  <input type="text" class="cell" :value="value" >
</template>

<script>
export default {
name: "sudokuCell",
value: 5
}
</script>

<style scoped>
.cell {
  border: 1px solid blue;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: center;
  line-height: 20px;
}
</style>