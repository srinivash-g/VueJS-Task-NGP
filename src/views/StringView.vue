<template>
  <div class="str">
   <p>Enter a Text:</p>
   <input v-model="myString" type="text">
   <div class="content">
   <p>Word count: {{ wordCount }}</p><br>
   <p>Sentence count: {{ sentenceCount }}</p><br>
   <p>Vowel count: {{ vowelCount }}</p>
    </div>
  </div>
</template>

<script>
  export default{
            data() {
                return {
                    myString: "",
                };
            },
            computed: {
                wordCount() {
                    return this.myString.split(" ").length;
                },
                sentenceCount() {
                    return this.myString.split(/[.!?;]/).length;
                },
                vowelCount(){
                  var ctr = 0;
                    for (let i=0; i<this.myString.length; i++){
                      if(this.myString[i]=='a' ||
                      this.myString[i]=='e' ||
                      this.myString[i]=='i' ||
                      this.myString[i]=='o' ||
                      this.myString[i]=='u'){
                        ctr += 1;
                      }
                    }
                    return ctr;
                }
            },
        
          }
        

</script>

<style >
.str    { 
            margin: 0 auto;
        }
        input[type="text"] {
            width: 400px;
            height: 200px;
            display: inline-block;
            vertical-align: top;
            resize: none;
            padding: 6px 8px;
            box-sizing: border-box;
        }
        .content{
            text-align: left;
        }
</style>