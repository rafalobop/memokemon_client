<template>
  <div>
    <b-modal
      :body-bg-variant="bgVariant"
      id="timeup"
      class="logout-modal"
      v-model="modalTimeShow"
      hide-footer
      hide-header
      no-close-on-esc
      no-close-on-backdrop
    >
      <div class="modal-container">
        <div class="header-modal">
          <h2 class="text-center">Se acabó el tiempo!</h2>
          <h3 class="text-center">Deseas volver a intentarlo?</h3>
        </div>
        <div class="modal-options">
          <button class="modalBtn" @click="resetGame">Si</button>
          <button class="modalBtn" @click="redirect">No</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "quit-game",
  data() {
    return {
      bgVariant: "dark",
      modalTimeShow: false
    };
  },

  methods: {
    resetGame() {
      this.$store.commit("changeLoading", true);
      try {
          setTimeout(() => {
              window.location.reload()
          }, 3000);
        this.$store.commit("changeLoading", false);
      } catch (error) {
        this.$store.commit("changeLoading", false);
      }
    },
    redirect(){
        this.$router.push('/home')
    }
  },
};
</script>
<style scoped>
.modalBtn {
  margin: 0px 20px;
  padding: 2px 20px;
  border-radius: 48px;
  background: #575757;
  box-shadow: 2px 2px 6px #858585, -2px -2px 6px #d1d1d1;
}
.modalBtn:hover {
  cursor: pointer;
  border-radius: 53px;
  background: #5f5f5f;
  box-shadow: inset 5px 5px 6px #919191, inset -5px -5px 6px #c5c5c5;
  color: #fff;
}
.modal-container {
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 49px;
  background: #212529;
}
h2, h3 {
  color: #a0a0a0;
  margin-bottom: 30px;
  font-size: 30px;
}
</style>