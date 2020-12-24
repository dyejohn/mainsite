<template >
  <div class="cell">
  <input type="number"
         min="0" max="9"
         maxlength="1"
         class="input-cell"
         :class="{ hide : !hideHints}"
         v-model="newValue"
         placeholder="" @blur="endInput()"  />
    <div class="display-cell" :class="{ 'hide' : hideHints }" @click="startInput()" >1 2 3 4 5 6 7 8 9</div>
  </div>
</template>

<script>
export default {
name: "sudokuCell",
data() {
  return {
    newValue: this.value,
    hideHints: false,
}},
props: {
  value: {
    type: Number,
    default: 0,
  },
  row: {
    type: Number,
  },
  column: {
    type: Number
  },
  onValueChanged: {
    type: Function,
  }
},
methods: {
  startInput: function () {
    console.log("start input fired");
    this.hideHints = true;
  },
  endInput: function () {
    console.log("end input fired");
    this.flipDisplay();
  },
  flipDisplay: function() {
    console.log("flip display called");
    console.log(this.newValue);
    if(this.newValue === "0") {
      this.hideHints = false;
      return;
    }
    this.hideHints = true;
  }
},
watch: {
  newValue: function (val) {
    this.flipDisplay();
    console.log(`watcher hit ${val}`);
  },
  },
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
  font-size: 40px;
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

.hide {
  visibility: hidden;
}

</style>