<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'




</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="/public/favicon.ico" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="NGP Websmart" /> -->
      <Forms/>
      <nav class="sidenav">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/student">Student Details</RouterLink>
        <RouterLink to="/string">String operation</RouterLink>
        <RouterLink to="/stringm">String Method operation</RouterLink>
        <RouterLink to="/studentform">Add Student Details</RouterLink>
        <RouterLink to="/adonis">Show Student Table(DB)</RouterLink>
        <RouterLink to="/global">Global Table</RouterLink>
        <RouterLink to="/employee">Employee(Custom Directive)</RouterLink>

      </nav>
    <!-- </div> -->
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


.sidenav {
            height: 100%;
            width: 200px;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #333;
            overflow-x: hidden;
            padding-top: 20px;
        }
        
        .sidenav a {
            padding: 6px 8px 6px 16px;
            text-decoration: none;
            font-size: 16px;
            color: #fff;
            display: block;
        }
        
        .sidenav a:hover {
            background-color: #ddd;
            color: #000;
        }
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
