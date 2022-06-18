import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../components/Login'
import home from '../views/Home'
import ranking from '../views/Ranking'
import cards from '../views/Cards'

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Login',
    component: login
  },
  {
    path: '/home',
    name: 'Home',
    component: home
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: ranking
  },
  {
    path:'/cards',
    name:'Cards',
    component: cards
  }

  /* {
    path: '/home',
    component: layout,
    children: [
      {
        name: 'import',
        path: '/import-file',
        component: importFile,
      },
 
      {
        name: 'user',
        path: '/user',
        component: user,
      },
      {
        name: 'Proyect',
        path: '/proyect',
        component: proyect,
      },
      {
        name: 'Graphic',
        path: '/graphic',
        component: graphic,
      },
      {
        name: 'DynamicTable',
        path: '/dynamic-table',
        component: dynamicTable,
      },
      {
        name: 'ProyectUser',
        path: '/proyect-user',
        component: proyectUser,
      },
      {
        name: 'HourTasks',
        path: '/tasks',
        component: hourTasks,
      },
      {
        name: '',
        path: '/graphic-user',
        component: GraphicUser,
      },
    ],
  }, */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
document.title = "Memokemon - Memo game";

export default router
