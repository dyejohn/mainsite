<template>
  <div class="box">
    <sudokuCell  :row=startRow     :column=startColumn   :on-value-changed=onValueChanged />
    <sudokuCell  :row=startRow     :column=startColumn+1 :on-value-changed=onValueChanged />
    <sudokuCell  :row=startRow     :column=startColumn+2 :on-value-changed=onValueChanged />
    <sudokuCell  :row=startRow+1   :column=startColumn   :on-value-changed=onValueChanged />
    <sudokuCell  :row=startRow+1   :column=startColumn+1 :on-value-changed=onValueChanged />
    <sudokuCell  :row=startRow+1   :column=startColumn+2 :on-value-changed=onValueChanged />
    <sudokuCell  :row=startRow+2   :column=startColumn   :on-value-changed=onValueChanged />
    <sudokuCell  :row=startRow+2   :column=startColumn+1 :on-value-changed=onValueChanged />
    <sudokuCell  :row=startRow+2   :column=startColumn+2 :on-value-changed=onValueChanged />
  </div>
</template>

<script>
import sudokuCell from "@/components/sudoku/sudokuCell";

export default {
name: "sudokuBox",
  components: {
    sudokuCell
  },
  props: {
    startRow: {
      type: Number,
    },
    startColumn: {
      type: Number
    },
    onValueChanged: {
      type: Function,
    }
  },
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