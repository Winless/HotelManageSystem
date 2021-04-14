import request from '@/utils/request'

export function getRoleList() {
    return request({
        url: '/api/manage/roleList',
        method: 'get',
    })
}