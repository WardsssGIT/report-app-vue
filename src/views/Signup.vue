<template>
  <div class="signup-page">
    <div class="signup-container">
      <div class="logo">
        <img src="@/assets/bma.png" alt="Logo" class="logo-image">
      </div>
      <h1 class="page-title">REPORTING TOOL</h1>
      <p class="signup-label">Sign Up</p>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <form class="signup-form" @submit.prevent="registerUser">
        <div class="form-group">
          <label for="name" class="form-label">Name</label>
          <input v-model.trim="name" placeholder="Enter your name" class="input-field">
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input v-model.trim="email" placeholder="Enter your email" class="input-field">
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <div class="password-input">
            <input v-model.trim="password" :type="showPassword ? 'text' : 'password'" placeholder="Enter your password"
              class="input-field">
            <button type="button" class="show-password-button" @click="toggleShowPassword">
              <i :class="['fas', showPassword ? 'fa-eye-slash' : 'fa-eye']"></i>
            </button>
          </div>
          <div class="error" v-if="errors.password">{{ errors.password }}</div>
        </div>
        <button type="submit" class="signup-button">Sign Up</button>
      </form>
      <div class="login-section">
        <p>Already have an account? <router-link to="/" class="login-link">Login</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { LOADING_SPINNER_SHOW_MUTATION } from '@/store/storeconstants';
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
  name: 'SignupPage',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: '',
      errors: {},
      showPassword: false,
    };
  },
  methods: {
    ...mapMutations({
      showLoading:LOADING_SPINNER_SHOW_MUTATION
    }),
    async registerUser() {
      try {
        this.showLoading(true); // Trigger Vuex mutation to show loading spinner

        await axios.post('register', {
          department: this.name,
          name: this.name,
          email: this.email,
          password: this.password
        });

        // Assuming the API response contains a 'token' field
        // const token = response.data.token;
        // You can save this token in Vuex or localStorage for future authenticated requests

        this.error = '';
        this.errors = {};
        this.name = '';
        this.email = '';
        this.password = '';

        this.showLoading(false); // Trigger Vuex mutation to hide loading spinner

        alert('User registered successfully!');
      } catch (error) {
        if (error.response) {
          // Server responded with a status code outside of 2xx range
          this.error = error.response.data.error || 'An error occurred while registering the user.';
          this.errors = error.response.data.errors || {};
        } else {
          // Request was made but no response was received
          this.error = 'An error occurred while registering the user.';
        }

        this.showLoading(false); // Trigger Vuex mutation to hide loading spinner
      }
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 30px);
  margin-top: 1.5%;
}

.signup-container {
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 400px;
  background-color: #fff;
}

.signup-label {
  font-size: 20px;
  color: #555;
  text-align: center;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
}

.logo {
  text-align: center;
  margin-bottom: 20px;
}

.logo-image {
  width: 120px;
}

.page-title {
  font-family: 'Merriweather', serif;
  font-size: 24px;
  margin-bottom: 20px;
  color: #087f23;
  text-align: center;
}

.signup-form {
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}

.input-field {
  padding: 12px;
  width: 100%;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 16px;
}

.input-field:focus {
  outline: none;
  border-color: #087f23;
}

.signup-button {
  padding: 14px 24px;
  background-color: #087f23;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

.signup-button:hover {
  background-color: #005711;
}

.login-section {
  text-align: center;
  margin-top: 16px;
}

.login-link {
  color: #087f23;
  text-decoration: none;
  font-size: 16px;
}

.login-link:hover {
  text-decoration: underline;
}

.p {
  font-size: 16px;
}

.password-input {
  position: relative;
}

.show-password-button {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #087f23;
  cursor: pointer;
}

.show-password-button i {
  font-size: 18px;
}
</style>
