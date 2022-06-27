<template>
  <div>
    <b-modal
      :body-bg-variant="bgVariant"
      id="finish-game"
      class="logout-modal"
      v-model="modalShow"
      hide-footer
      hide-header
      no-close-on-esc
      no-close-on-backdrop
    >
      <div class="modal-container">
        <div class="header-modal">
          <h2 class="text-center">Has completado el nivel!</h2>
          <h4 class="text-center">Tu puntaje</h4>
        </div>
        <div class="modal-options">
          <button class="modalBtn" @click="continueGame">Continuar</button>
          <button class="modalBtn" @click="quitGame">Salir del juego</button>
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
      modalShow: false
    };
  },
  props: ["levelComplete"],

  methods: {
    continueGame() {
      this.$store.commit("changeLoading", true);
      try {
        this.$router.go(this.$router.currentRoute)
        this.$store.commit("changeLoading", false);
      } catch (error) {
        this.$store.commit("changeLoading", false);
      }
    },
    quitGame(){
         this.$store.commit("changeLoading", true);
      try {
        this.$router.push('/home')
        this.$store.commit("changeLoading", false);
      } catch (error) {
        this.$store.commit("changeLoading", false);
      }
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
h2 {
  color: #a0a0a0;
  margin-bottom: 20px;
  font-size: 30px;
}
h4{
color: #a0a0a0;
  margin-bottom: 20px;
  font-size: 20px;
}
</style>