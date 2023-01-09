<template>
  <div>
    <nav-bar></nav-bar>
	<div class="mx-auto" style="width: 200px;">
		<ul >
  <li>Turnover</li>
  <li>Timesheets</li>
</ul>
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
