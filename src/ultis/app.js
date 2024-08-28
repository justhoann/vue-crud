import axios from 'axios'

const API = {
  request: (config) => {
    const { method = 'GET', url, params, baseURL = import.meta.env.VITE_API_URL } = config
    // const accessToken = localStorage.getItem('')
    const requestConfig = {
      method,
      url,
      baseURL,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
        // Authorization: `Bearer ${accessToken}`
      },
      timeout: 20000, //timeout error message 20s.
      timeoutErrorMessage: 'Quá thời gian chờ dịch vụ'
    }

    if (params) {
      if (typeof method === 'string' && method.toLowerCase().trim() === 'get') {
        requestConfig.params = params
      } else {
        console.log('params:', params)
        requestConfig.data = params
      }
    }
    return axios(requestConfig)
      .then((response) => {
        return response?.data
      })
      .catch((e) => {
        console.log('error: ', e)
        const status = e?.status || 500
        const message = e?.message || ''
        return Promise.reject({ status, message })
      })
  }
}

export default API
