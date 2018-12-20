import axios from "axios"
import { API_KEY, API_PATH } from "./constant"

const ajax = axios.create({
  baseURL: API_PATH
})
ajax.interceptors.request.use(function(config) {
  // Do something before request is sent
  return Object.assign({}, config, {
    params: Object.assign({}, config.params, { api_key: API_KEY })
  })
})

export default ajax
