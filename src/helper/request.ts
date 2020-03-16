import axios from 'axios'
const defaultSettings = require('@/config')
/* 创建axios实例 */
const mainService = axios.create({
  baseURL: defaultSettings.baseApi, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    source: defaultSettings.source
  },
  validateStatus: (status) => {
    return status < 400
  }
});

/* request拦截器 */


/* respone拦截器 */


export default mainService

export { }
