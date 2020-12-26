
<template>
  <div class="grid">
    <sudoku-box :start-row=1 :start-column=1 :on-value-changed=onValueChanged />
    <sudoku-box :start-row=1 :start-column=4 :on-value-changed=onValueChanged />
    <sudoku-box :start-row=1 :start-column=7 :on-value-changed=onValueChanged />
    <sudoku-box :start-row=4 :start-column=1 :on-value-changed=onValueChanged />
    <sudoku-box :start-row=4 :start-column=4 :on-value-changed=onValueChanged />
    <sudoku-box :start-row=4 :start-column=7 :on-value-changed=onValueChanged />
    <sudoku-box :start-row=7 :start-column=1 :on-value-changed=onValueChanged />
    <sudoku-box :start-row=7 :start-column=4 :on-value-changed=onValueChanged />
    <sudoku-box :start-row=7 :start-column=7 :on-value-changed=onValueChanged />
  </div>
</template>

<script>

import sudokuBox from "@/components/sudoku/sudokuBox";
import Sudoku from "@/Sudoku";

export default {
name: "SudokuSolver",
  components: {
    sudokuBox,
  },
  data() {
  return {
   sudokuSolvingClass: new Sudoku(),
  }},

  methods: {
    onValueChanged: function(row, col, value) {
      this.sudokuSolvingClass.setValue(row, col, value);
      console.log(`row: ${row}, col: ${col}, value: ${value}`)
    },

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