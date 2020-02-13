import request from './request';

export const login = (params: object): Promise<any> => {
  return request.post('/user/login', params);
}

export const getCurrent = (params: object): Promise<any> => {
  return request.get('/user/current', {});
}