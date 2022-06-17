
export default {
    state: {
      usuarios: [],
      loading: false
    },
    getters: {},
    mutations: {
      
      saveUsuarios(state, value) {
        state.usuarios = value;
      },      
      changeLoading(state, val) {
        state.loading = val;
      },
    },
    actions: {},
  };
  