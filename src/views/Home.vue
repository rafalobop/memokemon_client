<template>
  <div class="home">
    <div class="home-container" v-if="$store.state.appConfig.loggedUser">
      <Navbar />
      <div class="user-data-container">
        <div class="user-data">
          <h1>Tus puntajes</h1>
          <p>Level actual: <span>{{userLogged.progress.levelActual}}</span></p>
          <p>Puntaje actual: <span>{{userLogged.progress.scoreTotal}}</span></p>
          <p>Tu Ranking: 1</p>
        </div>
      </div>
      <div class="options-container">
        <div class="btn-container" v-if="userLogged.progress.levelActual == 1">Nueva Partida</div>
        <div class="btn-container">Continuar Partida</div>
        <div class="btn-container">Borrar Progreso</div>
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
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
        userLogged: {}
    };
  },
  mounted(){
      this.userLogged =JSON.parse(localStorage.getItem('user'))
  }
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