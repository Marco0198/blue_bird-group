<template>
  <div>
    <nav-bar></nav-bar>
    <div v-show="this.currentUser.role !== 'finance'"
      class="mx-auto  w-50 text-center justify-content-center alert alert-danger"> User
      not
      authorised</div>
    <div v-show="this.currentUser.role == 'finance'" class="mx-auto justify-content-center" style="width:80%;">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium quas animi porro qui ipsum vitae rem,
possimus in unde repellendus. Ex quos magnam quis. Harum molestiae eius porro earum.
</div>
  </div>
</template>
<script>
import DataTable from "../components/DataTable.vue";
import NavBar from "../components/NavBar.vue"
import { mapState, mapActions } from "vuex";
export default {
  components: { DataTable, NavBar },
  name: "Dashboard",
  props: {
    msg: String
  },
  created() {
    // this is to test the users role if it is finace or not in order to see the page content
    this.currentUser.role = "";
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