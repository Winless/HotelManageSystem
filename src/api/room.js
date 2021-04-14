import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/api/room/list',
    method: 'get',
    params
  })
}

export function updateRoomStatus(params) {
  return request({
    url: '/api/room/updateRoomStatus',
    method: 'get',
    params
  })
}

export function fetchForm() {
  return request({
    url: '/api/room/form',
    method: 'get'
  })
}

export function fetchRoomTypeList() {
  return request({
    url: '/api/room/roomTypeList',
    method: 'get'
  })
}

export function fetchRoomInfo(params) {
  return request({
    url: '/api/room/roomInfo',
    method: 'get',
    params
  })
}

export function arrangeRoom(params) {
  return request({
    url: '/api/room/arrangeRoom',
    method: 'get',
    params
  })
}