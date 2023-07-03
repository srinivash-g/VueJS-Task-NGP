<template>
<GlobalForm @editData="updateStudent" @studentdetails="dbinsert" @currentdata="change" :existData="editFormData"/><br><br>
<GlobalTab/>
</template>
<script>
import GlobalTab from '@/components/GlobalTable.vue';
import GlobalForm from '@/components/GlobalForm.vue';
import axios from 'axios';
export default {
    components:{
        GlobalTab,
        GlobalForm
    },
    data(){
        return {
            students:{},
            successMessage:"",
        }
    },mounted()
    {
    this.loadData();
    },
    methods:{
        dbinsert(data){
        this.students = { ...data };
        console.log(this.students);
        this.loadData();
        },
        loadData(){
        axios
    .post('http://localhost:3333/insertstudent',this.students)
    .then((response) => console.log(response))
    this.successMessage = "Successfully Inserted."
        },
        updateStudent(data) {
         this.students[this.editIndex] = data;
          this.editFormData = null;
       },
       change(data){
        editFormData=data   
       }
       
        // getData(){
        // axios
    // .get('http://localhost:3333/Displayall')
    //   .then(response => {
    //     this.list = response.data.data;
    //     this.keys = Object.keys(this.list[0])
    //     this.filteredKeys = this.keys.filter(key => key !== 'created_at' && key !== 'updated_at');
    //     }
    //     )}
    },
}
</script>


