import axios from 'axios'

const base = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_BASE_URL
})

export default base