<template>
  <div class="app-container">
    <div>
      <h2>酒店营业情况</h2>
    </div>
    <div>
      <span style="display: inline-block;margin-right:20px">营业日：</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
    </div>
    <div class="container">
      <div class="total">
        <div style="display:block;color: rgba(221,15,17,0.62);margin: 50px 0 15px 0;font-size: 60px">￥ 102,623.100</div>
        <br>
        <div style="font-size: 42px;color:rgba(44,44,44,0.85);">总收入金额</div>
      </div>
    </div>
    <h3 style="margin-bottom: 20px">收入状况</h3>
    <div>
      <el-table
        :data="tableData"
        height="300"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="日期"
        />
        <el-table-column
          prop="roomConsume"
          label="房费总计"
        />
        <el-table-column
          prop="otherConsume"
          label="其他消费"
        />
        <el-table-column
          prop="sum"
          label="总计"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statement'
}
</script>

<style scoped>
  .container{
    width:100%;
    height: 230px;
    margin: 35px 0 35px 0;
    background-color: rgba(181, 201, 227, 0.15);
    display: flex;
    align-items: center; /*垂直居中*/
    justify-content: center; /*水平居中*/
  }
  .total{
    flex-wrap: wrap;
  }
</style>
