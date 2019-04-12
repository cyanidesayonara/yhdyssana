import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aboutHeader: 'About',
    wordFormHeader: 'Kirjoita yhdyssana - yhteen tai erikseen',
    wordListHeader: 'Sanat',
    words: [],
    word: ''
  },
  mutations: {
    MUTATE_WORDS: (state, words) => {
      Vue.set(state, 'words', [...words])
    },
    MUTATE_WORD: (state, word) => {
      Vue.set(state, 'word', word)
    }
  },
  actions: {
    loadWords: (context, words) => {
      context.commit('MUTATE_WORDS', words)
    },
    getWord(context, word) {
      context.commit('MUTATE_WORDS', word)
    },
    setWord(context, word) {
      context.commit('MUTATE_WORD', word)
    }
  }
})
