import setRequest from '@lib/utils/http/Request';
import setResponse from '@lib/utils/http/Response';
import axios from 'axios';

const http = axios.create({
  baseURL: `/`,
  timeout: 60000, // 30000, // ms 단위
  headers: {
    'Content-type': 'application/json',
  },
});

setResponse(http);
setRequest(http);

export default http;
