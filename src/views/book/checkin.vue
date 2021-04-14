<template>
  <div class="app-container" style="height: 100%">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 10px; background-color: #ccc;">
      <el-container style="height: 100%">
        <el-header style="height: 180px; font-size: 14px">
          <div style="margin-left: 58px">
            入住类型：
            <el-radio-group v-model="radio">
              <el-radio :label="1">日租入住</el-radio>
              <el-radio :label="2">时租入住</el-radio>
            </el-radio-group>
          </div>
          <div style="display: flex; flex-wrap: wrap; padding-right: 500px">
            <div class="wrap_item">
              入住时间：
              <el-date-picker v-model="checkInTime" type="datetime" size="small" style="width: 250px" placeholder="选择日期时间" default-time="12:00:00" disabled>
              </el-date-picker>
            </div>
            <div class="wrap_item">
              离店时间：
              <el-date-picker v-model="checkOutTime" type="datetime" size="small" style="width: 250px" placeholder="选择日期时间" default-time="12:00:00" disabled>
              </el-date-picker>
            </div>
            <div class="wrap_item">
              入住天数：
              <el-input-number v-model="liveDay" @change="handleLiveDayChange" size="small" style="width: 250px" :min="1" :max="30" label="描述文字"></el-input-number>
            </div>
            <div class="wrap_item">
              房价代码：
              <el-select v-model="value" size="small" style="width: 250px" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
                </el-option>
              </el-select>
            </div>
            <div class="wrap_item">
              客户来源：
              <el-select v-model="value" size="small" style="width: 250px" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
                </el-option>
              </el-select>
            </div>
            <div class="wrap_item">
              <el-input placeholder="请输入内容" size="small" style="width: 325px" v-model="vipCardNumber" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="会员卡">
                  <el-option label="餐厅名" value="1"></el-option>
                  <el-option label="订单号" value="2"></el-option>
                  <el-option label="用户电话" value="3"></el-option>
                </el-select>
              </el-input>
            </div>
          </div>
          <div>
            <el-button type="primary" size="mini" @click="getRoomInfo">查询</el-button>
          </div>
        </el-header>
        <el-main>
          <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#eef1f6',color:'#000'}">
            <el-table-column fixed prop="roomName" label="房型">
            </el-table-column>
            <el-table-column prop="roomPrice" label="首日房价">
            </el-table-column>
            <el-table-column prop="availableRoomCount" label="可订数">
            </el-table-column>
            <el-table-column prop="bookingCount" label="预订间数">
              <template slot-scope="scope">
                <el-input-number v-model="scope.row.bookingCount" size="small" :min="0" :max="scope.row.availableRoomCount" label="描述文字"></el-input-number>
              </template>
            </el-table-column>
            <el-table-column prop="roomNumber" label="安排房间">
            </el-table-column>
            <el-table-column prop="zip" label="操作" width="100px">
              <template slot-scope="scope">
                <el-button type="primary" size="mini" plain @click="arrangeRoom(scope.$index, scope.row.roomType, scope.row.bookingCount)">排房</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="order_remark" style="margin-top: 30px; font-size: 14px">
            <h3 style="margin-bottom: 5px">住客信息</h3>
            <span style="color: #8592a6; font-size: 12px; font-weight: 400; display: block; margin-bottom: 20px">请按实际入住人数填写，姓名与证件保持一致</span>
            <div style="padding: 0 0 15px 58px" v-if="roomCount <= 0">
              <span style="color: red">请先排房，再录入住客信息</span>
            </div>
            <div style="padding: 0 0 15px 58px" v-if="roomCount == 1">
              <div style="margin: 0 0 15px 0">
                住客姓名：<el-input placeholder="每间只需填一人" size="small" style="width: 250px"></el-input>
              </div>
              <div>
                联系电话：<el-input v-model="memberTelephone" placeholder="电话号码" size="small" style="width: 250px"></el-input>
              </div>
            </div>
            <div v-if="roomCount > 1">
              <div style="margin: 0 0 15px 58px" v-for="(item, index) of checkInRoom" :key="index">
                <h5>住客{{index + 1}}</h5>
                <div style="margin: 0 0 15px 0">
                  住客姓名：<el-input v-model="item.checkInPerson" placeholder="每间只需填一人" size="small" style="width: 250px"></el-input>
                </div>
                <div style="margin: 0 0 15px 0">
                  证件号码：<el-input v-model="item.checkInPersonIdCard" placeholder="身份证" size="small" style="width: 250px"></el-input>
                </div>
              </div>
              <div style="margin-left: 58px;padding: 15px 0 15px 0; border-top: 1px solid #000; width: 320px">
                联系电话：<el-input v-model="memberTelephone" placeholder="电话号码" size="small" style="width: 250px"></el-input>
              </div>
            </div>
          </div>
          <div class="order_remark" style="margin-top: 30px">
            <h3>订单备注</h3>
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="orderRemark">
            </el-input>
          </div>
          <div style="text-align:center; margin-top: 30px">
            <el-button type="primary" @click="create">入住</el-button>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import { fetchRoomInfo, arrangeRoom } from '@/api/room'
import { checkIn } from '@/api/order'

export default {
  name: 'Checkin',
  data() {
    return {
      radio: 1,
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      liveDay: 1,
      checkInTime: '',
      checkOutTime: '',
      leaveTime: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶',
        disabled: true
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      vipCardNumber: '',
      select: '',
      tableData: [],
      checkInRoom: [],
      orderRemark: '',
      roomCount: 0,
      memberTelephone: ''
    }
  },

  created() {
    this.checkInTime = this.$moment().format("YYYY-MM-DD") + ' 12:00:00'
    this.checkOutTime = this.$moment().add(this.liveDay, 'days').format("YYYY-MM-DD") + ' 12:00:00'
    this.getRoomInfo()
  },

  methods: {
    getRoomInfo() {
      let params = {
        checkInTime: this.checkInTime,
        checkOutTime: this.checkOutTime
      }
      console.log(params)
      fetchRoomInfo(params).then(res => {
        this.tableData = res.data
        for (let i of this.tableData) {
          i.orderItem = []
        }
      })
    },

    handleLiveDayChange(currentValue, oldValue) {
      this.checkOutTime = this.$moment().add(this.liveDay, 'days').format("YYYY-MM-DD") + ' 12:00:00'
    },

    arrangeRoom(index, roomType, roomCount) {
      let params = { roomType, roomCount }
      arrangeRoom(params).then(res => {
        let str = ''
        for (let item of res.data) {
          str += item.roomNumber + '; '
        }
        str = str.substring(0, str.length - 2)
        this.tableData[index].roomNumber = str
        this.tableData[index].orderItem = res.data
        this.countRoom()
        this.countOrderItem()
      })
    },

    countRoom() {
      let count = 0
      for (let i in this.tableData) {
        if (this.tableData[i].roomNumber == null || this.tableData[i].roomNumber.length == 0) {
          continue
        }
        count += this.tableData[i].roomNumber.split(';').length
      }
      this.roomCount = count
    },

    countOrderItem() {
      this.checkInRoom = []
      for (let item of this.tableData) {
        this.checkInRoom.push(...item.orderItem)
      }
    },

    create() {
      let params = {
        priceCode: 0,
        roomCount: this.roomCount,
        checkInType: 0,
        arrivalTime: this.checkInTime,
        leaveTime: this.$moment(this.leaveTime).format('YYYY-MM-DD HH:mm:ss'),
        guestSource: 0,
        orderRemark: this.orderRemark,
        operatorId: 1,
        operatorName: '陈小二',
        orderItemList: this.checkInRoom,
        memberTelephone: this.memberTelephone
      }
      checkIn(params).then(res => {

      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
    margin-bottom: 10px;
  }

  .el-main {
    background-color: rgb(255, 255, 255);
    height: 100%;
  }

  .el-card {
    color: rgb(120, 120, 120);
    font-size: 12px;
    margin-bottom: 8px;
  }

  .el-container {
    margin-bottom: 40px;
  }

  .wrap_item {
    width: 380px;
    padding-left: 30px;
    text-align: right;
  }

  .el-select {
    width: 105px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  h5 {
    margin-bottom: 5px;
  }
</style>
