<template>
  <div class="login-page">
    <div class="login-container">
      <div class="logo">
        <img src="../assets/bma.png" alt="Logo" class="logo-image">
      </div>
      <h1 class="page-title">REPORTING TOOL</h1>
      <p class="login-label">Login</p>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <form class="login-form" @submit.prevent="onLogin">
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" placeholder="Enter your email" class="input-field" v-model.trim="email">
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" placeholder="Enter your password" class="input-field"
            v-model.trim="password">
          <div class="error" v-if="errors.password">{{ errors.password }}</div>
        </div>
        <div class="additional-options">
          <label for="remember-me" class="remember-checkbox" style="margin-top: 5px;">
            <input id="remember-me" type="checkbox"> Remember Me
          </label>
          <span>Don't have an account? <router-link to="/register" class="signup-link">Register</router-link></span>
        </div>
        <button type="submit" class="login-button" style="margin-top: 10px;">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'; // Import mapMutations and mapActions
import SignupValidations from '../services/SignupValidations';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errors: [],
      error: '',
    };
  },
  methods: {
    ...mapMutations({
      setAutoLogout: 'SET_AUTO_LOGOUT_MUTATION', 
      setUserTokenData: 'SET_USER_TOKEN_DATA_MUTATION',
    }),
    ...mapActions([ 'login user' ]), // Map the login action
    async onLogin() {
      let validations = new SignupValidations(
        this.email,
        this.password,
      );

      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
      this.error = '';

      try {
        // Dispatch the login action
        await this.Login({ email: this.email, password: this.password });

        // Redirect user
        this.$router.push('/dashboard');
      } catch (error) {
        // Handle error
        this.error = error.message || 'An error occurred while logging in.';
      }
    },
  },
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

.remember-checkbox {
  margin-right: 10px;
  font-size: 16px;
}

.additional-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.signup-link {
  color: #087f23;
  text-decoration: none;
  font-size: 16px;
}

.signup-link:hover {
  text-decoration: underline;
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

p {
  font-size: 16px;
}

.alert-danger {
  color: #ff0000;
}
</style>
