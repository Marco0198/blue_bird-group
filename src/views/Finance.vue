<template>
  <div>
    <nav-bar></nav-bar>
<div class="mx-auto justify-content-center" style="width:80%;">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium quas animi porro qui ipsum vitae rem,
possimus in unde repellendus. Ex quos magnam quis. Harum molestiae eius porro earum.
</div>
  </div>
</template>
<script>
import DataTable from "../components/DataTable.vue";
import NavBar from "../components/NavBar.vue"
export default {
  components: { DataTable, NavBar },
  name: "Dashboard",
  props: {
    msg: String
  },

};
</script>