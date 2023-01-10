<template>
  <div>
<nav-bar></nav-bar>
<data-table></data-table>
  </div>
</template>

<script>
import DataTable from "./DataTable.vue";
import NavBar from "./NavBar.vue"
export default {
  components:{DataTable, NavBar},
  name: "Dashboard",
  props: {
    msg: String
  },
 

};
</script>

