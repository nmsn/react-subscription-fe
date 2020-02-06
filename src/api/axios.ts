import axios from 'axios';
import { message } from 'antd';

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  
  // TODO 获取 token
  const token = localStorage.get('token');
  
  if (token) {
    config.headers.token = token;
  } else {
    window.location.href = '/auth/login';
  }
  

  return config;
});

axios.interceptors.response.use(
  (response) => {

    const data = response.data

    if (data.code !== 0) {
      message.error(data.message);
    }
    
    return Promise.resolve(data)

    
  },
  (error) => {
    console.log('请求报错', error);
    // 请求报错
    return Promise.reject(error);
  }
)

export default axios;
