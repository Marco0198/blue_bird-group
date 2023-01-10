<template>
  <div>
<nav-bar></nav-bar>
<data-table></data-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DataTable from "./DataTable.vue";
import NavBar from "./NavBar.vue"
export default {
  components:{DataTable, NavBar},
  name: "Dashboard",
  props: {
    msg: String
  },
  methods: {
    ...mapActions("auth", ["attemptLogout", "addNotification"]),
    logout() {
      this.attemptLogout()
        .then(() => {
          this.handleSuccessfulLogout();
        })
        .catch(err => {
          this.handleUnsuccessfulLogout(err);
        });
    },
    handleSuccessfulLogout() {
      this.transferToLoginScreen();
      this.addNotification({
        title: "Logged Out",
        text: "You have been successfully logged out.",
        type: "success"
      });
    },
    handleUnsuccessfulLogout(err) {
      this.addNotification({
        title: "Oops! Looks like something is wrong!",
        text: err,
        type: "fail"
      });
    },
    transferToLoginScreen() {
      this.$router.push(this.$route.query.redirect || "/login");
    }
  }

};
</script>

