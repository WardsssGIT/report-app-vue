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
          <button type="button" class="btn btn-success" @click="submitForm">Save</button>
          <!-- Changed type to "button" -->
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
  mounted() {
    this.firstLoad(this.$route.params.data)
  },
  methods: {
    firstLoad(data) {
      axios.get('http://192.168.0.105:7070/api/reports/' + data)
        .then(response => {
          const reports = response.data;
          this.report.Date_of_report = reports.report.Date_of_report;
          this.report.Report_name = reports.report.Report_name;
          this.report.Report_type = reports.report.Report_type;
          this.report.Description = reports.report.Description;
          this.report.Department_involved = reports.report.Department_involved;
          console.log(response.data);
        }).catch(error => {
          console.log(error);
        });
      console.log(data);
    },
    submitForm() {
      // Data to be sent
      const data = {
        Date_of_report: this.report.Date_of_report,
        Report_name: this.report.Report_name,
        Report_type: this.report.Report_type,
        Description: this.report.Description,
        Department_involved: this.report.Department_involved,
      };

      axios.put('http://192.168.0.105:7070/api/reports/' + this.$route.params.data, data)
        .then(() => {
          // If successful, clear form fields and any error message
          this.resetForm();
          // Optionally, you can redirect the user or show a success message
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
      // Reset form fields and error message
      for (let key in this.report) {
        this.report[key] = '';
      }
      this.submitError = '';
    }
  }
};
</script>
