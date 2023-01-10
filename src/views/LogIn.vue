<template>
  <div
    class="text-center"
  >
    <div class="container mt-5 justify-content-center d-flex">
    
      <template v-if="notifications.length > 0">
        <transition-group name="notification-list" tag="div"  appear>
          <notification
            appear
            v-for="(notification, idx) in notifications"
            :key="idx"
            :notification="notification"
          ></notification>
        </transition-group>
      </template>
 
      <div class="container form-position justify-content-center d-flex position-fixed">
        <form @submit.prevent="login()" v-if="isLogin" class="form-signin w-50"  >
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" v-model="loginCreds.email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword"  class="sr-only">Password</label>
      <input type="password" v-model="loginCreds.password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class=" w-100 mt-3 btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="text-primary mt-3">
        Are you a new user?
        <span @click="toggleSignup">Create an account.</span>
      </p>
      <p class="mt-5 mb-3 text-muted">&copy; 2019-2023</p>
    </form>
<form @submit.prevent="signup()" class="form-signin w-50" v-else>
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" v-model="loginCreds.email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword"  class="sr-only">Password</label>
      <input type="password" v-model="loginCreds.password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class=" w-100 mt-3 btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
      <p class="text-primary mt-3">
          Already have a log in?
          <span @click="toggleSignup">Return to log in.</span>
        </p>
        <p class="mt-5 mb-3 text-muted">&copy; 2019-2023</p>
    </form>
    
      </div>
  
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Notification from "../components//Notification";

export default {
  name: "Login",
  components: {
    Notification
  },
  data() {
    return {
      auth: null,
      isLogin: true,
      showPassword: false,
      loginCreds: {
        email: null,
        password: null
      },
      signupCreds: {
        email: null,
        password: null
      }
    };
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
  methods: {
    ...mapActions("auth", ["attemptLogin", "attemptSignUp", "addNotification"]),
    toggleSignup() {
      this.isLogin = !this.isLogin;

    },
    toggleIcon() {
      this.showPassword = !this.showPassword;
      this.$refs.passwordField.type = this.showPassword ? "text" : "password";
    },
    signup() {
      this.attemptSignUp(this.signupCreds)
        .then(() => {
          this.addNotification({
            title: "Sign Up",
            text:
              "You have successfully signed up. Check your email to confirm your account.",
            type: "success"
          });
          console.log("a confirmation email has been sent to you!");
        })
        .catch(err => this.handleUnsuccessfulLogin(err));
    },
    login() {
      let token = decodeURIComponent(window.location.search)
        .substring(1)
        .split("confirmation_token=")[1];
      this.attemptLogin({ token, ...this.loginCreds })
        .then(() => {
          this.handleSuccessfulLogin();
        })
        .catch(err => {
          this.handleUnsuccessfulLogin(err);
        });
      console.log(this.currentUser)
    },
    handleSuccessfulLogin() {
      this.transferToDashboard();
      this.addNotification({
        title: "Log In",
        text: "You have successfully logged in.",
        type: "success"
      });
    },
    handleUnsuccessfulLogin(err) {
      this.addNotification({
        title: "Oops! Looks like something is wrong!",
        text: err,
        type: "fail"
      });
    },
    transferToDashboard() {
      this.$router.push(this.$route.query.redirect || "/");
    }
  }
};
</script>
<style scoped>
.form-position{
  margin: 6%;
}
</style>

