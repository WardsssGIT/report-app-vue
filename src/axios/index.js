import axios from 'axios';

//set baseURL globally for all request
const prod='http://report.app/api/'
const testing ='http://192.168.100.24:8080/api/'
axios.defaults.baseURL = process.env.NODE_ENV === 'production'? prod : testing;
//create an instance of Axios with the default configurations
const axiosInstance = axios.create();

export default axiosInstance;