<template>
    <Navbar/>
    <Announcement/>
    <Sidebar/>
    <RouterView></RouterView>
  </template>
  <script>
  import Announcement from './Announcement.vue';
  import Navbar from '../components/TheNavbar.vue'
  //import Sidebar from '../components/TheSidebar.vue'
  export default {
    name: 'DashboardPage',
    components: {
      Navbar,
      //Sidebar,
      Announcement
    },
  }
  </script>
  <style scoped>
  </style>
  