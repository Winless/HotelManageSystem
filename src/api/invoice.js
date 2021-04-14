import request from '@/utils/request'

export function openInvoice(params) {
    return request({
        url: '/api/invoice/openInvoice',
        method: 'get',
        params
    })
}

export function list(params) {
    return request({
        url: '/api/invoice/list',
        method: 'get',
        params
    })
}