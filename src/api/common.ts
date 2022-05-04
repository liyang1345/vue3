// 公共接口数据
import request from '@/utils/request';

// 公共数据接口类型
export interface commonResponseData<T=any> {
  status:string
  msg:string
  data:T
}
export const getUserInfo = () => request({
  method: 'GET',
  url: '/login/info',
});
// export const getotherUserInfo = (data:any) => request({
//   // url: '/ai-admin/v1/auth/captcha',
//   // method: 'get',
//   // params: data,
// });
export const getotherUserInfo = (data:any) => request.get<commonResponseData<{
  captcha:string
  link:string
}>>('/ai-admin/v1/auth/captcha', { data });
