import axios from 'axios'
import { dataUrl } from './dataUrl'

export function getData() {
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  return axios.get(dataUrl())
}
