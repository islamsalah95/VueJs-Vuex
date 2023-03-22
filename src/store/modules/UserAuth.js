import axios from 'axios';
export default {
//   namespaced: true,
  state() {
    return {
      expiresIn: null,
      idToken: null,
      localId: null,
      refreshToken: null,
    };
  },

  getters: {
    expiresIn(state) {
      return state.expiresIn;
    },
    idToken(state) {
      return state.idToken;
    },
    localId(state) {
      return state.localId;
    },
    refreshToken(state) {
      return state.refreshToken;
    },
  },
  mutations: {
    expiresIn(state, payload) {
      state.expiresIn = payload;
    },
    idToken(state, payload) {
      state.idToken = payload;
    },
    localId(state, payload) {
      state.localId = payload;
    },
    refreshToken(state, payload) {
      state.refreshToken = payload;
    },
  },
  actions: {
    signup(context, payload) {
      const headers = { "Content-Type": "application/json" };
      axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZuisjR0zcjBqbbmoGb-kZb4kTPE15xbo",
          {
            email: payload.email,
            password: payload.password,
          },
          headers
        )
        .then(function (response) {
          console.log(response);
          context.commit("expiresIn", response.data.expiresIn);
          context.commit("idToken", response.data.idToken);
          context.commit("localId", response.data.localId);
          context.commit("refreshToken", response.data.refreshToken);
        })
        .catch(function (error) {
          console.log(error);
        });

    },
  },
};
