<template>

<table id="example" class="table table-striped m-auto" style="width:90%">
        <thead>
            <tr>
               <th>Id</th>
                <th>Email</th>
                <th>Role</th>
                <th>Create At</th>
                <th>Confirmed At </th>

               
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>{{currentUser.id}}</td>
                <td>{{currentUser.email}}</td>
                <td>{{currentUser.role}}</td>
                <td>{{ currentUser.created_at }}</td>
                <td>{{ currentUser.confirmed_at }}</td>
               
            </tr>

        </tbody>
        <tfoot>
            <tr>
              <th>Id</th>
                <th>Email</th>
                <th>Role</th>
                <th>Create At</th>
                <th>Confirmed At </th>
            </tr>
        </tfoot>
    </table>
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
    ...mapState("auth", ["currentUser"]),

  },
 
};
</script>

