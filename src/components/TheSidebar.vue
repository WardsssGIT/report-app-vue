<template>
  <div class="sidebar">
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in sidebarItems" :key="index">
        <router-link :to="item.url">{{ item.label }}</router-link>
      </li>
    </ul>
    <button class="logout-button" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "TheSideBar",
  data() {
    return {
      sidebarItems: [
        { label: 'Dashboard', url: '/admin/dashboard' },
        { label: 'Reports', url: '/admin/reportsform' },
      ],
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  position: relative; /* Required for absolute positioning of the button */
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

.logout-button {
  position: absolute;
  bottom: 10px;
  left: 20%;
  transform: translateX(-50%);
  padding: 8px 16px; 
  background-color: #f00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px; 
}
</style>
