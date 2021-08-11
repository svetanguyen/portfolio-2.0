import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      projectCards: [
        { projectTitle: "Oldflamelabel", projectCoverPhoto: "stock-1" },
        { projectTitle: "Talor", projectCoverPhoto: "stock-2" },
        { projectTitle: "Pokemon desktop game", projectCoverPhoto: "stock-3" },
        { projectTitle: "Instagram clone", projectCoverPhoto: "stock-4" },
      ]
    },
    mutations: {      
    },
    actions: {
    },
    modules: {
    }
  })
  