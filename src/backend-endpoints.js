import axios from './plugins/axios'
export const todoGet = (payload) => axios.get(`todos/${payload.id}`)