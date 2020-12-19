
<template>
  <sudoku-box/><sudoku-box/><sudoku-box/>
  <sudoku-box/><sudoku-box/><sudoku-box/>
  <sudoku-box/><sudoku-box/><sudoku-box/>
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


</style>