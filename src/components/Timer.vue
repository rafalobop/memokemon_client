<template>
 <div class="timer-container">
        <button
          v-b-modal.quit-game
          @click="modalShow = !modalShow"
          title="Salir del juego"
        >
          X
        </button>
        <span>{{ time }}</span>
      </div>
</template>
<script>
//import axios from "axios";

export default {
  name: "Timer",
  data() {
    return {
        time: 60,
        isRunning: true,

    };
  },
  props:["levelComplete"],
 watch: {
    isRunning(value) {
      if (value) {
        setTimeout(() => {
          this.time--;
        }, 1000);
      }
    },

    time: {
      handler(value) {
        if (value > 0 && this.isRunning) {
          setTimeout(() => {
            this.time--;
            if(this.levelComplete){
              this.stopTimer();
            }
            if (this.time === 0) {
              this.$bvModal.show("timeup");
            }
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  mounted(){
      this.startTimer()
  },
  methods: {
    startTimer() {
      this.isRunning = true;
    },
    stopTimer() {
      this.isRunning = false;
    },
  },
};
</script>
<style scoped>
.timer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 53px;
  padding: 0px 10px;
  background: #ababab;
  box-shadow: inset -5px -5px 7px #8c8c8c, inset 5px 5px 7px #cacaca;
}
.timer-container button {
  margin-top: 20px;
  font-size: 10px;
  border-radius: 50%;
  background: #ababab;
  box-shadow: inset -6px -6px 12px #767676, inset 6px 6px 12px #e0e0e0;
}
.timer-container button:hover {
  transition: 0.3s;
  border-radius: 50%;
  color: #454545;
  background: #ababab;
  box-shadow: -5px -5px 3px #a1a1a1, 5px 5px 3px #b5b5b5;
}
.timer-container span {
  font-weight: bold;
  font-size: 50px;
  padding: 5px;
}
</style>