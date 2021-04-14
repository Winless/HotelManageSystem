<template>
  <div class="app-container">
    <div class="topbar">
      <div class="selection">
        <el-input v-model="roomNumberSearch" placeholder="房间号" suffix-icon="el-icon-search" style="width:200px;"></el-input>
      </div>
      <div class="selection">
        <el-select placeholder="请选择房型" style="width:200px;margin-right: 20px;">
          <el-option v-for="item in typeOption" :label="item.name" :value="item.value">
          </el-option>
        </el-select>
        <el-select placeholder="原状态" style="width:200px;margin-right: 20px;">
          <el-option v-for="item in preOption" :label="item.name" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div style="background-color: #ccc; height: 2px; width: 100%; margin: 10px 0 18px 0"></div>
    <div style="margin: 30px 20px auto 15px;">
      <el-table border :data="roomTaskList" :header-cell-style="{textAlign:'center', background:'rgba(212,212,212,0.3)'}" :cell-style="{ textAlign: 'center' }">
        <el-table-column label="房间号">
          <template slot-scope="scope">
            {{ scope.row.roomNumber }}
          </template>
        </el-table-column>
        <el-table-column label="房间类型">
          <template slot-scope="scope">
            {{ scope.row.roomName }}
          </template>
        </el-table-column>
        <el-table-column label="维修原因">
          <template slot-scope="scope">
            {{ scope.row.taskReason }}
          </template>
        </el-table-column>
        <el-table-column label="操作时间" width="350px">
          <template slot-scope="scope">
            {{ scope.row.operateTime }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button v-if="scope.row.solved == 0" type="primary" size="small" @click="done(scope.row.id)">完成</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { roomTaskList } from "@/api/roomTask"
import { done } from "@/api/roomTask"

export default {
  name: 'Repairroom',
  data() {
    return {
      roomTaskList: [],
      typeOption: [
        { name: '全部', value: 0 },
        { name: '舒适大床房', value: 1 },
        { name: '舒适双床房', value: 2 },
        { name: '高级大床房', value: 3 },
        { name: '高级双床房', value: 4 },
        { name: '豪华大床房', value: 5 },
        { name: '豪华双人房', value: 6 },
        { name: '亲子家庭房', value: 7 },
        { name: '尊贵套房', value: 8 }
      ],
      preOption: [
        { name: '待维修', value: 0 },
        { name: '待清洁', value: 1 }
      ],
      value: '',
      roomNumberSearch: '',
      preStatus: ''
    }
  },
  created() {
    this.getRoomTaskList(1)
  },
  methods: {
    getRoomTaskList(page) {
      roomTaskList({ page }).then(res => {
        this.roomTaskList = res.data
        console.log(this.roomTaskList)
      })
    },
    done(taskId) {
      done({ taskId }).then(res => {
        location.reload()
      })
    }
  }
}
</script>

<style scoped>
.selection {
  margin: 30px auto 30px 20px;
}
</style>
