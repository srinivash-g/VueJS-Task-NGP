<template>
    <AdonisForms @studentdetails="dbinsert" @editData="updateStudent" :existData="editFormData"/><br>
    <p>{{ successMessage }}</p><br>
    <div v-if="successMessage">
    <RouterLink to="/adonis">Display Student Records</RouterLink>
    </div>
<!-- <AdonisForms/> -->
</template>
<script>
import AdonisForms from '@/components/AdonisForms.vue';
import axios from 'axios';
export default {
    components:{
        AdonisForms,
        Global
    },
    data(){
        return {
            students:{},
            successMessage:"",
        }
    },
    methods:{
        updateStudent(data) {
        this.students = { ...data };
        console.log(this.students)
        axios
        .put(`http://localhost:3333/updatedetails/${this.editFormData.stud_id}`,this.students)
      .then((response) => console.log(response))
      this.successMessage = "Successfully updated."
      this.editFormData = null; 
    },
    },
  created() {
    const editIndex = this.$route.query.editIndex;
    const editFormData = JSON.parse(this.$route.query.editFormData);
    
    // Use the received data as needed
    this.editIndex = editIndex;
    this.editFormData = editFormData;
    this.students=editFormData
  },
}
</script>