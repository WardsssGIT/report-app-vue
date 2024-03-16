<template>
  <div class="Make-Report" style="margin-left: 15%;">
    <!-- Content for Make Report -->
    <div class="container initial-setting-container">
      <!-- Back Button -->
      <router-link to="/">
        <button class="btn btn-secondary mb-3" style="margin-right: 100%; margin-top: 20px;">Back</button>
      </router-link>

      <div class="initial-setting">
        <!-- Banner -->
        <div class="banner">
          <h2>Make Report</h2>
        </div>

        <!-- Date of Report -->
        <div class="form-group">
          <label for="dateOfReport">Date of Report:</label>
          <input type="date" class="form-control" id="dateOfReport" v-model="report.dateOfReport" required>
          <small class="form-text text-muted">Ser. No.: N2024ACA002</small>
        </div>

        <!-- Vessel Name and Type -->
        <div class="form-group">
          <label for="vesselName">Vessel Name:</label>
          <input type="text" class="form-control" id="vesselName" v-model="report.vesselName" required>
          <label for="vesselType">Vessel Type:</label>
          <input type="text" class="form-control" id="vesselType" v-model="report.vesselType" required>
        </div>

        <!-- Description -->
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea class="form-control" id="description" rows="5" v-model="report.description" required></textarea>
        </div>

        <!-- Rank and Name -->
        <div class="form-group">
          <label for="rank">Rank (Optional):</label>
          <input type="text" class="form-control" id="rank" v-model="report.rank">
        </div>
        <div class="form-group">
          <label for="name">Name (Optional):</label>
          <input type="text" class="form-control" id="name" v-model="report.name">
        </div>

        <!-- Save and Submit Buttons -->
        <div class="form-group mt-3"> <!-- Added mt-3 class for margin-top -->
          <button type="submit" class="btn btn-success">Submit to Company</button> <!-- Added ml-2 and mr-2 classes for margin-left and margin-right -->
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MakeReport',
  data() {
    return {
      report: {
        dateOfReport: '',
        vesselName: '',
        vesselType: '',
        description: '',
        rank: '',
        name: ''
      }
    };
  },
  methods: {
    saveTemporary() {
      // Save logic
    },
    submitForm() {
      // Submit logic
    }
  }
};
</script>
