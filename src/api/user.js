import request from '@/utils/request'

export const reqLogin = data =>
  request({
    url: '/vue3-admin-template/user/login',
    method: 'POST',
    data
  })

export const reqUserInfo = token =>
  request({
    url: '/vue3-admin-template/user/info',
    method: 'GET',
    params: { token }
  })
