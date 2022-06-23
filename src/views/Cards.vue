<template>
  <div class="cards-container">
    <Navbar />
    <div class="cards-main-container">
      <h1>Tarjetas disponibles en el juego</h1>
    </div>
    <div class="cards-list align-items-center">
      <Card
        v-for="(card) in $store.state.appConfig.cards"
        :key="card.name"
        :card="card"
        

      />
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";

export default {
  name: "Cards",
  components: {
    Navbar,
    Card,
  },
  data() {
    return {
      cards: [],
    };
  },
  created() {
    this.cards = this.$store.state.appConfig.cards
  },
 
  methods: {
    
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
};
</script>
<style scoped>
.cards-container {
  min-height: 630px;
}
.cards-main-container {
  margin: 35px auto;
  padding: 15px;
  width: 50%;
  border-radius: 37px;
  background: #ababab;
  box-shadow: -29px -29px 53px #6a6a6a, 29px 29px 53px #ececec;
}
.cards-list {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  margin: 0px auto;
  width: 95%;
  border-radius: 37px;
  background: #ababab;
  box-shadow: -29px -29px 53px #6a6a6a, 29px 29px 53px #ececec;
}
</style>