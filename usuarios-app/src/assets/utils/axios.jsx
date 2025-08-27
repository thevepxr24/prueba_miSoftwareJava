import axios from 'axios'

const clientAxios = axios.create({
  baseURL: import.meta.env.VITE_JAVA_API
})

export default clientAxios