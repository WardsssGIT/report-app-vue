<template>
    <div class="main">
      <div class="input">
        <h1 class="title">Create Report</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group" id="dor">
            <label for="Date_of_report">Date of Report:</label>
            <input class="form" type="date" id="Date_of_report" v-model="report.Date_of_report" required>
            <label for="serialNumber">Ser. No.: N2024ACA002</label>
          </div>
          <div class="form-group">
            <label id="vn" for="Report_name">Report Name:</label>
            <input class="form-control Luke" type="text" id="Report_name" v-model="report.Report_name" required>
            <label for="Report_type">Report Type:</label>
            <input class="form-control" type="text" id="Report_type" v-model="report.Report_type" required>
          </div>
          <div class="form-group">
            <label for="Description">Description:</label>
            <textarea class="form-control" id="Description" v-model="report.Description" required></textarea>
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
          Date_of_report: '',
          Report_name: '',
          Report_type: '',
          Description: '',
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
          Date_of_report: '',
          Report_name: '',
          Report_type: '',
          Description: '',
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
  