import request from './request';

export const update = (params: object): Promise<any> => {
  return request.post('/subscribe/update', params);
}

export const get = (): Promise<any> => {
  return request.get('/subscribe', {});
}