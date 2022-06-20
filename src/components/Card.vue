<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-back">
        <img
          :src=card.img
          :alt=card.name
        />
        <p>{{card.name.toUpperCase()}}</p>
      </div>
      <div class="flip-card-front">
       <img
          src="http://vignette1.wikia.nocookie.net/thelorienlegacies/images/2/2c/4129-pokemon-pokeball.png/revision/latest?cb=20140822201518" 
          :alt=card.name
          
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
    return {};
  },
  props: ["card"],

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
.flip-card {
  background-color: transparent;
  margin: 10px 10px;
  width: 140px;
  height: 200px;
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
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
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
}
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
.flip-card-back img{
    width: 100%;
}
.flip-card-front img{
    width: 100%;
}
</style>