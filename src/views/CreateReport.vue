<template>
    <div class="main">
      <div class="input">
        <h1 class="title">Create Report</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group" id="dor">
            <label for="dateOfReport">Date of Report:</label>
            <input class="form" type="date" id="dateOfReport" v-model="report.dateOfReport" required>
            <label for="serialNumber">Ser. No.: N2024ACA002</label>
          </div>
          <div class="form-group">
            <label id="vn" for="vesselName">Vessel Name:</label>
            <input class="form-control Luke" type="text" id="vesselName" v-model="report.vesselName" required>
            <label for="vesselType">Vessel Type:</label>
            <input class="form-control" type="text" id="vesselType" v-model="report.vesselType" required>
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <textarea class="form-control" id="description" v-model="report.description" required></textarea>
          </div>
          <div class="form-group">
            <label for="rank">Rank (Optional):</label>
            <input class="form-control" type="text" id="rank" v-model="report.rank">
          </div>
          <div class="form-group">
            <label for="name">Name (Optional):</label>
            <input class="form-control" type="text" id="name" v-model="report.name">
          </div>
          <div class="form-group">
            <button type="save" class="btn btn-save">Save as Temporary</button>
            <button type="submit" class="btn btn-submit">Submit to Company</button>
          </div>
        </form>
      </div>
      <report-table :reports="reports" @removeReport="removeReport"/>
    </div>
  </template>
  
  <script>
  import ReportTable from "./ReportTable.vue";
  
  export default {
    components: {
      ReportTable
    },
    data() {
      return {
        report: {
          dateOfReport: '',
          vesselName: '',
          vesselType: '',
          description: '',
          rank: '',
          name: ''
        },
        reports: []
      };
    },
    methods: {
      submitForm() {
        // Submit form logic
        this.reports.push({ ...this.report });
        // Reset form fields after submission
        this.report = {
          dateOfReport: '',
          vesselName: '',
          vesselType: '',
          description: '',
          rank: '',
          name: ''
        };
      },
      removeReport(index) {
        // Remove report logic
        this.reports.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .input {
    width: 50%;
    margin-bottom: 20px;
  }
  
  .title {
    margin-bottom: 20px;
    text-align: left;
    font-family: 'Arial', sans-serif;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    text-align: left;
  }
  
  input[type="date"],
  input[type="text"],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    margin-right: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-save {
    background-color: #28a745;
    color: white;
  }
  
  .btn-submit {
    background-color: #007bff;
    color: white;
  }
  
  .btn-view,
  .btn-edit,
  .btn-remove {
    background-color: #f8f9fa;
    color: #333;
  }
  
  .btn-view:hover,
  .btn-edit:hover,
  .btn-remove:hover {
    background-color: #e9ecef;
  }
  </style>
  