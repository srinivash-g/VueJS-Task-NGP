<template>
    <h1>Student Details</h1>
<form @submit.prevent="insert">
    <label for="name">Name:</label><br>
    <input type="text" v-model="name" required><br>
    <label for="age">Age:</label><br>
    <input type="number" v-model="age" required><br>
    <label for="email">Email id:</label><br>
    <input type="email" v-model="email" required><br>
    <label for="cgpa">CGPA:</label><br>
    <input type="cgpa" v-model="cgpa" required><br>
    <label for="phone">Mobile number:</label><br>
    <input type="number" v-model="phone" required><br><br>
    <button type="submit">{{ editMode ? 'Update' : 'Insert' }}</button>
  </form>
</template>
<script>
export default{
    name:"Forms",
    props: {
    existData: {
      type: Object,
      default: null
    }},
    data(){
        return{
            name:' ',
            age:' ',
            email:' ',
            cgpa:' ',
            phone:' ',
            editMode: false
        }
    },
    watch: {
    existData: {
      immediate: true,
      handler(value) {
        if (value) {
          this.name = value.name;
          this.age = value.age;
          this.email = value.email;
          this.cgpa = value.cgpa;
          this.phone = value.phone;
          this.editMode = true;
        } else {
          this.resetForm();
        }
      }
    }
  },
    methods:{
        insert(){
            const formDetails={
            name:this.name,
            age:this.age,
            email:this.email,
            cgpa:this.cgpa,
            phone:this.phone}
            if (this.editMode)
            {
            this.$emit("editData", formDetails);
            } 
            else 
            {
            this.$emit("datavalues", formDetails);
            this.resetForm();
            }},
             resetForm() {
            this.name = "";
            this.age = "";
            this.email = "";
            this.cgpa = "";
            this.phone = "";
            this.editMode = false;
    }
        }
    }
</script>
