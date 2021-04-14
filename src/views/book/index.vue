<template>
  <div class="app-container">
    <div style="background-color: #ccc; height: 2px; width: 100%; margin: 10px 0 18px 0"></div>
    <div class="topbar">
      <div style="display:flex;margin:15px 0 10px 10px;">
        <el-button>全部订单</el-button>
        <el-button>当天预抵</el-button>
        <el-button>当天预离</el-button>
        <el-input v-model="orderSearch" placeholder="请输入订单号" suffix-icon="el-icon-search" style="width: 220px;margin-left: 20px;margin-top:1px;" />
        <el-input v-model="phoneSearch" placeholder="请输入联系号码" suffix-icon="el-icon-search" style="width: 220px;margin-left: 20px;margin-top:1px;" />
        <el-input v-model="BookingName" placeholder="请输入预约人" suffix-icon="el-icon-search" style="width: 220px;margin-left: 20px;margin-top:1px;" />
      </div>
      <div class="searchBar">
        <div class="searchSection">
          <span>抵店日期：</span>
          <el-date-picker v-model="checkin" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
        </div>
        <div class="searchSection">
          <span>离店日期：</span>
          <el-date-picker v-model="checkout" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
        </div>
        <div class="searchSection">
          <span>预约日期：</span>
          <el-date-picker v-model="bookingTime" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
        </div>
      </div>
    </div>
    <div style="background-color: #ccc; height: 2px; width: 100%; margin: 10px 0 18px 0"></div>
    <el-table :data="list" style="width: 100%;margin-top: 40px" fit :header-cell-style="{background:'#eef1f6',color:'#000',textAlign:'center'}" :cell-style="{ textAlign: 'center' }">
      <el-table-column prop="orderSn" label="订单号" width="200px" />
      <el-table-column prop="memberName" label="预约人" />
      <el-table-column prop="memberTelephone" label="联系电话" />
      <el-table-column prop="roomCount" label="房间数" />
      <el-table-column prop="checkInTime" label="抵店时间" />
      <el-table-column prop="checkOutTime" label="离店时间" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="payAmount" label="订单金额" />
      <el-table-column prop="orderStatus" label="状态" :formatter="showOrderStatus" />
      <el-table-column prop="action" label="操作">
        <template slot-scope="scope">
          <div v-if="scope.row.orderStatus == 0">
            <el-button type="text" size="small" @click="writeInformation(scope.row)">入住</el-button>
            <el-button type="text" size="small" @click="cancelOrder(scope.row.orderSn)">取消</el-button>
          </div>
          <div v-if="scope.row.orderStatus == 1">
            <el-button type="text" size="small" @click="checkOut(scope.row.orderSn)">退房</el-button>
            <el-button type="text" size="small">换房</el-button>
            <el-button type="text" size="small">延住</el-button>
          </div>
          <div v-if="scope.row.orderStatus == 2">
            <el-button type="text" size="small" @click="openInvoice(scope.row.orderSn)">开发票</el-button>
            <el-button type="text" size="small" @click="deleteOrder(scope.row.orderSn)">删除订单</el-button>
          </div>
          <div v-if="scope.row.orderStatus == 3">
            <el-button type="text" size="small" @click="deleteOrder(scope.row.orderSn)">删除订单</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="住客信息" :visible.sync="dialogVisible" width="30%">
      <div class="el-dialog-div">
        <div class="order_remark" style="margin-top: 30px; font-size: 14px">
          <div style="padding: 0 0 15px 58px" v-if="checkInRoom.length <= 0">
            <span style="color: red">请先排房，再录入住客信息</span>
          </div>
          <div style="padding: 0 0 15px 58px" v-if="checkInRoom.length == 1">
            <div style="margin: 0 0 15px 0">
              住客姓名：<el-input v-model="checkInRoom[0].checkInPerson" placeholder="每间只需填一人" size="small" style="width: 250px"></el-input>
            </div>
            <div style="margin: 0 0 15px 0">
              证件号码：<el-input v-model="checkInRoom[0].checkInPersonIdCard" placeholder="身份证" size="small" style="width: 250px"></el-input>
            </div>
          </div>
          <div v-if="checkInRoom.length > 1">
            <div style="margin: 0 0 15px 58px" v-for="(item, index) of checkInRoom" :key="index">
              <h5>住客{{index + 1}}</h5>
              <div style="margin: 0 0 15px 0">
                住客姓名：<el-input v-model="item.checkInPerson" placeholder="每间只需填一人" size="small" style="width: 250px"></el-input>
              </div>
              <div style="margin: 0 0 15px 0">
                证件号码：<el-input v-model="item.checkInPersonIdCard" placeholder="身份证" size="small" style="width: 250px"></el-input>
              </div>
            </div>
          </div>
          <div style="text-align:center; margin: 20px 0">
            <el-button type="primary" @click="checkIn">入住</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { fetchList } from '@/api/room'
import { fetchOrderList, fetchOrderItemList, orderCheckIn, deleteOrder, cancelOrder, checkOut } from '@/api/order'
import { openInvoice } from "@/api/invoice"
import Pagination from '@/components/Pagination'

export default {
  name: 'Booking',
  components: { Pagination },
  data() {
    return {
      dialogVisible: false,
      phoneSearch: '',
      orderSearch: '',
      BookingName: '',
      bookingTime: '',
      total: 0,
      listQuery: {
        page: 1
      },
      checkin: '',
      checkout: '',
      list: [],
      orderEntity: null,
      checkInRoom: []
    }
  },

  created() {
    this.getList()
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },

    getList() {
      fetchOrderList(this.listQuery).then(res => {
        this.list = res.data.orderList
        this.total = this.list.length
        console.log(this.list)
      })
    },

    showOrderStatus(row, column) {
      if (row.orderStatus == 0) {
        return '预订'
      } else if (row.orderStatus == 1) {
        return '在住'
      } else if (row.orderStatus == 2) {
        return '已完成'
      } else {
        return '已取消'
      }
    },

    writeInformation(orderEntity) {
      this.dialogVisible = true
      this.orderEntity = orderEntity
      // 先根据订单号查出所有房间
      fetchOrderItemList({ orderSn: orderEntity.orderSn }).then(res => {
        console.log(res.data)
        this.checkInRoom = res.data
      })
    },

    checkIn() {
      orderCheckIn(this.orderEntity).then(res => {
        if (res.code == 0) {
          location.reload()
        }
      })
    },
    checkOut(orderSn) {
      checkOut({ orderSn }).then(res => { })
    },

    cancelOrder(orderSn) {
      cancelOrder({ orderSn }).then(res => {
        location.reload()
      })
    },

    deleteOrder(orderSn) {
      deleteOrder({ orderSn }).then(res => {
        location.reload()
      })
    },

    openInvoice(orderSn) {
      openInvoice({ orderSn }).then(res => { })
    }
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  margin: 55px 0;
}
.bottonsearch {
  margin: 30px;
}
.searchBar {
  display: flex;
  margin-top: 30px;
  margin-left: 18px;
}
.searchSection {
  margin-right: 40px;
}
.el-dialog-div {
  height: 60vh;
  overflow: auto;
}
</style>
