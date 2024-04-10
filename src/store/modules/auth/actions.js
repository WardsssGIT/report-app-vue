import SignupValidations from "@/services/SignupValidations";
import { LOGIN_ACTION, SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION } from "@/store/storeconstants";  
import Axios from 'axios';

export default {
  async [LOGIN_ACTION](context, payload) {
    const postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };

    try {
      const response = await Axios.post('http://192.168.100.24:7070/api/login', postData);
      

      //console.log(postData);
      const userData = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        token: response.data.token
      };

      // Save token in localStorage
      localStorage.setItem('userToken', JSON.stringify(userData));

      console.log(userData);

      // Commit mutation to update state with user token data
      context.commit(SET_USER_TOKEN_DATA_MUTATION, userData);

      return userData;

      
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
      throw error;
    }
  },
  async [SIGNUP_ACTION](context, payload) {
    let postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };

    try {
      const response = await Axios.post('http://192.168.100.24:7070/api/register', postData);
      
      const userData = {
        email: response.data.email,
        token: response.data.idToken,
        expiresIn: response.data.expiresIn,
        refreshToken: response.data.refreshToken,
        userId: response.data.localId,
      };

      // Save token in localStorage
      localStorage.setItem('userToken', JSON.stringify(userData));

      // Commit mutation to update state with user token data
      context.commit(SET_USER_TOKEN_DATA_MUTATION, userData);
    } catch (error) {
      // Handle signup error
      let errorMessage = SignupValidations.getErrorMessageFromCode(error.response.data.error.errors[0].message);
      console.error("Signup failed:", errorMessage);
      throw errorMessage;
    }
  },
};
