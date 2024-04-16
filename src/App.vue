<template>
  <the-loader v-if="showLoading"></the-loader>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
//import { AUTO_LOGIN_ACTION } from './store/storeconstants';
import { defineAsyncComponent } from 'vue';

const TheLoader = defineAsyncComponent(() =>  import('./components/TheLoader.vue'));



export default {
  name: 'App',
  computed:{
    ...mapState({
      showLoading: state => state.showLoading
    })
  },
  components:{
    TheLoader
  },
  created(){
    //this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
