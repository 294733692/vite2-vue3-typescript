import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'http://api.github.com'

// 创建 axios 实例
const axios = Axios.create({
  baseURL,
  timeout: 200000 // 请求超时 20s
})

// 请求拦截器（发起请求之前进行拦截）
axios.interceptors.request.use(
  (response) => {
    /**
     * 根据项目的实际情况来对 config 做处理
     * 这里直接返回
     */
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器 (获取到响应时的拦截)
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据项目的实际情况来对 response 和 error 做处理
     * 这里直接返回
     */
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
