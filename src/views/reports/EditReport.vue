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
          <h2>Edit Report</h2>
        </div>

        <!-- Form Inputs -->
        <div class="form-group">
          <label for="dateOfReport">Date of Report:</label>
          <input type="date" class="form-control" id="dateOfReport" v-model="report.dateofreport" required>
          <small class="form-text text-muted">Ser. No.: N2024ACA002</small>
        </div>
        <div class="form-group">
          <label for="vesselName">Report Name:</label>
          <input type="text" class="form-control" id="vesselName" v-model="report.vesselname" required>
        </div>
        <div class="form-group">
          <label for="vesselType">Report Type:</label>
          <input type="text" class="form-control" id="vesselType" v-model="report.vesseltype" required>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea class="form-control" id="description" rows="5" v-model="report.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="departmentinvolved">Department Involved:</label>
          <input type="text" class="form-control" id="departmentinvolved" v-model="report.departmentinvolved" required>
        </div>
        <div class="form-group">
          <label for="rank">Position (Optional):</label>
          <input type="text" class="form-control" id="rank" v-model="report.rank">
        </div>
        <div class="form-group">
          <label for="name">Name (Optional):</label>
          <input type="text" class="form-control" id="name" v-model="report.name">
        </div>

        <!-- Error Message -->
        <div v-if="submitError" class="alert alert-danger">{{ submitError }}</div>

        <!-- Save and Submit Buttons -->
        <div class="form-group mt-3"> <!-- Added mt-3 class for margin-top -->
          <button type="submit" class="btn btn-success" @click="submitForm">Submit</button> <!-- Added ml-2 and mr-2 classes for margin-left and margin-right -->
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
        dateofreport: '',
        vesselname: '',
        vesseltype: '',
        description: '',
        departmentinvolved: '',
        rank: '',
        name: ''
      },
      submitError: ''
    };
  },

  methods: {
    submitForm() {
      for (let key in this.report) {
        if (!this.report[key]) {
          this.submitError = 'Please fill out all fields.';
          return;
        }
      }
        const data ={ 
        dateofreport: this.report.dateofreport,
        vesselname: this.report.vesselname,
        vesseltype: this.report.vesseltype,
        description: this.report.description,
        departmentinvolved: this.report.departmentinvolved,
        rank: this.report.rank,
        name: this.report.name
      }
      console.log(data)
      axios.post('http://127.0.0.1:8000/api/reports-upload', data)
        .then(() => {
          this.resetForm();
          this.fetchForms(); 
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
  
  }
};
</script>
