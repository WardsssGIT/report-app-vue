<template>
  <div class='card' style="margin-left: 15%; margin-top: 80px;">
    <div class="card-header">
      <label for="" class="text-primary h4 float-start">Report's List</label>
      <router-link to="/admin/addreport" class="btn btn-primary btn-sm float-end">Create Reports</router-link>
    </div>
    <div class="card-body">
      <div class="table">
        <table class="table">
          <thead>
            <tr>
              <th>Date of Report</th>
              <th>Report Name</th>
              <th>Report Type</th>
              <th>Department Involved</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="tableM">
            <tr v-for="(report, index) in reports" :key="index">
              <td>{{ report.Date_of_report }}</td>
              <td>{{ report.Report_name }}</td>
              <td>{{ report.Report_type }}</td>
              <td>{{ report.Department_involved }}</td>
              <td>
                <router-link :to="{ name: 'View Reports', params: { data: report.id } }" button
                  class="btn btn-primary btn-view">View</router-link>
                <router-link :to="{ name: 'Edit Reports', params: { data: report.id } }" button
                  class="btn btn-success btn-edit">Edit</router-link>
                <button class="btn btn-danger btn-remove" @click="remove(report.id)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_USER_TOKEN_GETTER } from '@/store/storeconstants';
import { mapGetters } from 'vuex';
import axiosInstance from '../services/AxiosTokenInstance';

export default {
  data() {
    return {
      reports: []
    }
  },
  mounted() {
    this.fetchdata(); // Fetch initial data when component is mounted
  },
  computed: {
    ...mapGetters('auth', {
      token: GET_USER_TOKEN_GETTER
    })
  },
  methods: {
    remove(id) {
      axiosInstance.put(`/reports/archive/${id}`)
        .then(() => {
          // After successfully removing, fetch updated data
          this.fetchdata();
        })
        .catch(error => {
          console.error('Error removing report:', error);
        });
    },
    fetchdata() {
      axiosInstance.get('/reports', {
        headers: {
          //Authorization: `Bearer ${this.token}` // Corrected typo in "Authorization"
        }
      })
        .then(response => {
          this.reports = response.data;
          console.log(this.reports);
        })
        .catch(error => {
          console.log('Error fetching reports:', error);
        });
    }
  }
};
</script>
