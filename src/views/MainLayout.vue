<template>
    <TheNavbar />
    <TheSidebar />
    <div class="container mt-3">
        <router-view></router-view>
    </div>

</template>
<script>
import TheSidebar from '@/components/TheSidebar.vue'
import TheNavbar from '@/components/TheNavbar.vue'
export default {
    name: "MainLayout",
    components: {
        TheSidebar,
        TheNavbar
    }
}
</script>
<style scoped>
/* Add custom styles for sidebar */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px;
    background-color: #333;
    color: #ffffff;
    padding-top: 60px;
}

/* Style for active link in sidebar */
.list-group-item.active {
    background-color: #555 !important;
    border-color: #333 !important;
}
</style>