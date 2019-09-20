import * as types from './mutation_types'

export default {
  [types.LOAD_DATA](state) {
    state.isLoading = true
  },
  [types.LOAD_DATA_SUCCESS](state, data) {
    // Do any needed data transformation to the received payload here
    state.skills = data
    state.isLoading = false
  }
}
