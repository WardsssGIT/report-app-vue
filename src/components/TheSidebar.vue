<template>
  <div class="sidebar">
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in sidebarItems" :key="index">
        <router-link :to="item.url">{{ item.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheSideBar",
  data() {
    return {
      sidebarItems: [
        { label: 'Dashboard', url: '/dashboard' },
        { label: 'Reports', url: '/Reports' },
      ],
      
    };
  },
  
  methods: {
    logout() {
      this.$router.push({ name: 'Login' });
    },
    toggleDepartments() {
      this.showDepartments = !this.showDepartments;
    },
    toggleForms() {
      this.showForms = !this.showForms;
    },
    togglePolicy() {
      this.showPolicy = !this.showPolicy;
    },
    toggleProcedures() {
      this.showProcedures = !this.showProcedures;
    },
    toggleInstructions() {
      this.showInstructions = !this.showInstructions;
    },
    toggleRecords() {
      this.showRecords = !this.showRecords;
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 200px;
}

.list-group {
  padding: 0;
  list-style-type: none;
}

.list-group-item {
  background-color: #333;
  color: white;
  border: none;
}

.list-group-item a {
  display: block;
  padding: 10px; 
  text-decoration: none;
  color: white;
}

.list-group-item a:hover {
  background-color: #555; 
}
</style>