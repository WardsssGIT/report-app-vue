<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success fixed-top" style="padding-top: 0.20rem; padding-bottom: 0.25rem;">
    <a class="navbar-brand" href="#">
      <img src="@/assets/bma.png" width="50" height="50" class="d-inline-block align-middle" alt="">
      <span class="d-inline-block align-middle" style="font-size: 1.5rem;">BALIWAG MARITIME ACADEMY</span>
    </a>
    <div class="container">
      <router-link class="navbar-brand" to="/"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ 'show': navbarOpen }" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(link, index) in navLinks" :key="index">
            <router-link :to="link.url" class="nav-link">{{ link.label }}</router-link>
          </li>
        </ul>
        <!-- Notification Bell -->
        <div class="notification-bell" @click="toggleNotifications">
          <img src="@/assets/bell.png" width="30" height="30" class="d-inline-block align-middle" alt="">
        </div>
      </div>
    </div>

    <!-- Notification Window -->
    <div class="notification-window" v-show="showNotificationWindow">
      <div class="notification-content">
        <h3>Notifications</h3>
        <!-- Add your notification content here -->
        <p>You have 3 new notifications.</p>
        <p>Notification 1: Lorem ipsum dolor sit amet.</p>
        <p>Notification 2: Consectetur adipiscing elit.</p>
        <p>Notification 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      navbarOpen: false,
      showNotificationWindow: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    },
    toggleNotifications() {
      this.showNotificationWindow = !this.showNotificationWindow;
    },
  },
}
</script>

<style scoped>
.notification-bell {
  margin-left: auto;
  margin-right: -2%;
  cursor: pointer;
}

.notification-window {
  position: absolute;
  top: 60px; /* Adjust as needed */
  right: 10px; /* Adjust as needed */
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000; /* Ensure it's above other content */
}

.notification-content {
  max-width: 300px; /* Adjust as needed */
}
</style>
