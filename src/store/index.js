import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //All data lives here
        players: [
            {
                picture: '//placehold.it/100x100',
                health: 100,
                playerName: 'Mark'
            },
            {
                picture: '//placehold.it/100x100',
                health: 100,
                playerName: 'D$'
            },
            {
                picture: '//placehold.it/100x100',
                health: 100,
                playerName: 'Jakob'
            },
            {
                picture: '//placehold.it/100x100',
                health: 100,
                playerName: 'J-Dawg'
            }
        ]
    },
    mutations: {
        //Functions that can change the state
    },
    actions: {
        //Functions that requests to change data
        slap({ commit, dispatch }, payload) {

        }
    }
})