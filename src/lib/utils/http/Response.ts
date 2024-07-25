import type { AxiosInstance, AxiosResponse } from 'axios';

const setResponse = (http: AxiosInstance) => {
  http.interceptors.response.use(
    async (response: AxiosResponse<any>) => {
      if (!response) {
        throw new Error('Response is undefined');
      }

      const API_PATH = response.config.url;
      console.group('===== API RESPONSE =====');
      console.log(
        `%cAPI_PATH: %c${API_PATH}`,
        'font-weight: bold;',
        'color:coral; font-weight: bold;',
      );
      console.log(`%cRESPONSE: `, 'font-weight: bold;', response);

      if (response.config.responseType === 'blob') {
        console.groupEnd();
        return response;
      }

      const originalRequestHead = response.data.head;
      const originalRequestBody = response.data.body;

      if (originalRequestHead) {
        console.log(`%cRESPONSE DATA HEAD: `, 'font-weight: bold;', originalRequestHead);
        console.log(`%cRESPONSE DATA BODY: `, 'font-weight: bold;', originalRequestBody);
      }
      console.groupEnd();
      return response; // 항상 AxiosResponse 반환
    },
    (error: any) => {
      console.group('===== API ERROR =====');
      console.groupEnd();

      if (error.response && error.response.status === 401) {
        window.location.href = '/';
      }
      return Promise.reject(error);
    },
  );
};

export default setResponse;
