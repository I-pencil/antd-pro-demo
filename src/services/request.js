import axios from 'axios';
import { message } from 'antd';
import '../utils/promise-request';

const ax = axios.create();

const request = (options) => {
  const cloneOptions = Object.assign({}, options)
  if (!cloneOptions.method || String.prototype.toLocaleLowerCase.call(cloneOptions.method) === 'get') {
    cloneOptions.params = options.params || options.data;
    delete cloneOptions.data;
  }
  const result = ax(cloneOptions)
  return result;
};

const get = (url, data) => request({ url, params: data, method: 'get' });
const post = (url, data) => request({ url, data, method: 'post' });

/* ------------------ axios 拦截器 ------------------------ */

// const requestSuccessFunc = (config) => {
//   return config
// };

const responseSuccessFunc = (response) => {
  const { data } = response;
  switch (data.code) {
    case 0:
      return data.data;
    default:
      message.info(data.msg);
  }
  throw data;
};

const responseFailFunc = (response) => {
  const { code, message, config } = response;
  const error = { code, msg: message };

  // 主动取消请求
  if (axios.isCancel(response)) {
    error.code = 'canceled';
    error.msg = '请求终止';
  } else if (message && message.includes('timeout')) {
    // 超时处理
    error.code = 'timeout';
    error.msg = config.timeoutMsg || '页面超时';
    message.info(error.msg);
  } else if (message && message.includes('resource')) {
    // 资源加载失败处理
    error.code = 'timeout';
    error.msg = config.timeoutMsg || '页面超时';
    message.info(error.msg);
  } else if (message && message.includes('Network Error')) {
    // 无网络处理
    error.code = 'unconnected';
    error.msg = '无网络';
  }
  throw error;
}

// ax.interceptors.request.use(requestSuccessFunc);
ax.interceptors.response.use(responseSuccessFunc, responseFailFunc);

export {
  get,
  post,
}
export default ax;
