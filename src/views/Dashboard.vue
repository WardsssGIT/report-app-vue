<template>
    <Navbar/>
    <Sidebar/>
    <RouterView></RouterView>
  </template>
  <script>
  import Navbar from '../components/TheNavbar.vue'
  import Sidebar from '../components/TheSidebar.vue'
  export default {
    name: 'AdminDashboardPage',
    components: {
      Navbar,
      Sidebar,
    },
  }
  </script>
  <style scoped>
  </style>
  