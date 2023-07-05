<template>
    <h1>Student Details</h1><br>
<form @submit.prevent="insert" method="post">

    <label for="name">Name:</label><br>
    <input type="text" v-model="name" required><br>
    <label for="rollno">Roll no:</label><br>
    <input type="number" v-model="rollno" required><br>
    <label for="depid">Department ID:</label><br>
    <input type="number" v-model="depid" required><br><br>
    <button type="submit">{{ editMode ? 'Update' : 'Insert' }}</button>
  </form>
</template>
<script>
export default{
    name:"AdonisForms",
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
            // this.$emit("studentdetails", formDetails);
            // this.resetForm();
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
}
}
</script>