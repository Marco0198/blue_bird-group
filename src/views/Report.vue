<template>
  <div>
    <nav-bar></nav-bar>
	<div class="mx-auto" style="width: 200px;">
		<ul >
  <li v-show="this.currentUser.role == 'finance'">Turnover</li>
  <li>Timesheets</li>
</ul>
	</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
import DataTable from "../components/DataTable.vue";
import NavBar from "../components/NavBar.vue"

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
