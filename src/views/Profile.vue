<template>
  <div>
<nav-bar></nav-bar>
{{ currentUser }}
<data-table></data-table>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import DataTable from "../components/DataTable.vue";
import NavBar from "../components/NavBar.vue"
export default {
  components:{DataTable, NavBar},
  name: "Dashboard",
  props: {
    msg: String
  },
  created() {
    console.log(this.currentUser.email)

  },
  computed: {
    ...mapState("auth", ["notifications", "currentUser"]),

    eyeIcon() {
      return {
        far: true,
        "fa-eye": this.showPassword,
        "fa-eye-slash": !this.showPassword
      };
    }

  },
 
};
</script>