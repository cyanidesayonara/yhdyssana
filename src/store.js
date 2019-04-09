import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aboutHeader: 'About',
    formHeader: 'Kirjoita yhdyssana - yhteen tai erikseen',
    listHeader: 'Sanat',
    words: []
  },
  mutations: {
    MUTATE_WORDS: (state, words) => {
      Vue.set(state, 'words', [...words])
    }
  },
  actions: {
    loadWords: (context, words) => {
      context.commit('MUTATE_WORDS', words)
    }
  }
})
