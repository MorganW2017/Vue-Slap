import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        // THIS IS THE LOCAL COPY OF ALL DATA FOR THE APPLICATION
        players: [
            {
                picture: '//placehold.it/100x100',
                health: 100,
                playerName: 'Mark',
                attacks: {
                    slap: 1,
                    kick: 5
                }
            },
            {
                picture: '//placehold.it/100x100',
                health: 100,
                playerName: 'D$',
                attacks: {
                    punch: -5,
                    haduken: -1000
                }
            },
            {
                picture: '//placehold.it/100x100',
                health: 100,
                playerName: 'Jakob',
                attacks: {
                    tickle: -100
                }
            },
            {
                picture: '//placehold.it/100x100',
                health: 10,
                playerName: 'J-Dawg',
                attacks: {
                    flu: 10000
                }
            }
        ]
    },
    mutations: {
        // FUNCTIONS THAT CAN CHANGE THE STATE
        slap(state, payload) {
            // DATA MUTATION
            payload.player.health -= payload.player.attacks[payload.attack]
        }
    },
    actions: {
        // FUNCTIONS THAT REQUESTS TO CHANGE DATA
        slap({ commit, dispatch }, payload) {
            // BUSINESS LOGIC
            if (payload.player.health > 0) {
                // ALLOW THE SLAP
                commit('slap', payload)
            } else {
                // YOU MONSTER
                console.log('nope')
            }
        }
    }

})