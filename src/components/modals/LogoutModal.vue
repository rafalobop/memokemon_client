<template>
  <div>
    <b-modal
      :body-bg-variant="bgVariant"
      id="cerrar-sesion"
      class="logout-modal"
      v-model="modalShow"
      hide-footer
      hide-header
    >
      <div class="modal-container">
        <div class="header-modal">
          <h2>Desea cerrar sesión?</h2>
        </div>
        <div class="modal-options">
          <button class="modalBtn" @click="logout">Si</button>
          <button class="modalBtn" @click="modalShow = !modalShow">No</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "LogoutModal",
  data() {
    return {
      bgVariant: "dark",
      modalShow: false
    };
  },
  //  props: ["modalShow"],

  methods: {
    logout() {
      this.$store.commit("changeLoading", true);
      try {
        localStorage.clear();
        this.$store.commit("loggedUser", false);
        this.$router.push("/");
        this.$store.commit("changeLoading", false);
      } catch (error) {
        this.$store.commit("loggedUser", false);
      }
    },
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
</style>