<template>
  <div class="newgame-container">
    <div class="points-container">
      <div class="level-container">
        <h2>Level:</h2>
        <span>{{ level }}</span>
      </div>
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
      <div class="score-container">
        <h2>Score:</h2>
        <span>{{ scoreTotal }}</span>
      </div>
    </div>
    <div class="game-main-container">
      <div class="cards-game-container">
        <Card
          v-for="card in levelCards"
          :key="card.pos + Math.random()"
          :card="card"
        />
      </div>
    </div>
    <div class="buttons"></div>
    <QuitGame />
    <TimeUp id="timeup" />
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import TimeUp from "../components/modals/TimeUp";
import QuitGame from "../components/modals/QuitGame.vue";
import { generateLevel } from "../helpers/levelManager";
export default {
  name: "NewGame",
  components: {
    Card,
    QuitGame,
    TimeUp,
  },
  data() {
    return {
      timer: null,
      scoreTotal: 0,
      cards: [],
      levelCards: [],
      modalShow: false,
      modalTimeShow: false,
      isRunning: true,
      time: 60,
      levelComplete: false,
      cardOneSelect: [],
      cardTwoSelect:[],
      matches:[],
      level: null
    };
  },
  created() {
    this.loadLevelData();
  },
  mounted() {
    this.startTimer();
  },
  //props: ["level"],
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
            if (this.time === 0) {
              this.$bvModal.show("timeup");
            }
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  methods: {
    startTimer() {
      this.isRunning = true;
    },
    stopTimer() {
      this.isRunning = false;
    },
    async loadLevelData() {
      this.cards = JSON.parse(localStorage.getItem('cards'))
      const user = JSON.parse(localStorage.getItem('user'))
      this.level = user.progress.levelActual
      const newCardsArray = this.cards.sort(() => Math.random() - 0.5);
      const cardsOfLevel = await generateLevel(newCardsArray, this.level);
      const cardsOfLevelRepeat = [...cardsOfLevel];
      this.levelCards = [...cardsOfLevel, ...cardsOfLevelRepeat];
    },
    quitGame() {
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped>
.newgame-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.points-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.game-main-container {
  width: 90%;
  border-radius: 20px;
}
.level-container,
.score-container {
  height: 80px;
  justify-content: center;
  display: flex;
  width: 25%;
  font-size: 35px;
  padding: 20px;
  margin: 0px 15px;
  border-radius: 53px;
  background: #ababab;
  box-shadow: inset -5px -5px 7px #8c8c8c, inset 5px 5px 7px #cacaca;
}
.level-container span,
.score-container span {
  margin-left: 10px;
  font-size: 50px;
  margin-top: -18px;
}
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
.cards-game-container {
  display: flex;
  flex-wrap: wrap;
  height: 500px;
}
</style>