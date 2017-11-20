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
                    slap: -1,
                    kick: -5
                },
                items: {
                    vr: 15,
                    ar: 1
                }
            },
            {
                picture: '//placehold.it/100x100',
                health: 100,
                playerName: 'D$',
                attacks: {
                    punch: 5,
                    haduken: 1000
                },
                items: {
                    canadianVacation: 1000000,
                    hunting: 500
                }
            },
            {
                picture: '//placehold.it/100x100',
                health: 100,
                playerName: 'Jakob',
                attacks: {
                    fixingBugs: -25
                },
                items: {
                    energyDrink: 50
                }
            },
            {
                picture: '//placehold.it/100x100',
                health: 10,
                playerName: 'J-Dawg',
                attacks: {
                    flu: -10000
                },
                items: {
                    pills: 25
                }
            }
        ]
    },
    mutations: {
        // FUNCTIONS THAT CAN CHANGE THE STATE
        slap(state, payload) {
            // DATA MUTATION
            payload.player.health += payload.player.attacks[payload.attack]
        },
        ability(state, payload) {
            payload.player.health += payload.player.items[payload.item]

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
        },
        ability({ commit, dispatch }, payload) {
            // BUSINESS LOGIC
            if (payload.player.health > 0) {
                // ALLOW THE SLAP
                commit('ability', payload)
            } else {
                // YOU MONSTER
                console.log('nope')
            }
        }
    }

})