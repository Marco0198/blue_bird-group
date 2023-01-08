<template>
  <nav class="navbar navbar-expand-lg mb-5 navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/" class=" nav-link">Dashboard</router-link>
          <!-- <a class="nav-link active" aria-current="page" href="#">Dashboard</a> -->
        </li>
        <li class="nav-item">
            <router-link to="/reports" class="nav-link">Reports</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/finance" class="nav-link">Finance</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/profile" class="nav-link">Profile</router-link>
          <!-- <a class="nav-link ">Profile</a> -->
        </li>
      </ul>
    </div>
  </div>
 <button class="btn btn-outline-success mr-3"  @click="logout">Logout</button>
    
</nav>
<!-- <div id="nav"> -->
  <!-- <nav class="container navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Logo Here</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/About" class="nav-item nav-link">About</router-link>
            <router-link to="/Careers" class="nav-link">Careers</router-link>
            <router-link to="/Contact" class="nav-link">Contact</router-link>
        </div>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</nav> -->
 <!-- </div> -->
  <router-view/>
</template>

<script>
import { mapActions } from "vuex";

export default {
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

}
</script>

<style>

</style>