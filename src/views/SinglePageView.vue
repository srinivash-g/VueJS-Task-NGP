<template>
    {{ hello }}
<GlobalForm @editData="updateStudent" @studentdetails="dbinsert" /><br><br>
<GlobalTab/>
<!-- <Department/> -->
</template>
<script>
import GlobalTab from '@/components/GlobalTable.vue';
import GlobalForm from '@/components/GlobalForm.vue';
import Department from '@/components/DepartmentFilter.vue';
import axios from 'axios';
export default {
    components:{
        GlobalTab,
        GlobalForm,
        Department
    },
}
</script>


