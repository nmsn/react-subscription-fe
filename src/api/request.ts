import axios from "./axios";

export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH";

function apiAxios(method: Method, url: string, params: object) {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      data: method === "POST" || method === "PUT" ? params : null,
      params:
        method === "GET" || method === "DELETE" || method === "PATCH"
          ? params
          : null,
      withCredentials: false,
    }).then(
      (res: any) => {
        resolve(res);
      },
      (err: any) => {
        reject(err);
      },
    );
  });
}

export default {
  get: (url: string, params: object) => {
    return apiAxios("GET", url, params);
  },
  post: (url: string, params: object) => {
    return apiAxios("POST", url, params);
  },
  put: (url: string, params: object) => {
    return apiAxios("PUT", url, params);
  },
  delete: (url: string, params: object) => {
    return apiAxios("DELETE", url, params);
  },
  patch: (url: string, params: object) => {
    return apiAxios("PATCH", url, params);
  },
};
