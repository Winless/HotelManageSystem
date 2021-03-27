import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/api/room/list',
    method: 'get',
    params
  })
}
