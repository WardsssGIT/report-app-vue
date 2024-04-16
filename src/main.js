// main.js
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axiosInstance from './axios/index.js';
//import { Axios } from 'axios';



const app = createApp(App)
// Axios.interceptors.request.use(config => {
//     console.log(config);
// })
app.use(router);
app.use(store);

app.config.globalProperties.$axios=axiosInstance;
app.mount('#app');

