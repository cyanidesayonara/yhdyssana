import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aboutHeader: 'About',
    formHeader: 'Kirjoita yhdyssana - yhteen tai erikseen',
    listHeader: 'Sanat',
    sanat: ['Sana', 'Sana', 'Sana', 'Sana']
  },
  mutations: {},
  actions: {}
})
