import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      projectCards: [
        { projectTitle: "Pokemon desktop game", projectCoverPhoto: "pokemon", technologies: "Vanilla JS, HTML/CSS", link: "https://pokemon-fight-game.netlify.app/" },
        { projectTitle: "Instagram clone", projectCoverPhoto: "IG clone", technologies: "React, Tailwind, HTML/CSS, Firebase", link: "https://insta-clone-5b854c.netlify.app/" },
      ]
    },
    mutations: {      
    },
    actions: {
    },
    modules: {
    }
  })
  