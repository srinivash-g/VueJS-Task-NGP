<template><br>
<!-- Drop Down  -->
  <div class="depchoose">
    <select v-model="selectedDept" @click="getSelectedDept">
      <option value="" disabled selected>Please select a department</option>
      <option v-for="dept in info" :key="dept.dep_id" :value="dept.dep_id">{{ dept.dep_name }}</option>
      <option value="all">Display All</option>
    </select>&nbsp;
    <br><br>
<!-- search value -->
  <div>
  <input type="text" v-model="searchQuery" placeholder="Search" @input="search">
  <button @click="search">Search</button>
  </div>
  </div><br><br>
  <h1>Hello {{ user }}</h1><br>
  <!-- Table Display -->
<div class="tab">
  <table id="dataTable">
    <th v-for="key in filteredKeys" :key="index">{{ key }}</th>
    <th>Update</th>
    <th>Delete</th>
    <tr v-for="(student,index) in list" :key="student.id">
        <td v-for="key in filteredKeys" :key="key">{{ student[key] }}</td>
        <td>
            <button @click="editStudent(index)">Edit</button>
           </td>
           <td>
            <button @click="confirmDelete(index)">Delete</button>
           </td>
      </tr>
</table>
<p v-if="list.length==0">{{ emptymessage }}</p>
</div>
</template>
<script>
import axios from 'axios'
import eventBus from '@/Plugins/event-bus';
export default{
    name:"GlobalTab",
    data:function(){
                return{
                   list:[],
                   keys:[],
                   filteredKeys:[],
                   editFormData: [],
                   baseurl: import.meta.env.VITE_APP_BASE_URL,
                   selectedDept: null,
                   info:[],
                   user:"Guest",
                   searchQuery: '',
                   emptymessage:null
                }
            },
 mounted()
     {
      const savedUsername = localStorage.getItem('username');
      if (savedUsername) {
      this.user = savedUsername;
      }
      this.emitter.on("reload",(event) => {
      this.fetch();
      })
      },
  created() { 
      this.fetch(),
      this.getDeptDetails()
           
  },
  methods:{
      editStudent(index) {
        this.editFormData = { ...this.list[index] };  
        console.log(this.editFormData)         
        this.emitter.emit("currentvalue", this.editFormData);
        console.log(this.editFormData)
        this.fetch()  
      },
      search() {
        if(this.selectedDept=='all' || this.selectedDept==null){
        axios
             .get(`${this.baseurl}dispbysearch/?searchQuery=${this.searchQuery}`)
             .then(response => {
              this.list = response.data;
              if(this.list.length==0){this.emptymessage="No record found in the table"}
              console.log(this.list)
              console.log(this.emptymessage)
              this.keys = Object.keys(this.list[0])
              this.filteredKeys = this.keys.filter(key => key !== 'created_at' && key !== 'updated_at');
             
            })}
else{
  axios
             .get(`${this.baseurl}dispbysearchandid/${this.selectedDept}?searchQuery=${this.searchQuery}`)
             .then(response => {
              this.list = response.data;
              if(this.list.length==0){this.emptymessage="No record found in the table"}
              this.keys = Object.keys(this.list[0])
              this.filteredKeys = this.keys.filter(key => key !== 'created_at' && key !== 'updated_at');
})
    
  }},
    confirmDelete(index) {
    if (confirm("Do you want to delete this student record?")) {
      this.deleteStudent(index);
    }},
         deleteStudent(index) {
            this.editFormData = { ...this.list[index] };
            axios
             .delete(`${this.baseurl}deletebyid/${this.editFormData.stud_id}`)
             .then((response) => this.fetch())
            
  }, getSelectedDept() {
    if(this.selectedDept!='all'){
    axios
             .get(`${this.baseurl}dispalldept/${this.selectedDept}`)
             .then(response => {
              this.list = response.data;
              this.keys = Object.keys(this.list[0])
              this.filteredKeys = this.keys.filter(key => key !== 'created_at' && key !== 'updated_at');
})}
else{
 this.fetch() 
}
  },
  getDeptDetails(){
    axios
             .get(`${this.baseurl}dispdept`)
             .then(response => {
              this.info = response.data.data;          
})
  },
fetch(){
    axios
    .get(`${this.baseurl}getall`)
      .then(response => {
        this.list = response.data;
        this.keys = Object.keys(this.list[0])
        this.filteredKeys = this.keys.filter(key => key !== 'created_at' && key !== 'updated_at');
})
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
  margin-top: 20px; 
}
.data{
    margin-left: 100px;
}
.depchoose{
    margin-left: 100px;
}
</style>