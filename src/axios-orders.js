import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burgerbuillder.firebaseio.com/'
})

export default instance