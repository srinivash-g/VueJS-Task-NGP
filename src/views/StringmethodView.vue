<template>
    <div>
      <textarea v-model="myString"></textarea>
      <button class="btn" @click="calculateCounts">Count</button>
      <p>Word Count: {{ wordCount }}</p>
      <p>Sentence Count: {{ sentenceCount }}</p>
      <p>Vowel Count: {{ vowelCount }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        myString: "asdcsa",
        wordCount: 0,
        sentenceCount: 0,
        vowelCount: 0
      };
    },
    methods: {
      calculateCounts() {
        this.wordCount = this.myString.split(" ").length;
        this.sentenceCount = this.myString.split(/[.!?;]/).length;
        let ctr = 0;
        for (let i = 0; i < this.myString.length; i++) {
          if (
            this.myString[i] === "a" ||
            this.myString[i] === "e" ||
            this.myString[i] === "i" ||
            this.myString[i] === "o" ||
            this.myString[i] === "u"
          ) {
            ctr += 1;
          }
        }
        this.vowelCount = ctr;
      }
    }
  };
  </script>
  
  <style>
  .btn {
    background-color: white;
    color: black;
  }
  </style>
  