<template>
    <div class="home-container">
        <Navbar />
        <div class="cards-container">
            <button>1</button>
            <button>2</button>
            <button>3</button>

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