import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      projectCards: [
        { projectTitle: "Oldflamelabel", projectCoverPhoto: "Old flame", technologies: "Shopify, Liquid, JS, HTML/CSS", link: "https://oldflamelabel.com/" },
        { projectTitle: "Talor", projectCoverPhoto: "Talor", technologies: "Shopify, Liquid, JS, HTML/CSS", link: "https://www.talor.co.uk/" },
        { projectTitle: "Pokemon desktop game", projectCoverPhoto: "pokemon", technologies: "Vanilla JS, HTML/CSS" },
        { projectTitle: "Instagram clone", projectCoverPhoto: "IG clone", technologies: "React, Tailwind, HTML/CSS" },
      ]
    },
    mutations: {      
    },
    actions: {
    },
    modules: {
    }
  })
  