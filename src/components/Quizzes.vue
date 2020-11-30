<template>
  <div :class="{ makeGreen: isCorrect, makeRed: isWrong }" class="framing">
  <div class="answerFrame">{{ question }}</div>
  <div @click="setAnswer(0)" class="answerFrame" :class="{ makeSelected: isSelected(0)}" >{{ option1 }}</div>
  <div @click="setAnswer(1)" class="answerFrame" :class="{ makeSelected: isSelected(1)}" >{{ option2 }}</div>
  <div @click="setAnswer(2)" class="answerFrame" :class="{ makeSelected: isSelected(2)}" >{{ option3 }}</div>
  <div @click="setAnswer(3)" class="answerFrame" :class="{ makeSelected: isSelected(3)}" >{{ option4 }}</div>
  </div>
  <button @click="checkAnswers">Check</button><br/><br/>
  <button @click="nextQuestion">Next</button>
</template>

<script>
import {dataService} from "@/data.service";

export default {
  name: "Quizzes",

  data: function() {
    return {
      answers: [],
      currentItem: 0,
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      selectedAnswer: 0,
      correctAnswer: 0,
      isCorrect: false,
      isWrong: false
    };
  },
  created: function() {
    this.answers = dataService.getdata().cases;
    this.nextQuestion();
  },
  methods: {
    setAnswer(answer) {
      this.selectedAnswer = answer;
    },
    isSelected(itemId) {
      if(itemId == this.selectedAnswer)
      {
        return true;
      }
      return false;
    },
    nextQuestion() {
      // clear the colors
      this.isCorrect = false;
      this.isWrong = false;
      // flip a coin to see which way to make the question.
      var questionType = Math.floor( Math.random() * 2);
      var pickQuestion = Math.floor( Math.random() * this.answers.length);
      const questionAnswers = this.makeOtherRandomChoices(pickQuestion, this.answers.length);
      this.correctAnswer = questionAnswers.correctChoice;
      const choiceList = questionAnswers.choices;
      if(questionType == 0)
      {
        // list a title, and then 4 descriptions
        this.question = this.answers[pickQuestion].title;
        this.option1 = this.answers[choiceList[0]].description;
        this.option2 = this.answers[choiceList[1]].description;
        this.option3 = this.answers[choiceList[2]].description;
        this.option4 = this.answers[choiceList[3]].description;
      }
      else
      {
        // list a description and 4 titles.
        this.question = this.answers[pickQuestion].description;
        this.option1 = this.answers[choiceList[0]].title;
        this.option2 = this.answers[choiceList[1]].title;
        this.option3 = this.answers[choiceList[2]].title;
        this.option4 = this.answers[choiceList[3]].title;

      }
    },
    makeOtherRandomChoices(initial, max) {
      // pick three other questions and hand them back with this initial
      // shuffle the list.
      var response = [initial];
      while (response.length < 4)
      {
        var nextPick =  Math.floor( Math.random() * max);
        if (!response.includes(nextPick))
        {
          response.push(nextPick);
        }
      }
      // randomly swap the first element with one of the others.. so the right answer
      // isn't always in the first spot.
      // occasionally this is still 0, and that's ok. we want the right answer to sometimes
      // be the first.
      var swapper = Math.floor( Math.random() * 4);
      response[0] = response[swapper]
      response[swapper] = initial;
      return {choices: response, correctChoice: swapper};
    },
    checkAnswers() {
      //if(this.selectedAnswer === 0 && this.correctAnswer === 0)
      //{
        // just return
     //   return;
     // }
      if(this.selectedAnswer === this.correctAnswer )
      {
        this.isCorrect = true;
        return;
      }
      this.isCorrect = false;
      this.isWrong = true;
    },

  }


}
</script>

<style scoped>
  .makeGreen {
    background-color: limegreen;
  }
  .makeRed {
    background-color: indianred;
  }
  .makeSelected {
    background-color: darkgrey;
  }

  .framing {
    max-width: 800px;
    align-content: center;
    alignment: center;
    align-items: center;
    vertical-align: top;
  }

  .answerFrame {
    padding: 20px;
  }
</style>