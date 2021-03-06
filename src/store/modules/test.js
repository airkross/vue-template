import { todoGet } from '@/backend-endpoints'
import * as mutationTypes from './mutation-types';
import * as actionTypes from './action-types';
const state = () => ({
    test: null,
    test1: 1,
    test2: 2
})

const mutations = {
    [mutationTypes.SET_TEST](state, payload) {
        state.test = payload
    },
    [mutationTypes.SET_TEST1](state, payload) {
        state.test1 = payload
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
    testGetter: (state) => +state.test1 + +state.test2
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}