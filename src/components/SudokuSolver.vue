
<template>
  <div class="grid"><sudoku-box/><sudoku-box/><sudoku-box/>
  <sudoku-box/><sudoku-box/><sudoku-box/>
  <sudoku-box/><sudoku-box/><sudoku-box/></div>
</template>

<script>

import sudokuBox from "@/components/sudoku/sudokuBox";

export default {
name: "SudokuSolver",
  components: {
    sudokuBox,
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 190px 190px 190px;
  margin: 0px;
  padding:0px;
}

</style>