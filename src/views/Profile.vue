<template>
    <div>
  <nav-bar></nav-bar>
  <data-table></data-table>
    </div>
  </template>
  <script>
  import DataTable from "../components/DataTable.vue";
  import NavBar from "../components/NavBar.vue"
  export default {
    components:{DataTable, NavBar},
    name: "Dashboard",
    props: {
      msg: String
    },
   
  };
  </script>