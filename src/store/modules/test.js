import { todoGet } from '@/backend-endpoints'
import * as mutationTypes from './mutation-types';
import * as actionTypes from './action-types';
const state = () => ({
    test: null
})

const mutations = {
    [mutationTypes.SET_TEST](state, payload) {
        state.test = payload
    }
}

const actions = {
    async [actionTypes.GET_TEST]({
        commit
    }) {
        try {
            const {
                data
            } = await todoGet({
                id: 1
            })
            console.log(data);
            commit(mutationTypes.SET_TEST, data)
        } catch (err) {
            console.error(err);
        }
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}