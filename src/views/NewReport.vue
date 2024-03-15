<!-- NewReport.vue -->
<template>
  <div class="Make-Report">
    <!-- Content for Make Report -->
    <div class="initial-setting-container">
      <!-- Back Button -->
      <router-link to="/">
        <button class="back-button">Back</button>
      </router-link>

      <div class="initial-setting">
        <!-- Banner -->
        <div class="banner">
          <h2>Make Report</h2>
        </div>

        <!-- User Name -->
        <div class="user-info">
          <label for="userName">User Name:</label>
          <input type="text" id="userName" v-model="userNameValue" />
        </div>

        <!-- User ID No -->
        <div class="user-info">
          <label for="userId">User ID No:</label>
          <input type="text" id="userId" v-model="userIdValue" />
        </div>
        <!-- Department Name -->
        <div class="user-info">
          <label for="department">Department Name:</label>
          <select id="department" v-model="departmentValue">
            <option value="option1">Administration</option>
            <option value="option2">IT Department</option>
            <option value="option3">General Education Department</option>
            <option value="option4">SHS Department</option>
            <option value="option5">BSMarE Department</option>
            <option value="option6">BSMT Department</option>
            <option value="option7">Registrar</option>
          </select>
        </div>


              <!-- Report Contents -->
      <div class="Report_Contents">
        <label for="userId">Report Contents:</label>
        <textarea id="Rcontent" v-model="ReportContent"></textarea>
      </div>


        <!-- Submit Button -->
        <div class="submit-container">
          <button class="submit-button" @click="submitForm">Submit</button>
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
      userNameValue: '',
      userIdValue: '',
      departmentValue: 'option1', // Default value for the dropdown
    };
  },
  methods: {
    submitForm() {
      // Pass the data to HelloWorld.vue using router params
      this.$router.push({
        name: 'HelloWorld',
        params: {
          userName: this.userNameValue,
          userIDno: this.userIdValue,
          departmentName: this.departmentValue,
        },
      });
    },
  },
};
</script>

<style scoped>
/* Add styles for the Make Report component if needed */
.Make-Report {
  margin: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Add styles for the back button */
.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #0056b3;
}

/* Add styles for the Initial Setting component */
.initial-setting-container {
  margin: 20px;
}

/* Add styles for the Initial Setting component */
.initial-setting {
  margin: 20px auto;
  max-width: 400px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.Report_Contents textarea {
  width: 100%;
  height: 100px; /* Adjust the initial height according to your preference */
  padding: 8px; /* You can adjust the padding as needed */
  box-sizing: border-box; /* Keep the box-sizing property for consistent sizing */
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: vertical; /* Allow vertical resizing */
}

/* Add styles for the banner */
.banner {
  background-color: darkgreen;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
}

.banner h2 {
  margin: 0;
}

/* Add styles for the user-info div */
.user-info {
  margin-bottom: 15px;
}

/* Add styles for labels */
label {
  display: block;
  margin-bottom: 5px;
}

/* Add styles for input fields and dropdown */
input,
select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
}

/* Add styles for the submit-container */
.submit-container {
  text-align: center;
  margin-top: 20px;
}

/* Add styles for the submit button */
.submit-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
