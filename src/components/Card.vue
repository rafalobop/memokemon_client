<template>
  <div class="flip-card" @click="$emit('toggleCard', card)">
    <div class="flip-card-inner">
      <div class="flip-card-back" v-show="card.flipped">
        <img :src="card.img" :alt="card.name" />
        <p class="card-title">{{ card.name.toUpperCase() }}</p>
      </div>
      <div class="flip-card-front" v-show="!card.flipped">
        <img
          src="http://vignette1.wikia.nocookie.net/thelorienlegacies/images/2/2c/4129-pokemon-pokeball.png/revision/latest?cb=20140822201518"
          :alt="card.name"
        />
      </div>
    </div>
  </div>
</template>
<script>
//import axios from "axios";

export default {
  name: "Card",
  data() {
    return {
      selectedCards: [],
      cardOne: [],
      cardTwo: [],
      cardsClass: [],
      flipped: false,
      counterFlipUp: 0,
      counterFlipDown: 0,
      counter: 0,
      //showCard:false
    };
  },
  props: ["card", "isGame", "showCard"],

  methods: {
    /* toggleCard(card) {
      this.showCard = !this.showCard;
      card.flipped = !card.flipped
      return card
    }, */
    
      /* this.levelCards.forEach(el => {
        console.log('el', el)
        console.log('card', card)
        if(el.name === card.name){
          el.flipped = true
        }
        return el
      })
      let selected = this.levelCards.filter((c)=> c.flipped = true)
      console.log('se', selected) */
      /* let filtered = this.levelCards.map(el => {
        
        return el.flipped
      }); */
      // console.log('filtered', filtered)
    // },
    successToast(msg) {
      this.$toast.success(msg, {
        position: "top-right",
        hideProgressBar: true,
      });
    },
    errorToast(msg) {
      this.$toast.error(msg, {
        position: "top-right",
        hideProgressBar: true,
      });
    },
    warnToast(msg) {
      this.$toast.warning(msg, {
        position: "top-right",
        hideProgressBar: true,
      });
    },
  },
  computed:{
    
  }
};
</script>
<style scoped>
.card-title {
  font-size: 8px;
  font-weight: bold;
  letter-spacing: 1px;
}
.flip-card {
  background-color: transparent;
  margin: 10px 10px;
  width: 70px;
  height: 100px;
  border: none;
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: #bbb;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 20px;
}
.flip-card-back {
  background-color: #494949;
  color: white;
  transform: rotateX(360deg), translateY(-30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 20px;
}
.flip-card-back img {
  width: 100%;
}
.flip-card-front img {
  text-align: center;
  width: 90%;
  padding: 5px;
}
</style>