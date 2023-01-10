<template>
  <div>
<nav-bar></nav-bar>
<data-table-profile></data-table-profile>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import DataTableProfile from "../components/DataTableProfile.vue";
import NavBar from "../components/NavBar.vue"
export default {
  components:{DataTableProfile, NavBar},
  name: "Dashboard",
  props: {
    msg: String
  },
  created() {
    console.log(this.currentUser.email)

  },
  computed: {
    ...mapState("auth", [ "currentUser"]),

  },
 
};
</script>