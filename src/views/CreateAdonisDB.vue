<template>
    <div>
<AdonisForms @editData="updateStudent" @studentdetails="dbinsert"/>
<RouterLink to="/adonis">Display details</RouterLink>
<div v-if="successMessage">
<p>{{ successMessage }}</p>
</div>
</div>
</template>
<script>
import AdonisForms from '@/components/AdonisForms.vue';
import axios from 'axios'
  export default{
    data(){
    return{
        students:{},
        successMessage:"",
    };
},
  components:{
    AdonisForms
  },
  methods:{
        dbinsert(data){
        this.students = { ...data };
        console.log(this.students)
        axios
    .post('http://localhost:3333/insertstudent',this.students)
    .then((response) => console.log(response))
    this.successMessage = "Successfully Inserted."
        },
    },


  

  }
</script>