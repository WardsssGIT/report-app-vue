<template>
  <div class='card' style="margin-left: 15%; margin-top: 80px;">
    <div class="card-header" >
      <label for="" class="text-primary h4 float-start" >Report's List</label>
      <router-link to="/reports/add" class="btn btn-primary btn-sm float-end">Create Reports</router-link>
    </div>
    <div class="card-body">
      <div class="table">
        <table class="table">
          <thead>
            <tr>
              <th>Date of Report</th>
              <th>Vessel Name</th>
              <th>Vessel Type</th>
              <th>Rank</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="tableM">
            <tr v-for="(report, index) in reports" :key="index">
              <td>{{ report.dateOfReport }}</td>
              <td>{{ report.vesselName }}</td>
              <td>{{ report.vesselType }}</td>
              <td>{{ report.rank }}</td>
              <td>{{ report.name }}</td>
              <td>
                <button class="btn btn-view" @click="viewReport(index)">View</button>
                <button class="btn btn-edit" @click="editReport(index)">Edit</button>
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
export default {
  props: {
    reports: Array
  },
  methods: {
    viewReport(index) {
      // View report logic
      console.log("View report at index", index);
    },
    editReport(index) {
      // Edit report logic
      console.log("Edit report at index", index);
    },
    removeReport(index) {
      // Remove report logic
      this.$emit('removeReport', index);
    }
  }
};
</script>
