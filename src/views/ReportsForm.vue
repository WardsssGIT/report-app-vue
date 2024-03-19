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
              <th>Position</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="tableM">
            <tr v-for="(report, index) in reports" :key="index">
              <td>{{ report.dateofreport }}</td>
              <td>{{ report.vesselname }}</td>
              <td>{{ report.reporttype }}</td>
              <td>{{ report.departmentinvolved }}</td>
              <td>{{ report.rank }}</td>
              <td>{{ report.name }}</td>
              <td>
                <router-link :to="{ name: 'View Reports', params: { data: report.id } }" button
                  class="btn btn-view">View</router-link>
                  <router-link :to="{ name: 'Edit Reports', params: { data: report.id } }" button
                  class="btn btn-view">Edit</router-link>
                <button class="btn btn-remove" @click="removeReport(index)">Remove</button>
              </td>
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
      reports: []
    }
  },
  mounted() {
    this.fetchdata()
  },
  methods: {
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
      axios.get('http://127.0.0.1:8000/api/reports')
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
