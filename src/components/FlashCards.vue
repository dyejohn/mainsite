<template>
  <div class="max-size"> {{answers[currentItem].title}} </div> <br/>

  <button @click="showItem = !showItem"> Show </button>

  <div v-show="showItem" class="max-size" > {{answers[currentItem].description}}</div> <br/>
  <button v-on:click="pickNewItem">button</button> <br/>
</template>

<script>
import {dataService} from "@/data.service";

export default {
  name: "FlashCards",

  data: function() {
    return {
      answers: [],
      currentItem: 0,
      showItem: false
    };
  },
  created: function() {
    this.answers = dataService.getdata().cases;

  },
  methods: {
    pickNewItem() {
      var newPick = this.currentItem;
      // just to make sure we always get a new one.
      while(newPick === this.currentItem)
      {
        newPick = Math.floor( Math.random() * this.answers.length);
      }

      this.showItem = false;
      this.currentItem = newPick
    }

  }


}
</script>

<style scoped>
.max-size {
  text-align: center;
  alignment: center;
  max-width: 500px;
}
</style>