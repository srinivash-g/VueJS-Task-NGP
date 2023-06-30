<template>
    <div class="student._id">
       <table>
             <tr>
               <th>Student ID</th>
               <th>Student Name</th>
               <th>Roll no</th>
               <th>Department ID</th>
               <th>Update</th>
             </tr>
             <tr v-for="student,index in list" :key="index">
               <td>{{ student.stud_id }}</td>
               <td>{{ student.stud_name }}</td>
               <td>{{ student.roll_no }}</td>
               <td>{{ student.dept_id }}</td>
               <td>
            <button @click="editStudent(index)">Edit</button>
           </td>
             </tr>
         </table><br><br>
         <RouterLink to="/adonisinsert">Insert new Student</RouterLink>
    </div>
</template>
<script>
import axios from 'axios';

        export default{
            data:function(){
                return{
                   list:[]
                }
            },
            mounted() {
    axios
    .get('http://localhost:3333/Displayall')
      .then(response => {
        this.list = response.data.data;
        console.log(response.data.data);
    })
  },methods:{
    editStudent(index) {
              this.editIndex = index;
              this.editFormData = { ...this.students[index] };
         }
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
</style>


