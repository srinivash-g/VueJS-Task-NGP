<template>
    <div class="formview">
      <Forms @datavalues="fetched" @editData="updateStudent" :existData="editFormData"/>
    <!-- </div>
    <div class="tableview"> -->
      <br>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>CGPA</th>
            <th>Phone</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td :title="student.name" >{{ $filters.nameLimit(student.name,10) }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.email }}</td>
            <td :class="getMarkClass(student.cgpa)">{{ student.cgpa }}</td>
            <td>{{ student.phone }}</td>
            <td>
            <button @click="editStudent(index)">Edit</button>
           </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import Forms from '@/components/Forms.vue';
  export default{
  components:{
    Forms
  },
data(){
    return{
        students:[],
        editFormData: null
    };
},
    methods:{
        fetched(data){
        this.students.push(data);
        },
        updateStudent(data) {
         this.students[this.editIndex] = data;
          this.editFormData = null;
       },
        getMarkClass(cgpa){
            return cgpa < 7 ? 'red-text' : 'green-text';
        },
        editStudent(index) {
              this.editIndex = index;
              this.editFormData = { ...this.students[index] };
         },
        
         }
}
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #fa0a0a;
  }
  
  tr:hover {
    background-color: #091cec;
  }
  
  .red-text {
    color: red;
  }
  
  .green-text {
    color: green;
  }
  .formview{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80vh; 
  margin-right: 400px; 
  }
  </style>
  