<template>
  <div class="cards-container">
      <Navbar />
    <div class="cards-main-container">
      <h1>Tarjetas disponibles en el juego</h1>
    </div>
  </div>
</template>
<script>
/* import axios from "axios";
import { mapState } from "vuex";
import { backendUrl } from "../config/index"; */
import Navbar from "../components/Navbar.vue";

export default {
  name: "Cards",
  components: {
    Navbar,
  },
  data() {
    return {};
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
.cards-container {
  min-height: 630px;
}
.cards-main-container {
  margin: 35px auto;
  padding: 15px;
  width: 50%;
  border-radius: 37px;
  background: #ababab;
  box-shadow: -29px -29px 53px #6a6a6a, 29px 29px 53px #ececec;
}
.options-container {
  margin: 0px auto;
  padding: 20px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  width: 80%;
  border-radius: 37px;
  background: #ababab;
  box-shadow: -29px -29px 53px #6a6a6a, 29px 29px 53px #ececec;
}
.btn-container {
  background: rgb(111, 111, 111);
  color: #fff;
  width: 30%;
  font-size: 20px;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background: #ababab;
  box-shadow: 9px 9px 13px #848484, -9px -9px 13px #d2d2d2;
}
.btn-container:hover {
  cursor: pointer;
  border-radius: 40px;
  background: #ababab;
  box-shadow: inset 9px 9px 13px #848484, inset -9px -9px 13px #d2d2d2;
}
</style>