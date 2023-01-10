<script setup >
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net-bs5';

DataTable.use(DataTablesLib);

const columns = [
  { data: 'name' },
  { data: 'position' },
  { data: 'office' },
  { data: 'extn' },
  { data: 'start_date' },
  { data: 'salary' },
];
</script>

<template>
  <div class="container">
    <!-- this link Doesn't work so i did find the source then i made a json file for that  -->
    <!-- ajax="https://datatablesnetvue3ajax-uilk--3000.local-credentialless.webcontainer.io/data.json?_=1671710119886" -->
    <DataTable
      :columns="columns"
      ajax="/data.json"
      class="table table-hover table-striped"
      width="100%"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Extn.</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Extn.</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </tfoot>
    </DataTable>
  </div>
</template>

<style>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>