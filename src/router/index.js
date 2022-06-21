import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login'
import Home from '../views/Home'
import Ranking from '../views/Ranking'
import Cards from '../views/Cards'
import NewGame from '../views/NewGame'

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking
  },
  {
    path:'/cards',
    name:'Cards',
    component: Cards
  },
  {
    path:'/newGame',
    name: 'NewGame',
    component: NewGame,
    props:true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
document.title = "Memokemon - Memo game";

export default router
