<template>
  <div class="app-container">
    <div class="refresh">
      <el-button>
        <i class="el-icon-refresh" />
        <span>刷新</span>
      </el-button>
    </div>
<!--    <div class="roomStatusData">-->
      <el-table
        border
        :data="list"
        style="margin-top: 10px"
      >
        <el-table-column
          label="房间类型">
          <template slot-scope="scope">
            {{ scope.row.type }}
          </template>
        </el-table-column>
        <el-table-column
          label="总房数">
          <template slot-scope="scope">
            {{ scope.row.total }}
          </template>
        </el-table-column>
        <el-table-column
          label="在住房数">
          <template slot-scope="scope">
            {{ scope.row.current }}
          </template>
        </el-table-column>
        <el-table-column
          label="今入住数">
          <template slot-scope="scope">
            {{ scope.row.today }}
          </template>
        </el-table-column>
        <el-table-column
          label="预抵房数">
          <template slot-scope="scope">
            {{ scope.row.arrive }}
          </template>
        </el-table-column>
        <el-table-column
          label="预离房数">
          <template slot-scope="scope">
            {{ scope.row.leave }}
          </template>
        </el-table-column>
        <el-table-column
          label="维修房数">
          <template slot-scope="scope">
            {{ scope.row.repair }}
          </template>
        </el-table-column>
        <el-table-column
        label="可售房数">
        <template slot-scope="scope">
          {{ scope.row.sold }}
        </template>
        </el-table-column>
      </el-table>
    <!--</div>-->
    <div>
      <p><span class="redColor">*</span>可售房数 = 总房数 - 在住房数 - 预抵房数 + 预离房数 - 维修房数 - 停用房数 - 保留房数</p>
      <p><span class="redColor">*</span>可用房数 = 总房数 - 在住房数 - 维修房数 - 停用房数 - 保留房数</p>
      <p><span class="redColor">*</span>当前出租率 = 在住房数 / 总房数</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomStatusTable',
  data() {
    return {
      list: [{
        type: "咖啡吧",
        total: 25,
        current: 20,
        today: 0,
        arrive: 0,
        leave: 20,
        repair: 0,
        sold: 25
      }, {
        type: "标准单人房",
        total: 298,
        current: 166,
        today: 1,
        arrive: 2,
        leave: 152,
        repair: 1,
        sold: 124
      }]
    }
  }
}
</script>

<style scoped>
  .redColor{
    color: red;
}
</style>
