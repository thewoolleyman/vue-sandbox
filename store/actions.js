import { getData } from '../api/getData'
import parseData from '../util/parseData'
import * as types from './mutation_types'

export const loadData = ({ commit }) => commit(types.LOAD_DATA)
export const loadDataSuccess = ({ commit }, data) =>
  commit(types.LOAD_DATA_SUCCESS, data)

export const fetchData = ({ dispatch }) => {
  dispatch('loadData')

  getData()
    .then((response) => {
      const parsedData = parseData(response.data)
      const skills = parsedData.skillsList
      dispatch('loadDataSuccess', skills)
    })
    .catch((error) => {
      // just display the error in the list
      dispatch('loadDataSuccess', [{ id: 'error', desc: error.response.data }])
    })
}
