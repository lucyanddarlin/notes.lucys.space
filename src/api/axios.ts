import http from './http'
import type { AxiosRequestConfig } from 'axios'

export default <T = any>(obj: AxiosRequestConfig) => {
  return new Promise<T>((resolve, reject) => {
    http<T>({
      url: obj.url,
      data: obj.data || {},
      method: obj.method || 'GET',
      responseType: obj.responseType || 'json',
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
