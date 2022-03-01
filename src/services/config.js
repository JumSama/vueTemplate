// 不同环境配置不同请求根路径
const devBaseURL = "your development baseURL";
const proBaseURL = "your production baseURL";
// 判断是开发环境还是生产环境
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 10000;
