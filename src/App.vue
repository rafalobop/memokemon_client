<template>

    <div id="app">
      <div id="loadingScreen" v-if="$store.state.appConfig.loading">
        <div id="loading-bg" v-if="$store.state.appConfig.loading">
          <div class="loading">
            <div class="effect-1 effects"></div>
            <div class="effect-2 effects"></div>
            <div class="effect-3 effects"></div>
          </div>
        </div>
      </div>
      <router-view />
    </div>

</template>

<script>
//import ToastificationContent from "../src/toastification/ToastificationContent.vue";

export default {
  name: "App",

};
</script>

<style>
html{
  margin: 0;
  padding: 0;
  box-sizing:border-box ;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/pokemon_wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.welcome-img {
  width: 45%;
}
#loading-logo {
  width: 50%;
}
#loadingScreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  background-color: #000000c0;
}
#loading-bg {
  width: 100%;
  height: 100%;
  background: transparent;
  display: block;
  position: absolute;
}
.loading-logo {
  position: absolute;
  left: calc(46% - 45px);
  top: 40%;
}
.loading {
  position: absolute;
  left: calc(50% - 35px);
  top: 50%;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 3px solid transparent;
}
.loading .effect-1,
.loading .effect-2 {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-left: 3px solid #fff;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.loading .effect-1 {
  animation: rotate 1s ease infinite;
}
.loading .effect-2 {
  animation: rotateOpacity 1s ease infinite 0.1s;
}
.loading .effect-3 {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-left: 3px solid #fff;
  -webkit-animation: rotateOpacity 1s ease infinite 0.2s;
  animation: rotateOpacity 1s ease infinite 0.2s;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.loading .effects {
  transition: all 0.3s ease;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes rotateOpacity {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 0.1;
  }
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
    opacity: 1;
  }
}
</style>
