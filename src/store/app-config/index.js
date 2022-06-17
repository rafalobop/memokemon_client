
export default {
    state: {
      usuarios: [],
      loading: false,
      loggedUser: false
    },
    getters: {},
    mutations: {
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
  