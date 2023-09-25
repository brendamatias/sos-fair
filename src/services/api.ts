import axios from 'axios'

const api = axios.create({
  baseURL: 'https://help-fair-api.vercel.app/',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sos-fair') ?? ''
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`

  return config
})

export default api
