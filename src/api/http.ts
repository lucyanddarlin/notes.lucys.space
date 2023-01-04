/* eslint-disable no-unused-vars */
import axios from 'axios'

import type {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

interface newAxiosInstance extends AxiosInstance {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse<any>>
  }
}

const http: newAxiosInstance = axios.create({
  baseURL: 'https://www.wanjiacloud.top/api',
  timeout: 3 * 1000,
  // withCredentials: true,
})

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.params = { ...config.params }
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response: any) => {
    if (response.data.data.length > 0) {
      const newData: any = []
      response.data.data.forEach((item: any) => {
        let data: any = {}
        data = Object.assign({}, item.attributes)
        data['id'] = item.id
        newData.push(data)
      })
      response.data.data = newData
    }
    return response
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default http
