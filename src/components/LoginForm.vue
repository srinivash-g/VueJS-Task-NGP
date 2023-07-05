<template>
    <div class="login-container">
      <input type="text" v-model="username" placeholder="Username" class="login-input" >
      <input type="password" v-model="password" placeholder="Password" class="login-input">
      <button @click="localuser" class="login-button">Login</button>
      <p>{{ successMessage }}</p>
      <!-- <p class="saved-username">Saved username: {{ savedUsername }}</p> -->
    </div>
  </template>
  
  <script>
  export default {
    name:"login",
    data() {
      return {
        username: '',
        password: '',
        savedUsername: '',
        successMessage:''
      };
    },
    mounted() {
      //this.savedUsername = localStorage.getItem('username') || '';
      
    },created(){
        localStorage.setItem('username','')
    },
    methods: {
      localuser() {
        if(this.username){
        localStorage.setItem('username',this.username)
        this.savedUsername=this.username
        this.successMessage=`Hello ${this.username} Logged in Successfully`
        this.$router.push('/global');
        }
        else{
        alert('Please enter a username.');
        return;
        }
      }
    }
  };
  </script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-input {
  padding: 10px;
  margin: 5px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.saved-username {
  margin-top: 10px;
  font-weight: bold;
}
</style>
  