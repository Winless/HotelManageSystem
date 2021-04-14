<template>
  <div class="app-container">
    <div style="background-color: #ccc; height: 2px; width: 100%; margin: 10px 0 18px 0"></div>
    <div style="margin: 10px 20px 60px 20px;">
      <div class="row">
        <div>
          <span style="margin-left: 12px;">预定人：</span>
          <el-input v-model="bookingName" placeholder="请输入预订人"/>
        </div>
        <div>
          <span>联系电话：</span>
          <el-input v-model="bookingNumber" placeholder="请输入预订人"/>
        </div>
        <div>
          <span>入住时间：</span>
          <el-date-picker v-model="checkInDate" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <div>
          <span>离店时间：</span>
          <el-date-picker v-model="checkOutDate" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
      </div>
      <div class="row">
        <div>
          <span style="margin-top: 10px;">入住天数：</span>
          <el-input-number class="inputNum1" v-model="days"  :min="1" :max="10" label="入住天数"></el-input-number>
        </div>
        <div>
          <span >身份证号：</span>
          <el-input v-model="idcard" placeholder="请输入身份证号码"/>
        </div>
        <div>
          <span >客人类型：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :value="item.value"
              :label="item.label"
            >
            </el-option>
          </el-select>
        </div>
        <div>
          <span>所属团体：</span>
          <el-input v-model="groupName"/>
        </div>
      </div>
    </div>
    <div style="margin: 20px 20px 20px 20px;">
      <el-table
        :data="tableData"
        style="width: 100%"
        fit
        :header-cell-style="{background:'#eef1f6',color:'#000',textAlign:'center'}"
        :cell-style="{ textAlign: 'center' }"
      >
        <el-table-column fixed prop="roomType" label="房型">
        </el-table-column>
        <el-table-column prop="roomPrice" label="今日房价">
        </el-table-column>
        <el-table-column prop="emptyRoom" label="可订数">
        </el-table-column>
        <el-table-column prop="bookRoomNumber" label="预订间数">
          <el-input-number v-model="num" size="small" :min="0" ></el-input-number>
        </el-table-column>
        <el-table-column prop="remainRoom" label="未分配间数">
        </el-table-column>
        <el-table-column prop="roomNumber" label="安排房间">
          <div>无</div>
        </el-table-column>
        <el-table-column prop="zip" label="操作" >
          <el-button type="primary" size="mini" plain>排房</el-button>
        </el-table-column>
      </el-table>
      <div class="order_remark" style="margin-top: 30px">
        <h3>订单备注</h3>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
        </el-input>
      </div>
      <div style="text-align:center; margin-top: 30px">
        <el-button type="primary">创建订单</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  data() {
    return {
      bookingName: '',
      bookingNumber: '',
      checkInDate: '',
      checkOutDate: '',
      idcard: '',
      days: '',
      groupName: '',
      num: '',
      options: [{
        value: '选项1',
        label: '散客'
      }, {
        value: '选项2',
        label: '团体'
      }],
      tableData: [{
        roomType: '舒适大床房',
        roomPrice: '268',
        emptyRoom: '23',
        bookRoomNumber: '',
        remainRoom: '0',
        roomNumber: ''
      }, {
        roomType: '舒适大床房',
        roomPrice: '268',
        emptyRoom: '23',
        bookRoomNumber: '',
        remainRoom: '0',
        roomNumber: ''
      }, {
        roomType: '舒适大床房',
        roomPrice: '268',
        emptyRoom: '23',
        bookRoomNumber: '',
        remainRoom: '0',
        roomNumber: ''
      }, {
        roomType: '舒适大床房',
        roomPrice: '268',
        emptyRoom: '23',
        bookRoomNumber: '',
        remainRoom: '0',
        roomNumber: ''
      }, {
        roomType: '舒适大床房',
        roomPrice: '268',
        emptyRoom: '23',
        bookRoomNumber: '',
        remainRoom: '0',
        roomNumber: ''
      }, {
        roomType: '舒适大床房',
        roomPrice: '268',
        emptyRoom: '23',
        bookRoomNumber: '',
        remainRoom: '0',
        roomNumber: ''
      }, {
        roomType: '舒适大床房',
        roomPrice: '268',
        emptyRoom: '23',
        bookRoomNumber: '',
        remainRoom: '0',
        roomNumber: ''
      }],
      textarea: ''
    }
  },

  created() { },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .el-card {
    color: rgb(120, 120, 120);
    font-size: 12px;
    margin-bottom: 8px;
  }
  .wrap_item {
    width: 380px;
    margin-left: 20px;
    margin-right: 20px;
    /*text-align: right;*/
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .row{
    display: flex;
    margin:30px auto 30px 10px;
  }
  .el-input,.el-date-picker,.inputNum1,.el-select{
    width: 300px;
    margin:5px 60px 2px 10px;
  }
  .el-table-column{
    height: 300px;
  }
</style>
