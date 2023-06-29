<template>
    <div class="student">
       <table>
             <tr>
               <th>Name</th>
               <th>Age</th>
               <th>Course</th>
               <th>CGPA</th>
             </tr>
             <tr v-for="student in stu_details" :key="student.name">
               <td>{{ student.name }}</td>
               <td>{{ student.age }}</td>
               <td>{{ student.course }}</td>
               <td>{{ student.cgpa }}</td>
             </tr>
         </table>

    </div>
</template>
<script>
        export default{
            data:function(){
                return{
                    stu_details:[{name:"srinivash",
                                  age:20,
                                  course:"Msc Software systems",
                                  cgpa:8.0},
                                {name:"kavin",
                                  age:20,
                                  course:"Msc Data science",
                                  cgpa:8.1}]
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
.student {
    
            margin: 0 auto;
        
        }
</style>

