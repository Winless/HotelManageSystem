import request from '@/utils/request'

export function checkIn(params) {
    return request({
        url: '/api/order/checkIn',
        method: 'post',
        data: params
    })
}

export function orderCheckIn(params) {
    return request({
        url: '/api/order/orderCheckIn',
        method: 'post',
        data: params
    })
}

export function fetchOrderList(params) {
    return request({
        url: '/api/order/list',
        method: 'post',
        data: params
    })
}

export function fetchOrderItemList(params) {
    return request({
        url: '/api/order/orderItemList',
        method: 'get',
        params
    })
}

export function getBusinessReport(params) {
    return request({
        url: '/api/order/businessReport',
        method: 'get',
        params
    })
}

export function cancelOrder(params) {
    return request({
        url: '/api/order/cancel',
        method: 'get',
        params
    })
}

export function deleteOrder(params) {
    return request({
        url: '/api/order/delete',
        method: 'get',
        params
    })
}

export function checkOut(params) {
    return request({
        url: '/api/order/checkOut',
        method: 'get',
        params
    })
}