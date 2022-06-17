<template>
<div class="home">
    <div class="home-container" v-if="$store.state.appConfig.loggedUser">
        <Navbar />
        <div class="cards-container">
            <button>1</button>
            <button>2</button>
            <button>3</button>

        </div>
    </div>
    <div class="home-container" v-else>
        <h2 class="bg-dark text-white mb-0 p-3">Debes iniciar sesión para acceder</h2>
        <p class="bg-dark text-white p-3">Vuelve al login para iniciar sesión <a href="/">Aquí</a></p>
    </div>
</div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: "Home",
  components:{
      Navbar
  },
  data() {
    return {
    };
  },
}
</script>
<style scoped>

</style>