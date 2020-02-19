import axios from 'axios';

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token && token !== 'undefined') {
    config.headers.authorization = token;
  } else {
    window.location.href = '/login';
  }

  return config;
});

axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    console.log('请求报错', error);
    return Promise.reject(error);
  }
)

export default axios;
