<template>
  <div class="newgame-container">
      <h1>New Game</h1>
  </div>
</template>
<script>

export default {
  name: "NewGame",
  components: {
    
  },
  data() {
    return {

    };
  },
 
  methods: {
    
    successToast(msg) {
      this.$toast.success(msg, {
        position: "top-right",
        hideProgressBar: true,
      });
    },
    errorToast(msg) {
      this.$toast.error(msg, {
        position: "top-right",
        hideProgressBar: true,
      });
    },
    warnToast(msg) {
      this.$toast.warning(msg, {
        position: "top-right",
        hideProgressBar: true,
      });
    },
  },

};
</script>
<style scoped>

</style>