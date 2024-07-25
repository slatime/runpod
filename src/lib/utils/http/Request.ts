import type { AxiosInstance } from 'axios';
// import { getLocalStorage } from '@lib/util/localstorage.ts';
const setRequest = (http: AxiosInstance) => {
  http.interceptors.request.use(
    config => {
      if (typeof window !== 'undefined') {
        // const accessToken = getLocalStorage('accessToken');
        // if (accessToken) {
        //   config.headers.common['Authorization'] = `Bearer ${accessToken}`;
        // }
        return config;
      }
      return config;
    },
    error => Promise.reject(error),
  );
};

export default setRequest;
