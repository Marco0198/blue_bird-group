<template>
  <div  class="alert alert-danger" :class="{notification: true, loading: timer}">
    <div>
      <p v-text="notification.text.error_description"></p>
    </div>
    <!-- <button
      type="button"
      class="notification--remove"
      @click="removeNotification()"
    >
      <i class="fa fa-times" />
    </button> -->
    <!-- { "error": "invalid_grant", "error_description": "Email not confirmed" } -->


  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Notification",
  props: {
    notification: {
      type: Object
    }
  },
  data() {
    return {
      timer: null
    };
  },
  methods: {
    ...mapActions("auth", ["removeNotification"]),
    triggerClose() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.removeNotification(this.notification);
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.triggerClose();
    }, 3000);
  }
};
</script>

