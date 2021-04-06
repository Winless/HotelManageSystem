<template>
  <div class="app-container">
    <div style="margin:20px 0 10px 10px;">
      <el-button>全部订单</el-button>
      <el-button>当天预抵</el-button>
      <el-button>当天预离</el-button>
    </div>
    <div class="searchBar">
      <div class="searchSection">
        <span>抵店日期：</span>
        <el-date-picker
          v-model="checkin"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </div>
      <div>
        <span>离店日期：</span>
        <el-date-picker
          v-model="checkout"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      height="100%"
    >
      <el-table-column
        fixed
        prop="orderNumber"
        label="订单号"
      />
      <el-table-column
        prop="bookingName"
        label="预约人"
      />
      <el-table-column
        prop="gender"
        label="性别"
      />
      <el-table-column
        prop="phoneNumber"
        label="联系电话"
      />
      <el-table-column
        prop="roomType"
        label="房间类型"
      />
      <el-table-column
        prop="checkInDate"
        label="抵店日期"
      />
      <el-table-column
        prop="checkOutDate"
        label="离店日期"
      />
      <el-table-column
        prop="bookingDate"
        label="预约时间"
      />
      <el-table-column
        prop="status"
        label="状态"
      />
      <el-table-column prop="action" label="操作">
        <el-button type="text" size="small">办理入住</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { fetchList } from '@/api/room'

export default {
  name: 'Booking',
  data() {
    return {
      tableData: [{
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }, {
        orderNumber: '1867263475637281763542',
        bookingName: '王小虎',
        gender: '男',
        phoneNumber: '18675652736',
        roomType: '标准单人房',
        checkInDate: '2021-04-06 13:34:56',
        checkOutDate: '2021-04-06 13:34:56',
        bookingDate: '2021-04-06 13:34:56',
        status: '待入住',
        action: ''
      }]
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottonsearch{
    margin:30px;
  }
  .searchBar{
    display: flex;
  }
</style>
