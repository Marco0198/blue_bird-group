<template>
  <div>
  <!-- <nav class="navbar navbar-expand-lg mb-5 navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
        <button class="btn btn-outline-success mr-3"  @click="logout">Logout</button>
    
</nav> -->
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

