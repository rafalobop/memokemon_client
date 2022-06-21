<template>
  <div class="error404">
    <h1>Pagina error 404</h1>
    <button @click="redirect">Volver al home</button>
  </div>
</template>
<script>

export default {
  name: "Error",

  data() {
    return {
     
    }
  },

  methods: {
   redirect(){
     this.$router.push('/home')
   }
  },

};
</script>
<style scoped>

</style>