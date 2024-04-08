<template>
  <div class='card' style="margin-left: 15%; margin-top: 80px;">
    <div class="card-header">
      <label for="" class="text-primary h4 float-start">Report's List</label>
      <router-link to="/reports/add" class="btn btn-primary btn-sm float-end">Create Reports</router-link>
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
import axios from 'axios';

export default {
  data() {
    return {
      reports: []
    }
  },
  mounted() {
    //this.fetchdata()
    console.log(this.token)
  },
  computed: {
    ...mapGetters('auth', {
      token: GET_USER_TOKEN_GETTER
    })
  },
  methods: {
    remove(id) {
      axios.put(`/reports/archive/${id}`)
      this.fetchdata();
    },
    viewReport(index) {
      console.log("View report at index", index);
    },
    editReport(index) {
      console.log("Edit report at index", index);
    },
    removeReport(index) {
      this.$emit('removeReport', index);
    },
    fetchdata() {
      axios.get('/reports', {
        Authentication: 'Baerer ' + this.token
      })
        .then(response => {
          this.reports = response.data
          console.log(this.reports)

        }).catch(error => {
          console.log(error)
        })
    }
  }
};
</script>
