import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aboutHeader: 'About',
    wordFormHeader: 'Kirjoita yhdyssana - yhteen tai erikseen',
    wordListHeader: 'Sanat',
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
