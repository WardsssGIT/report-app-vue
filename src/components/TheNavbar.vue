<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success fixed-top"> <!-- Added fixed-top class -->
    <div class="container">
      <img src = "bma.png">
      <router-link class="navbar-brand" to="/">BALIWAG MARITIME ACADEMY</router-link>
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
    };
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    },
  },
}
</script>
