<template>
  <div class="box">
    <sudokuCell/><sudokuCell/><sudokuCell/>
    <sudokuCell/><sudokuCell/><sudokuCell/>
    <sudokuCell/><sudokuCell/><sudokuCell/>
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
  display: grid;
  grid-template-columns: 62px 62px 62px;
  margin: 0;
  padding: 0;
}



</style>