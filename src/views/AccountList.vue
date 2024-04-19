<template>
  <div class="card" style="margin-left: 15%; margin-top: 80px;">
    <div class="card-header">
      <label for="" class="text-primary h4 float-start">Account List</label>
      <router-link to="/admin/addaccount" class="btn btn-primary btn-sm float-end">Create Account</router-link>
    </div>
    <div class="card-body">
      <div class="table-responsive"> <!-- Add table-responsive for better display on smaller screens -->
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Date of Account Creation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in accounts" :key="account.id">
              <td>{{ account.id }}</td>
              <td>{{ account.name }}</td>
              <td>{{ account.email }}</td>
              <td>{{ account.department }}</td>
              <td>{{ formatDate(account.created_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      accounts: []
    };
  },
  mounted() {
    this.fetchUserAccounts();
  },
  methods: {
    async fetchUserAccounts() {
      try {
        const response = await axios.get('http://192.168.68.103:7070/api/useraccounts'); // Adjust the URL based on your API route
        this.accounts = response.data;
      } catch (error) {
        console.error('Error fetching user accounts:', error);
      }
    },
    formatDate(date) {
      // Implement your date formatting logic here
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>
