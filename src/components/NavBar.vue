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

  <router-view/>
</template>

<script>
import { mapActions } from "vuex";

export default {
    methods: {
    ...mapActions("auth", ["attemptLogout"]),
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
    },

    transferToLoginScreen() {
      this.$router.push(this.$route.query.redirect || "/login");
    }
  }

}
</script>

<style>

</style>