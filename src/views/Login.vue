<template>
  <div class="login-page">
    <div class="login-container">
      <div class="logo">
        <img src="../assets/bma.png" alt="Logo" class="logo-image">
      </div>
      <h1 class="page-title">REPORTING TOOL</h1>
      <p class="login-label">Login</p>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <div class="alert alert-success" v-if="successMessage">{{ successMessage }}</div>
      <form class="login-form" @submit.prevent="onLogin">
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" placeholder="Enter your email" class="input-field" v-model.trim="userData.email">
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" placeholder="Enter your password" class="input-field" v-model.trim="userData.password">
          <div class="error" v-if="errors.password">{{ errors.password }}</div>
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import { LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '../store/storeconstants';

export default {
  name: 'LoginPage',
  data() {
    return {
      userData: {
        email: '',
        password: ''
      },
      errors: {},
      error: '',
      successMessage: ''
    };
  },
  methods: {
    ...mapActions('auth', {
      login: LOGIN_ACTION
    }),
    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION
    }),
    async onLogin() {
      // Reset error messages
      this.error = '';
      this.successMessage = '';
      this.errors = {};

      // Validate email and password
      if (!this.userData.email) {
        this.errors.email = 'Email is required.';
      }
      if (!this.userData.password) {
        this.errors.password = 'Password is required.';
      }

      // If there are validation errors, do not proceed with login
      if (Object.keys(this.errors).length > 0) {
        return;
      }

      try {
        this.showLoading(true); // Show loading spinner
        
        const data = {
          email: this.userData.email,
          password: this.userData.password
        };

        // Call Vuex action to perform login
        await this.login(data);

        // Clear form fields on successful login
        this.userData.email = '';
        this.userData.password = '';

        // Display success message and redirect after a brief delay
        this.successMessage = 'Login successful! Redirecting...';
        setTimeout(() => {
          this.$router.push('/admin/dashboard');
        }, 1000); // Redirect after 1 second
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.error = 'Invalid email or password. Please try again.';
        } else {
          this.error = 'Invalid email or password. Please try again.';
        }
      } finally {
        this.showLoading(false); // Hide loading spinner
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  margin-top: 1.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 30px);
}

.login-container {
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 400px;
  background-color: #fff;
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

.login-label {
  color: #555;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
}

.login-form {
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
  width: calc(100% - 24px);
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 16px;
  text-align: left;
}

.input-field:focus {
  outline: none;
  border-color: #087f23;
}

.error {
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
}

.login-button {
  padding: 14px 24px;
  background-color: #087f23;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #005711;
}

.alert-danger {
  color: #ff0000;
}

.alert-success {
  color: #008000;
  margin-top: 10px;
}
</style>
