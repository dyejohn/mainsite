<template >
  <div class="cell">
  <input type="text" class="input-cell" :value="value" placeholder=""/>
    <div class="display-cell">1 2 3 4 5 6 7 8 9</div>
  </div>
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
  width: 60px;
  height: 60px;
  text-align: center;
  vertical-align: center;
  line-height: 60px;
  margin:0px;
  padding: 0px;
  position: relative;
}
.input-cell {
  z-index: 2;
  color: black;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 56px;
  width: 56px;
  margin: 0px;
  padding: 0px;
  text-align: center;
  vertical-align: center;
  line-height: 60px;
  opacity: .7;
  font-size: 20px;
}

.display-cell {
  z-index: 1;
  color: blue;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 56px;
  width: 56px;
  margin: 0px;
  padding: 0px;
  text-align: center;
  vertical-align: center;
  line-height: 20px;
  word-wrap: normal;
}

</style>