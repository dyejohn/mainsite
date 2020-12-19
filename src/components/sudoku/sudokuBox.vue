<template>
  <div class="box">
    <div><sudokuCell/><sudokuCell/><sudokuCell/></div>
    <div><sudokuCell/><sudokuCell/><sudokuCell/></div>
    <div><sudokuCell/><sudokuCell/><sudokuCell/></div>
  </div>
</template>

<script>
import sudokuCell from "@/components/sudoku/sudokuCell";

export default {
name: "sudokuBox",
  components: {
    sudokuCell
  }
}
</script>
<style scoped>
.box {
  border: 3px solid red;
  display: block;
}

</style>