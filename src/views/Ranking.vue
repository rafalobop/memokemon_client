<template>
  <div class="cards">
    <div class="cards-container">
      <Navbar />
      <div class="user-data-container">
        <h1>Tabla de posiciones</h1>
      </div>
      <div class="options-container" v-if="items.length > 0">
        <b-table striped hover :items="items" :fields="fields"></b-table>
      </div>
       <div class="options-container" v-else>
        <h3>No hay partidas iniciadas aún.</h3>  
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Navbar from "../components/Navbar.vue";
import {backendUrl} from '../config/index'
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      items: [],
      fields: [],
      users: [],
    };
  },
  created() {
    this.getData();
  },
  mounted(){
      this.createTable()
  },
  methods: {
    async getData() {
        this.$store.commit('changeLoading', true)
      const config = {
        method: "get",
        url: `${backendUrl}/users/getRanking`,
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        this.$store.commit('changeLoading', true)
        const resp = await axios(config)
         if (resp.data.code === 2) {
            this.items = resp.data.ranking
            for (let i = 0; i < this.items.length; i++) {
              this.items[i].position = i+1  
            }
            this.fields = ["name", "lastName", "levelActual", "score", "position"]
            this.$store.commit("changeLoading", false);
          } else {
            this.errorToast(resp.data.msg);
            this.$store.commit("changeLoading", false);
          }
      } catch (error) {
        this.$store.commit('changeLoading', true)
          this.errorToast(error.response.data.msg)
      }
    },
    createTable(){
        this.items = this.users
    },
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
.user-data-container {
  margin: 35px auto;
  padding: 15px;
  width: 50%;
  border-radius: 37px;
  background: #ababab;
  box-shadow: -29px -29px 53px #6a6a6a, 29px 29px 53px #ececec;
}
.options-container {
  margin: 0px auto;
  padding: 20px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  width: 80%;
  border-radius: 37px;
  background: #ababab;
  box-shadow: -29px -29px 53px #6a6a6a, 29px 29px 53px #ececec;
}
.btn-container {
  background: rgb(111, 111, 111);
  color: #fff;
  width: 30%;
  font-size: 20px;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background: #ababab;
  box-shadow: 9px 9px 13px #848484, -9px -9px 13px #d2d2d2;
}
.btn-container:hover {
  cursor: pointer;
  border-radius: 40px;
  background: #ababab;
  box-shadow: inset 9px 9px 13px #848484, inset -9px -9px 13px #d2d2d2;
}
</style>