/**
 * 存放项目中所有的接口地址
 */

const apiHost = 'http://localhost:8080/api'

/**
 * 用户账户相关的接口
 */
const AccountsApis = {
  // 用户登录
  loginUrl: apiHost + '/accounts/user/api/login/',
  // 用户退出登录
  logoutUrl: apiHost + '/accounts/user/api/logout/',
  // 用户信息
  userInfoUrl: apiHost + '/accounts/user/api/info/',
  // 用户注册
  registerUrl: apiHost + '/accounts/user/api/register/'
}

/**
 * 系统模块的接口
 */
const SystemApis = {
  // 轮播图列表
  sliderListUrl: apiHost + '/system/slider/list/',
  // 发送短信验证码
  sendSmsCodeUrl: apiHost + '/system/send/sms/'
}

/**
 * 景点模块的接口
 */
const SightApis = {
  // 景点列表
  sightListUrl: apiHost + '/sight/sight/list/',
  // 景点详情
  sightDetailUrl: apiHost + '/sight/sight/detail/#{id}/',
  // 景点下的门票列表
  sightTicketListUrl: apiHost + '/sight/ticket/list/#{id}/',
  // 景点下的评论列表
  sightCommentListUrl: apiHost + '/sight/comment/list/#{id}/',
  // 景点下的图片列表
  sightImageListUrl: apiHost + '/sight/image/list/#{id}/'
}

export {
  SystemApis,
  SightApis,
  AccountsApis
}
