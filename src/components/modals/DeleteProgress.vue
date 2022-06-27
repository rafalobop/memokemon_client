<template>
  <div>
    <b-modal
      :body-bg-variant="bgVariant"
      id="restoreProgress"
      class="restoreProgress-modal"
      v-model="modalShow"
      hide-footer
      hide-header
    >
      <div class="modal-container">
        <div class="header-modal">
          <h2 class="text-center">¿Desea reestablecer su progreso en el juego?</h2>
        </div>
        <div class="modal-options">
          <button class="modalBtn" @click="deleteProgress">Si</button>
          <button class="modalBtn" @click="modalShow = !modalShow">No</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {backendUrl} from '../../config/index'
import axios from 'axios'
export default {
  name: "RestoreProgress",
  data() {
    return {
      bgVariant: "dark",
      modalShow: false
    };
  },
  methods:{
    async deleteProgress() {

      const token = localStorage.getItem("token");
      const id = localStorage.getItem("gameId");
      this.$store.commit("changeLoading", true);
      const config = {
        method: "delete",
        url: `${backendUrl}/games/deleteProgress/${id}`,
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      };
      try {
        const resp = await axios(config);
        if (resp.data.code === 2) {
          this.successToast(resp.data.msg);
          this.$store.commit("changeLoading", false);
          const userResp = await axios({
            method: "get",
            url: `${backendUrl}/users/getUserInfo/${id}`,
            headers: {
              "auth-token": token,
              "Content-Type": "application/json",
            },
          });
          try {
            if (userResp.data.code == 2) {
              this.$store.commit("changeLoading", false);
              this.successToast("Usuario actualizado correctamente");
              localStorage.setItem('user', JSON.stringify(userResp.data.user))
              this.$store.commit('userLog', userResp.data.user)
            }else{
              this.modalShow = !this.modalShow
            }
          } catch (error) {
            this.errorToast(resp.data.msg);
            this.modalShow = !this.modalShow
            this.$store.commit("changeLoading", false);
          }
        } else {
          this.modalShow = !this.modalShow
          this.errorToast(resp.data.msg);
          this.$store.commit("changeLoading", false);
        }
      } catch (error) {
        this.modalShow = !this.modalShow
        this.$store.commit("changeLoading", false);
        this.errorToast(error.response.data.msg);
      }
    },
    errorToast(msg) {
      this.$toast.error(msg, {
        position: "top-right",
        hideProgressBar: true,
      });
    },
    successToast(msg) {
      this.$toast.success(msg, {
        position: "top-right",
        hideProgressBar: true,
      });
    },
  }

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