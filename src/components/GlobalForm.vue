<template>
<div class="data" >
<form @submit.prevent="insert" method="post">
<label for="name">Name:</label><br>
<input type="text" v-model="name" required><br>
<label for="rollno">Roll no:</label><br>
<input type="number" v-model="rollno" required><br>
<label for="depid">Department ID:</label><br>
<input type="number" v-model="depid" required><br><br>
<button type="submit">{{ editMode ? 'Update' : 'Insert' }}</button>
</form>
</div>
</template>
<script>
  import axios from 'axios'
  import eventBus from '@/Plugins/event-bus';
export default{
    name:"GlobalForm",
    
    data(){
        return{
            name:' ',
            rollno:' ',
            depid:' ',
            stud_id:' ',
            existData: null,
            editMode:false,
            baseurl:import.meta.env.VITE_APP_BASE_URL
        }
    },
    methods:{
        insert(){
            const formDetails={
            stud_name:this.name,
            roll_no:this.rollno,
            dept_id:this.depid
         }
        if (this.editMode){
        axios
        .put(`${this.baseurl}updatedetails/${this.book_id}`,formDetails)
        .then((response) => console.log(response))
        this.successMessage = "Successfully updated."
            this.resetForm();
            this.editMode=false;
            this.emitter.emit("reload", 'trigger');

                  } 
        else{
            axios
         .post(`${this.baseurl}insertstudent`,formDetails)
         .then((response) => this.emitter.emit("reload", 'trigger'))
            this.resetForm();
            
            }
        },
        resetForm() {
            this.name = "";
            this.rollno = "";
            this.depid = "";
    }
         },
created() { 
         this.emitter.on("currentvalue", editFormData => {
         this.existData = editFormData;
         console.log(this.existData,'EVENTBUS')
      
    });
  },
  watch: {
    existData: {
      immediate: true,
      handler(value) {
        if (value !== null) {
          this.name = value.stud_name;
          this.rollno = value.roll_no;
          this.depid = value.dept_id;
          this.stud_id=value.stud_id
          this.editMode = true;
        } else {
          this.resetForm();
        }
      }
    }
  },
}

</script>
<style>

</style>