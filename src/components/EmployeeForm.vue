<template>
    <h1>Employee Details</h1>
    <form @submit.prevent="validate">
      <label for="name">Employee Name:</label><br>
      <input type="text" v-model="name" required><br>
      <label for="age">Age:</label><br>
      <input type="text" v-model.number="age"><br>
      <label for="department">Department:</label><br>
      <input type="text" v-model="dept" required><br>
      <label for="salary">Salary:</label><br>
      <input type="text" v-model.number="sal" v-salary-input maxlength="15"><br>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    name: "EmpForm",
    data() {
      return {
        name: "",
        age: null,
        dept: "",
        sal: null
      };
    },
    methods: {
      validate() {
        console.log("Name (type):", typeof this.name);
        console.log("Age (type):", typeof this.age);
        console.log("Department (type):", typeof this.dept);
        console.log("Salary (type):", typeof this.sal);
  
        // Continue with form submission or additional validation...
      }
    }
  };
  </script>
  