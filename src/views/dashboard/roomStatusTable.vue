<template>
  <div class="app-container">
    <div class="refresh">
      <el-button @click="refresh()">
        <i class="el-icon-refresh" />
        <span>刷新</span>
      </el-button>
    </div>
    <el-table border :data="roomForm" style="margin-top: 10px">
      <el-table-column label="房间类型">
        <template slot-scope="scope">
          {{ scope.row.roomName }}
        </template>
      </el-table-column>
      <el-table-column label="总房数">
        <template slot-scope="scope">
          {{ scope.row.roomCount }}
        </template>
      </el-table-column>
      <el-table-column label="在住房数">
        <template slot-scope="scope">
          {{ scope.row.livingRoomCount }}
        </template>
      </el-table-column>
      <el-table-column label="可用房数">
        <template slot-scope="scope">
          {{ scope.row.canUseCount }}
        </template>
      </el-table-column>
      <el-table-column label="预抵房数">
        <template slot-scope="scope">
          {{ scope.row.todayCheckInCount }}
        </template>
      </el-table-column>
      <el-table-column label="预离房数">
        <template slot-scope="scope">
          {{ scope.row.todayLeaveCount }}
        </template>
      </el-table-column>
      <el-table-column label="维修房数">
        <template slot-scope="scope">
          {{ scope.row.repairRoomCount }}
        </template>
      </el-table-column>
      <el-table-column label="可售房数">
        <template slot-scope="scope">
          {{ scope.row.canSaleCount }}
        </template>
      </el-table-column>
      <el-table-column label="出售率">
        <template slot-scope="scope">
          {{ scope.row.rate }}
        </template>
      </el-table-column>
    </el-table>
    <div>
      <p><span class="redColor">*</span>可售房数 = 总房数 - 在住房数 - 预抵房数 + 预离房数 - 维修房数</p>
      <p><span class="redColor">*</span>可用房数 = 总房数 - 在住房数 - 维修房数 </p>
      <p><span class="redColor">*</span>当前出售率 = 在住房数 / 总房数</p>
    </div>
  </div>
</template>

<script>
import { fetchForm } from '@/api/room'

export default {
  name: 'RoomStatusTable',
  data() {
    return {
      roomForm: null
    }
  },

  created() {
    this.getData()
  },

  methods: {
    getData() {
      fetchForm().then(res => {
        this.data = res.data
        this.roomForm = this.data
        console.log(this.roomForm)
      })
    },
    refresh() {
      location.reload()
    }
  }
}
</script>

<style scoped>
.redColor {
  color: red;
}
</style>
