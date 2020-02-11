import axios from 'axios';
import { message } from 'antd';

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  
  // TODO 获取 token
  const token = localStorage.getItem('token');
  
  if (token && token !== 'undefined') {
    config.headers.authorization = token;
  }
  // } else {
  //   window.location.href = '/login';
  // }
  

  return config;
});

axios.interceptors.response.use(
  (response) => {
    const token = response.headers.authorization;
    const preToken = localStorage.getItem('token');
    
    if (token && token !== preToken) {
      localStorage.setItem('token', token);
    }

    const data = response.data

    if (data.code !== 0) {
      message.error(data.message);
    }
    
    return Promise.resolve(response)

    
  },
  (error) => {
    console.log('请求报错', error);
    // 请求报错
    return Promise.reject(error);
  }
)

export default axios;
