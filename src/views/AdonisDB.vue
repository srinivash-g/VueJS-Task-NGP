<template>
    <div class="studtable">
       <table>
             <tr>
               <th>Student ID</th>
               <th>Student Name</th>
               <th>Roll no</th>
               <th>Department ID</th>
               <th>Update</th>
               <th>Delete</th>
             </tr>
             <tr v-for="student,index in list" :key="index">
               <td>{{ student.stud_id }}</td>
               <td>{{ student.stud_name }}</td>
               <td>{{ student.roll_no }}</td>
               <td>{{ student.dept_id }}</td>
               <td>
            <button @click="editStudent(index)">Edit</button>
           </td>
           <td>
            <button @click="deleteStudent(index)">Delete</button>
           </td>
             </tr>
         </table><br><br>
         <RouterLink to="/adonisinsert">Insert new Student</RouterLink>
         <!-- <Global/> -->
    </div>
</template>
<script>
import axios from 'axios';
//import Global from '@/components/GlobalTable.vue';
        export default{
            data:function(){
                return{
                   list:[]
                }
            },
            components:{
              //Global
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
        this.$router.push({
        name: 'adonisupdate',
        query: {
          editIndex: index,
          editFormData: JSON.stringify(this.list[index])
        }
      });
         },
         deleteStudent(index) {
              this.editIndex = index;
              this.editFormData = { ...this.list[index] };
              axios
             .delete(`http://localhost:3333/deletebyid/${this.editFormData.stud_id}`)
             .then((response) => console.log(response))
             window.location.reload();
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
  .studtable{
    margin-right: 300px;
  }
</style>


