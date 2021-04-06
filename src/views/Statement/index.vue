<template>
  <div class="app-container">
    <h3 style="display: block; margin: 0">酒店营业情况</h3>
    <div style="background-color: #ccc; height: 1px; width: 100%; margin: 10px 0 18px 0"></div>
    <div style="margin-bottom: 30px">
      <span style="display: inline-block; margin-right:20px">营业日：</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
    </div>
    <el-row>
      <el-col :span="6">
        <el-card>
          <h2 style="color: rgb(255, 73, 73); font-size: 32px; display: block">￥120129.00</h2>
          <div style="margin: 20px 0; font-size: 20px">总消费金额</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div style="font-size: 20px">日租房概况</div>
          <div style="display: flex; justify-content: space-between; padding: 0 40px; margin: 35px 0">
            <div>
              <div style="color: rgb(68, 179, 253); font-size: 16px">49</div>
              <div style="margin-top: 5px">入住房数</div>
            </div>
            <div>
              <div style="color: rgb(68, 179, 253); font-size: 16px">￥12000.00</div>
              <div style="margin-top: 5px">房费消费</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div style="font-size: 20px">时租房概况</div>
          <div style="display: flex; justify-content: space-between; padding: 0 40px; margin: 35px 0">
            <div>
              <div style="color: rgb(68, 179, 253); font-size: 16px">49</div>
              <div style="margin-top: 5px">入住房数</div>
            </div>
            <div>
              <div style="color: rgb(68, 179, 253); font-size: 16px">￥12000.00</div>
              <div style="margin-top: 5px">房费消费</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card>
          <div style="font-size: 20px">其他消费概况</div>
          <div style="margin: 35px 0">
            <div style="color: rgb(68, 179, 253); font-size: 16px">￥12.00</div>
            <div style="margin-top: 5px">其他消费</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h3 style="display: block; margin: 40px 0 0 0">收入状况</h3>
    <div style="background-color: #ccc; height: 1px; width: 100%; margin: 10px 0 18px 0"></div>
    <el-table :data="tableData" height="500" border style="width: 100%" :header-cell-style="{background:'#eef1f6',color:'#000'}">
      <el-table-column prop="date" label="日期">
      </el-table-column>
      <el-table-column prop="name" label="房费总计">
      </el-table-column>
      <el-table-column prop="address" label="其他消费总计">
      </el-table-column>
      <el-table-column prop="address" label="总计">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Statement',

  data() {
    return {
      canInput: false,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
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
      value1: '',
      value2: ''
    }
  }
}
</script>

<style scoped>
  .el-col {
    margin-right: 25px;
  }

  .el-col:last-child {
    margin-right: 0;
  }

  .el-card {
    background-color: rgb(248, 249, 251);
    text-align: center;
  }

  .el-table th {
    background-color: rgb(197, 197, 197);
  }
</style>
