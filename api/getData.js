import axios from 'axios'

export function getData() {
  axios.defaults.headers.common['Content-Type'] = 'application/json'

  let url
  switch (process.env.NODE_ENV) {
    // case 'production':
    //   url = ''
    //   break
    case 'development':
      url = 'http://localhost:3000/data-fixture.yml'
      break
    case 'test':
      url = ''
      break
    default:
      throw new Error(`unexpected NODE_ENV: ${process.env.NODE_ENV}`)
  }
  return axios.get(url)
}
