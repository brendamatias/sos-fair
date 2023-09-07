import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('sos-fair') ?? ''
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`

  return config
})

export default api
