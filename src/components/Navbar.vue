<template>
  <div class="navbar-container">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="/home"
        ><img src="../assets/logo_memokemon.png" width="100" class="p-2" alt=""
      /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" class="justify-content-end p-4" is-nav>
        <b-navbar-nav class="flex-end mr-0">
          <b-nav-item
            ><router-link class="navbutton" to="/ranking">Ranking</router-link>
          </b-nav-item>
          <b-nav-item
            ><router-link class="navbutton" to="/cards">Cards</router-link>
          </b-nav-item>
          <b-nav-item class="logoutbtn" v-b-modal.cerrar-sesion @click="modalShow = !modalShow"
            >Cerrar sesión</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <LogoutModal />
  </div>
</template>
<script>
import LogoutModal from './modals/LogoutModal.vue'
export default{
  components: { LogoutModal },
  name: "Navbar",
  data() {
    return {
      modalShow: false,
    };
  },
  
};
</script>
<style scoped>
.navbutton {
  padding: 15px;
  text-decoration: none;
  color: #ccc;
}
.navbutton:hover {
  color: #333;
  transition: 0.4s;
  border-radius: 48px;
  background: #ababab;
  box-shadow: inset 9px 6px 6px #858585, inset -9px -6px 6px #d1d1d1;
}
.logoutbtn {
    color: #ccc;
}
.logoutbtn:hover {
  color: #333;
  transition: 0.4s;
  border-radius: 48px;
  background: #ababab;
  box-shadow: inset 9px 6px 6px #858585, inset -9px -6px 6px #d1d1d1;
}
</style>