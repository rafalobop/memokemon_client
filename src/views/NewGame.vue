<template>
  <div class="newgame-container">
    <div class="points-container">
      <div class="level-container">
        <h2>Level:</h2>
        <span>{{ level }}</span>
      </div>
      <Timer :levelComplete="levelComplete" />
      <div class="score-container">
        <h2 class="small">Score:</h2>
        <span class="score-box">{{
          levelComplete ? scoreTotal : scoreCounter
        }}</span>
      </div>
    </div>
    <div class="game-main-container">
      <div class="cards-game-container">
        <Card
          v-for="(card, index) in levelCards"
          @toggleCard="flipCard(card, index)"
          :key="index"
          :card="card"
          :isGame="isGame"
        />
      </div>
    </div>
    <QuitGame />
    <FinishedGame :scoreTotal="scoreTotal" />
    <TimeUp id="timeup" />
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import TimeUp from "../components/modals/TimeUp";
import FinishedGame from "../components/modals/FinishedGame.vue";
import Timer from "../components/Timer.vue";
import QuitGame from "../components/modals/QuitGame.vue";
import { generateLevel } from "../helpers/levelManager";
import axios from "axios";
import { backendUrl } from "../config/index";

export default {
  name: "NewGame",
  components: {
    Card,
    QuitGame,
    TimeUp,
    Timer,
    FinishedGame,
  },
  data() {
    return {
      scoreTotal: 0,
      cards: [],
      levelCards: [],
      levelComplete: false,
      cardOneSelect: [],
      cardTwoSelect: [],
      matches: [],
      level: null,
      isGame: false,
      showCard: false,
      scoreCounter: 0,
      movimientosTotales: 100,
      movimientos: 0,
      levelTime: 0,
      user:{}
    };
  },
  created() {
    this.loadLevelData();
    const timeRun = setInterval(() => {
      this.levelTime++;
    }, 1000);
    if (this.levelTime == 60 || this.levelComplete) {
      clearInterval(timeRun);
    }
  },
  methods: {
    flipCard(card) {
      if (!this.cardOneSelect.length) {
        card.flipped = true;
        this.cardOneSelect.push(card);
      } else if (!this.cardTwoSelect.length) {
        this.movimientosTotales--;
        card.flipped = true;
        this.cardTwoSelect.push(card);

        if (this.cardOneSelect[0].name != this.cardTwoSelect[0].name) {
          setTimeout(() => {
            this.cardOneSelect = [];
            this.cardTwoSelect = [];
            this.levelCards.forEach((card) => {
              if (!card.acerted) {
                card.flipped = false;
              }
            });
          }, 600);
          return this.levelCards;
        } else {
          this.levelCards.forEach((card) => {
            if (card.flipped) {
              card.acerted = true;
              if (this.matches.indexOf(card) == -1) {
                this.matches.push(card);
              }
            }
            this.cardOneSelect = [];
            this.cardTwoSelect = [];
            return this.levelCards;
          });
          this.verifyPoints();
          this.cardOneSelect = [];
          this.cardTwoSelect = [];
        }
      } else {
        this.cardOneSelect = [];
        this.cardTwoSelect = [];
      }
    },
    async verifyPoints() {
      this.scoreCounter++;
      if (this.matches.length === this.levelCards.length) {
        this.levelComplete = true;
        this.scoreTotal =
          this.scoreCounter * 10 + this.movimientosTotales + this.levelTime;
        const token = localStorage.getItem("token");

        const config = {
          method: "post",
          url: `${backendUrl}/games/saveGameResult`,
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
          data: {
            level: this.level,
            tiempo: this.levelTime,
            movimientos: this.movimientos,
            completed: true,
            score: this.scoreTotal,
          },
        };
        try {
          const resp = await axios(config);
          if (resp.data.code === 2) {
            const config = {
              method: "get",
              url: `${backendUrl}/games/continueGame`,
              headers: {
                "auth-token": token,
                "Content-Type": "application/json",
              },
            };
            try {
              const resp = await axios(config);
              if (resp.data.code === 2) {
                localStorage.removeItem('user')
                localStorage.setItem('user', JSON.stringify(resp.data))
                this.$store.commit("changeLoading", false);
                this.$router.push("/newGame");
              } else {
                this.$store.commit("changeLoading", false);
              }
            } catch (error) {
              this.$store.commit("changeLoading", false);
              this.errorToast(error.response.data.msg);
            }
          } else {
            console.log("aqui");
          }
        } catch (error) {
          console.log(error);
        }
        this.$bvModal.show("finish-game", this.scoreTotal);
      }
    },
    async loadLevelData() {
      this.cards = JSON.parse(localStorage.getItem("cards"));
      this.user = JSON.parse(localStorage.getItem("user"));
      this.level = this.user.progress.levelActual;
      const newCardsArray = this.cards.sort(() => Math.random() - 0.5);
      const cardsOfLevel = await generateLevel(newCardsArray, this.level);
      const cardsOfLevelRepeat = [...cardsOfLevel];
      const cardsToCharge = [...cardsOfLevel, ...cardsOfLevelRepeat];
      this.levelCards = cardsToCharge.map((card) => {
        return { ...card, flipped: false, acerted: false };
      });
      console.log("se carga el nivel nuevamnete", this.user.progress.levelActual);
      this.isGame = true;
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
  font-size: 35px;
  margin-top: -5px;
}

.cards-game-container {
  display: flex;
  flex-wrap: wrap;
  height: 500px;
}
</style>