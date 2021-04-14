import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/manage/login',
    method: 'POST',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function getManagerList() {
  return request({
    url: '/api/manage/managerList',
    method: 'get'
  })
}

export function getWorkerInfo(params) {
  return request({
    url: '/api/manage/workerInfo',
    method: 'get',
    params
  })
}

export function update(params) {
  return request({
    url: '/api/manage/update',
    method: 'post',
    data: params
  })
}

export function createWorker(params) {
  return request({
    url: '/api/manage/createWorker',
    method: 'post',
    data: params
  })
}

export function deleteWorker(params) {
  return request({
    url: '/api/manage/deleteWorker',
    method: 'get',
    params
  })
}
