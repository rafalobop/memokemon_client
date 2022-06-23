<template>
  <div class="newgame-container">
    <div class="points-container">
      <div class="level-container">
        <h2>Level:</h2>
        <span>{{ level }}</span>
      </div>
      <!-- <Timer /> -->
      <div class="score-container">
        <h2>Score:</h2>
        <span>{{ scoreTotal }}</span>
      </div>
    </div>
    <div class="game-main-container">
      <div class="cards-game-container">
        <Card
          v-for="card in levelCards"
          @toggleCard="verifyCard(card)"
          :key="card.pos + Math.random()"
          :card="card"
          :isGame="isGame"
          :showCard="showCard"
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
//import Timer from '../components/Timer.vue'
import QuitGame from "../components/modals/QuitGame.vue";
import { generateLevel } from "../helpers/levelManager";

export default {
  name: "NewGame",
  components: {
    Card,
    QuitGame,
    TimeUp,
    //Timer
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
      flipped: [],
      level: null,
      isGame: false,
      showCard: false,
    };
  },
  created() {
    this.loadLevelData();
  },

  methods: {
    verifyCard(card) {
      card.flipped = !card.flipped;
      this.showCard = !this.showCard;
      if (card.flipped) {
        this.flipped.push(card);
        if (this.flipped.length === 2) {
          console.log("aqui deja de suamr");

          if (this.flipped[0] == this.flipped[1]) {
            console.log("se suma un punto son iguales");
            this.matches.push(this.flipped[0])
            this.flipped = []
          } else {
            setTimeout(() => {
              this.flipped.forEach((card)=> card.flipped = false)
            }, 2000);

          }
        }
        /* if (!this.flipped.length) {
          this.flipped.push(card);
        } else {
          this.flipped.push(card)
          this.cardTwoSelect.push(card);
          this.flipped.push(this.cardOneSelect,this.cardTwoSelect)
          console.log('fli', this.flipped) */
        /* if (this.cardOneSelect[0].name != this.cardTwoSelect[0].name) {
            console.log('ssss', this.cardOneSelect)
            console.log('aaa', this.cardTwoSelect)
            setTimeout(() => {
              this.cardOneSelect[0].flipped = false;
              this.cardTwoSelect[0].flipped = false;
            }, 1500);
            this.cardOneSelect = [];
            this.cardTwoSelect = [];
          } else {
            console.log("son iguales");
          } */
        // /* } */
      }
    },
    verifyPoints(card1, card2) {
      console.log("card1", card1);
      console.log("card2", card2);

      if (card1 === card2) {
        console.log("se suma 1 punto");
      } else {
        console.log("suma 1 intento");
        console.log("cards", this.levelCards);
        this.cardOneSelect = [];
        this.cardTwoSelect = [];
      }
    },
    async loadLevelData() {
      this.cards = JSON.parse(localStorage.getItem("cards"));
      const user = JSON.parse(localStorage.getItem("user"));
      this.level = user.progress.levelActual;
      const newCardsArray = this.cards.sort(() => Math.random() - 0.5);
      const cardsOfLevel = await generateLevel(newCardsArray, this.level);
      const cardsOfLevelRepeat = [...cardsOfLevel];
      const cardsToCharge = [...cardsOfLevel, ...cardsOfLevelRepeat];
      this.levelCards = cardsToCharge.map((card) => {
        return { ...card, flipped: false, acerted: false };
      });
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
  font-size: 50px;
  margin-top: -18px;
}

.cards-game-container {
  display: flex;
  flex-wrap: wrap;
  height: 500px;
}
</style>