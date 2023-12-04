// 声明文件，定义全局变量
declare module 'crypto-js'
declare interface IHttp {
  request<T>(method: string, url: string, params?: unknown): Promise<T>
}
