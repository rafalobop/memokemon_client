<template>
  <div class="home">
    <div class="home-container" v-if="userLogged">
      <Navbar />
      <div class="user-data-container">
        <div class="user-data">
          <h1>Tus puntajes</h1>
          <p>
            Level actual: <span><b>{{ userLogged.progress ? userLogged.progress.levelActual : 1}}</b></span>
          </p>
          <p>
            Puntaje actual: <span><b>{{userLogged.progress ? userLogged.progress.scoreTotal : 0}}</b></span>
          </p>
        </div>
      </div>
      <div class="options-container">
        <div class="btn-container" @click="startProgress" v-if="!$store.state.appConfig.user.progress">
          Nueva Partida
        </div>
        <div class="btn-container" v-if="$store.state.appConfig.user.progress">Continuar Partida</div>
        <div class="btn-container" @click="deleteProgress">Borrar Progreso</div>
      </div>
    </div>
    <div class="home-container" v-else>
      <h2 class="bg-dark text-white mb-0 p-3">
        Debes iniciar sesión para acceder
      </h2>
      <p class="bg-dark text-white p-3">
        Vuelve al login para iniciar sesión <a href="/">Aquí</a>
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { backendUrl } from "../config/index";
import Navbar from "../components/Navbar.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      userLogged: {},
    };
  },
  created() {
    this.userLogged = JSON.parse(localStorage.getItem('user'))
    
  },
  methods: {
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
              console.log('user lcal', localStorage.getItem('user'))
              localStorage.setItem('user', JSON.stringify(userResp.data.user))
              console.log('user change', localStorage.getItem('user'))
              this.$store.commit('userLog', userResp.data.user)
              this.userLogged = userResp.data.user
              console.log('userrr', this.$store.state.appConfig.user)
            }
          } catch (error) {
            this.errorToast(resp.data.msg);
            this.$store.commit("changeLoading", false);
          }

        } else {
          this.errorToast(resp.data.msg);
          this.$store.commit("changeLoading", false);
        }
      } catch (error) {
        this.$store.commit("changeLoading", false);
        this.errorToast(error.response.data.msg);
      }
    },
    async startProgress(){
      alert('Iniciara el juego')
    },
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
  computed: mapState(["appConfig"]),

};
</script>
<style scoped>
.home-container {
  min-height: 630px;
}
.user-data-container {
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