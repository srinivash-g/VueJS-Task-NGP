<template>
<!-- <h1>{{students}}</h1> -->
<!-- <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com"> -->
<div class="tab">
<table>
    <th v-for="key in filteredKeys" :key="index">{{ key }}</th>
    <th>Update</th>
    <th>Delete</th>
    <tr v-for="student in list" :key="student.id">
        <td v-for="key in filteredKeys" :key="key">{{ student[key] }}</td>
        <td>
            <button @click="editStudent(index)">Edit</button>
           </td>
           <td>
            <button @click="deleteStudent(index)">Delete</button>
           </td>
      </tr>
</table>
</div>
</template>
<script>
import axios from 'axios'
export default{
    name:"GlobalTab",
    data:function(){
                return{
                   list:[],
                   keys:[],
                   filteredKeys:[],
                }
            },
    mounted() {
    axios
    .get('http://localhost:3333/Displayall')
      .then(response => {
        this.list = response.data.data;
        this.keys = Object.keys(this.list[0])
        this.filteredKeys = this.keys.filter(key => key !== 'created_at' && key !== 'updated_at');


})
    },methods:{
      editStudent(index) {
            
         },
         deleteStudent(index) {
            
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
  .tab{
    margin-right: 400px;
  }
  .space {
  margin-top: 20px; /* Adjust the value as per your requirement */
}
.data{
    margin-left: 100px;
}
 

</style>