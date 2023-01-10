<template>
  <div  class="alert alert-danger" :class="{notification: true, loading: timer}">
    <div>
      <p> {{notification.text.error_description }}</p>
      
    </div>
  
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
    }, 5000);
  }
};
</script>

