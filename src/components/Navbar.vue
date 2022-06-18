<template>
  <div class="navbar-container">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="/home"
        ><img src="../assets/logo_memokemon.png" width="100" class="p-2" alt=""
      /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" class="justify-content-end p-4" is-nav>
        <b-navbar-nav class="flex-end mr-0">
          <b-nav-item><router-link to="/ranking">Ranking</router-link> </b-nav-item>
          <b-nav-item><router-link to="/cards">Cards</router-link> </b-nav-item>
          <b-nav-item @click="logout">Cerrar sesión</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods:{
      logout(){
          localStorage.clear()
          this.$store.commit('loggedUser', false)
          this.$router.push('/')
      }
  }
};
</script>
<style scoped>
</style>