<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/pokemon_wallpaper.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.welcome-img{
  width: 45%;
}
</style>
