export default {
  namespaced: true,
  state: () => ({
    isShowLNB: false,
    isShowRNB: false
  }),
  mutations: {
    updateState (state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    // 파라미터 추가!
    onNav ({ commit }, name) {
      commit('updateState', {
        [`isShow${name}`]: true
      })
    },
    offNav ({ commit }, name) {
      commit('updateState', {
        [`isShow${name}`]: false
      })
    }
  }
}
