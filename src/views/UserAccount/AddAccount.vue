<template>
  <div class="container" style="margin-left: 10%; margin-top: 80px;">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2>Create Account</h2>
        <router-link to="/admin/accountlist">
          <button class="btn btn-secondary mb-3" style="margin-right: 100%; margin-top: 20px;">Back</button>
        </router-link>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="department">Department:</label>
            <select class="form-control" id="department" v-model="department" required>
              <option value="">Select Department</option>
              <option value="Department 1">Department 1</option>
              <option value="Department 2">Department 2</option>
              <option value="Department 3">Department 3</option>
              <!-- Add more options for other departments as needed -->
            </select>
          </div>
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" v-model="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
            <div v-if="emailError" class="text-danger">{{ emailError }}</div>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
          </div>
          <button type="submit" class="btn btn-primary mt-3">Create Account</button>
        </form>

        <!-- Success Message -->
        <div v-if="registrationSuccess" class="alert alert-success mt-3">
          User registered successfully!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      department: '',
      name: '',
      email: '',
      password: '',
      emailError: '',
      registrationSuccess: false  // Track registration success
    };
  },
  methods: {
    submitForm() {
      if (this.department && this.name && this.email && this.password) {
        const formData = {
          department: this.department,
          name: this.name,
          email: this.email,
          password: this.password
        };

        axios.post('http://192.168.68.103:7070/api/register', formData)
          .then(response => {
            console.log('User registered successfully:', response.data);
            this.registrationSuccess = true; // Set registration success
            this.emailError = ''; // Reset email error
            // Optionally, perform redirection or show success message
          })
          .catch(error => {
            console.error('Registration failed:', error.response ? error.response.data : error.message);
            if (error.response && error.response.status === 422 && error.response.data.errors) {
              const emailErrors = error.response.data.errors.email;
              if (emailErrors && emailErrors.length > 0 && emailErrors[0] === 'The email has already been taken.') {
                this.emailError = 'The email has already been taken.';
              } else {
                this.emailError = 'Registration failed. Please try again.';
              }
            } else {
              this.emailError = 'The email has already been taken.';
            }
            this.registrationSuccess = false; // Reset registration success
          });
      } else {
        console.error('All fields are required');
        // Optionally, display an error message for empty fields
      }
    }
  }
};
</script>

<style scoped>
/* Add scoped styles as needed */
</style>
