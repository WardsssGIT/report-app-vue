import axios from 'axios';

//set baseURL globally for all request
const prod='http://report.app/api/'
<<<<<<< HEAD
const testing ='http://192.168.100.24:7070/api'
=======
const testing ='http://192.168.0.105:7070/api/'
>>>>>>> 9845f47867d59dce82d2fe632426034e8142847e
axios.defaults.baseURL = process.env.NODE_ENV === 'production'? prod : testing;
//create an instance of Axios with the default configurations
const axiosInstance = axios.create();

export default axiosInstance;