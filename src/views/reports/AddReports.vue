<template>
  <div class="Make-Report" style="margin-left: 15%;">
    <!-- Content for Make Report -->
    <div class="container initial-setting-container">
      <!-- Back Button -->
      <router-link to="/Reports">
        <button class="btn btn-secondary mb-3" style="margin-right: 100%; margin-top: 20px;">Back</button>
      </router-link>

      <div class="initial-setting">
        <!-- Banner -->
        <div class="banner">
          <h2>Make Report</h2>
        </div>

        <!-- Form Inputs -->
        <div class="form-group">
          <label for="Date_of_report">Date of Report:</label>
          <input type="date" class="form-control" id="Date_of_report" v-model="report.Date_of_report" required>
          <small class="form-text text-muted">Ser. No.: N2024ACA002</small>
        </div>
        <div class="form-group">
          <label for="Report_name">Report Name:</label>
          <input type="text" class="form-control" id="Report_name" v-model="report.Report_name" required>
        </div>
        <div class="form-group">
          <label for="Report_type">Report Type:</label>
          <input type="text" class="form-control" id="Report_type" v-model="report.Report_type" required>
        </div>
        <div class="form-group">
          <label for="Description">Description:</label>
          <textarea class="form-control" id="Description" rows="5" v-model="report.Description" required></textarea>
        </div>
        <div class="form-group">
          <label for="Department_involved">Department Involved:</label>
          <input type="text" class="form-control" id="Department_involved" v-model="report.Department_involved" required>
        </div>
        

        <!-- Error Message -->
        <div v-if="submitError" class="alert alert-danger">{{ submitError }}</div>

        <!-- Save and Submit Buttons -->
        <div class="form-group mt-3"> <!-- Added mt-3 class for margin-top -->
          <button type="button" class="btn btn-success" @click="submitForm">Submit</button> <!-- Changed type to "button" -->
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MakeReport',
  data() {
    return {
      report: {
        Date_of_report: '',
        Report_name: '',
        Report_type: '',
        Description: '',
        Department_involved: '',
      },
      submitError: ''
    };
  },

  methods: {
    submitForm() {
  // Check if all required fields are filled
  for (let key in this.report) {
    if (!this.report[key]) {
      this.submitError = 'Please fill out all fields.';
      return;
    }
  }

  axios.post('http://127.0.0.1:8000/api/reports-upload', this.report)
    .then(() => {
      this.resetForm();
      // If you have a method to fetch updated forms, call it here
    })
    .catch(error => {
      if (error.response && error.response.data && error.response.data.message) {
        console.log(error.response.data);
        this.submitError = error.response.data.message;
      } else {
        this.submitError = 'An error occurred.';
      }
    });
},
    resetForm() { 
      for (let key in this.report) {
        this.report[key] = '';
      }
      this.submitError = '';
    }
  }
};
</script>
