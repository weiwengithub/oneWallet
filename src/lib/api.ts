import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosHeaders } from 'axios';

// 统一业务返回结构
export interface ApiResponse<T = unknown> {
  code: number;
  msg?: string;
  data?: T;
}

// API基础配置
const API_CONFIG = {
  baseURL:
    process.env.NODE_ENV === 'development'
      ? '/api'
      : 'https://wallet-admin.deltax.online/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// 创建axios实例
const api: AxiosInstance = axios.create(API_CONFIG);

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      // 确保 headers 是 AxiosHeaders 实例，然后用 set
      if (!config.headers) {
        config.headers = new AxiosHeaders();
      }
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
      // 如果你还需要 content-type（通常已在实例里配了）
      (config.headers as AxiosHeaders).set('Content-Type', 'application/json');
    }

    // GET 添加时间戳防缓存
    if ((config.method ?? 'get').toLowerCase() === 'get') {
      config.params = {
        ...(config.params as Record<string, unknown>),
        _t: Date.now(),
      };
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// 响应拦截器：直接“拍扁”到 data
api.interceptors.response.use(
  // 关键：这里返回的是服务端 data，而不是 AxiosResponse
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError<ApiResponse>) => {
    // 常见错误处理
    const status = error.response?.status;
    if (status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        // window.location.href = '/login';
      }
    } else if (status === 403) {
      console.error('Access forbidden');
    } else if (status === 500) {
      console.error('Server error');
    }
    // 让调用方能拿到服务端返回的 msg/code
    return Promise.reject(error.response?.data ?? error);
  },
);

// 通用API方法：返回 ApiResponse<T>
export const apiClient = {
  get: <T = unknown>(
    url: string,
    params?: Record<string, unknown>,
  ): Promise<ApiResponse<T>> => {
    return api.get(url, { params });
  },

  post: <T = unknown>(
    url: string,
    data?: Record<string, unknown>,
  ): Promise<ApiResponse<T>> => {
    return api.post(url, data);
  },

  put: <T = unknown>(
    url: string,
    data?: Record<string, unknown>,
  ): Promise<ApiResponse<T>> => {
    return api.put(url, data);
  },

  delete: <T = unknown>(url: string): Promise<ApiResponse<T>> => {
    return api.delete(url);
  },

  patch: <T = unknown>(
    url: string,
    data?: Record<string, unknown>,
  ): Promise<ApiResponse<T>> => {
    return api.patch(url, data);
  },
};

// 具体的API接口方法
export const apiService = {
  // 保存订阅邮箱
  addMail: (data: { mailAddress: string }) => {
    // 如果知道 data 的结构，也可以写成 apiClient.post<YourDataType>(...)
    return apiClient.post('/ext/mail/add', data);
  },
};

export default api;
