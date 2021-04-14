import request from '@/utils/request'

export function repair(params) {
    return request({
        url: '/api/roomTask/repair',
        method: 'post',
        data: params
    })
}

export function roomTaskList(params) {
    return request({
        url: '/api/roomTask/list',
        method: 'get',
        params
    })
}

export function done(params) {
    return request({
        url: '/api/roomTask/done',
        method: 'get',
        params
    })
}