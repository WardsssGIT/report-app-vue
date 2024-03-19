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
          <h2>View Report</h2>
        </div>

        <!-- Form Inputs -->
        <div class="form-group">
          <label for="dateOfReport">Date of Report:</label>
          <input type="date" class="form-control" id="dateOfReport" v-model="report.dateofreport" :disabled="!editable" required>
          <small class="form-text text-muted">Ser. No.: N2024ACA002</small>
        </div>
        <div class="form-group">
          <label for="vesselName">Report Name:</label>
          <input type="text" class="form-control" id="vesselName" v-model="report.vesselname" :disabled="!editable" required>
        </div>
        <div class="form-group">
          <label for="vesselType">Report Type:</label>
          <input type="text" class="form-control" id="vesselType" v-model="report.reporttype" :disabled="!editable" required>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea class="form-control" id="description" rows="5" v-model="report.description" :disabled="!editable" required></textarea>
        </div>
        <div class="form-group">
          <label for="departmentinvolved">Department Involved:</label>
          <input type="text" class="form-control" id="departmentinvolved" v-model="report.departmentinvolved" :disabled="!editable" required>
        </div>
        <div class="form-group">
          <label for="rank">Position (Optional):</label>
          <input type="text" class="form-control" id="rank" v-model="report.rank" :disabled="!editable">
        </div>
        <div class="form-group">
          <label for="name">Name (Optional):</label>
          <input type="text" class="form-control" id="name" v-model="report.name" :disabled="!editable">
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
        reporttype: '',
        description: '',
        departmentinvolved: '',
        rank: '',
        name: '',
      },
      submitError: ''
    };
  },
  mounted() {
    this.firstLoad(this.$route.params.data)
  },
  methods: {
    firstLoad(data) {
      axios.get('http://127.0.0.1:8000/api/reports/'+data)
        .then(response => {
         const reports = response.data
         this.report.dateofreport = reports.report.dateofreport
         this.report.vesselname = reports.report.vesselname
         this.report.reporttype = reports.report.reporttype
         this.report.description = reports.report.description
         this.report.departmentinvolved = reports.report.departmentinvolved
         this.report.rank = reports.report.rank
         this.report.name = reports.report.name
         console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
      console.log(data)
    },
  }
};
</script>
