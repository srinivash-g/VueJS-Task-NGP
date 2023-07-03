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
export default{
    name:"GlobalForm",
    props: {
    existData: {
      type: Object,
      default: null
    }},
    data(){
        return{
            name:' ',
            rollno:' ',
            depid:' '
        }
    },
    methods:{
        insert(){
            const formDetails={
            stud_name:this.name,
            roll_no:this.rollno,
            dept_id:this.depid
         }
            if (this.editMode)
            {
            this.$emit("editData", formDetails);
            this.resetForm();
            } 
            else 
            {
            this.$emit("studentdetails", formDetails);
            this.resetForm();
            }
        },
             resetForm() {
            this.name = "";
            this.rollno = "";
            this.depid = "";
    }
         },
         watch: {
    existData: {
      immediate: true,
      handler(value) {
        if (value) {
          this.name = value.stud_name;
          this.rollno = value.roll_no;
          this.depid = value.dept_id;
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