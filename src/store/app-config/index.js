
export default {
    state: {
      usuarios: [],
      loading: false,
      loggedUser: false,
      user: {},
      token:"",
      cards:[]
    },
    getters: {},
    mutations: {
      setCards(state,value){
        state.cards = value
      },
      setToken(state,value){
        state.token = value
      },
      userLog(state,value){
        state.user = value
      },
      loggedUser(state, value) {
        state.loggedUser = value;
      },   
      saveUsuarios(state, value) {
        state.usuarios = value;
      },      
      changeLoading(state, val) {
        state.loading = val;
      },
    },
    actions: {},
  };
  