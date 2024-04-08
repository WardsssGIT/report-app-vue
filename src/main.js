// main.js
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axiosInstance from './axios/index.js';



const app = createApp(App)
app.use(router);
app.use(store);

app.config.globalProperties.$axios=axiosInstance;
app.mount('#app');

