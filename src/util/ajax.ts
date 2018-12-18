import axios from "axios"

const APIKey = "945512d2afa9c271df9a539dc63fabad"
const ajax = axios.create({
  baseURL: "http://api.themoviedb.org/3/"
})
ajax.interceptors.request.use(function(config) {
  // Do something before request is sent
  return Object.assign({}, config, {
    params: Object.assign({}, config.params, { api_key: APIKey })
  })
})

export default ajax
