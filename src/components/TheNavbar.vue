<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success fixed-top" style="padding-top: 0.20rem; padding-bottom: 0.25rem;"> <!-- Added fixed-top class -->
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
