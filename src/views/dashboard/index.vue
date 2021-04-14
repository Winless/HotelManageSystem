<template>
  <div class="dashboard-container" style="height: 100%">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%">
      <el-container style="height: 100%">
        <el-container>
          <el-aside width="300px">
            <span style="display: block">房号查询</span>
            <el-input v-model="listQuery.roomNumber" style="width: 100%;margin-top: 10px;margin-bottom: 10px" placeholder="请输入房号" suffix-icon="el-icon-search" @input="handleFilter()"></el-input>
            <span style="display: block">房间筛选</span>
            <el-select @change="handleFilter()" v-model="listQuery.roomType" style="margin-top: 10px; width: 100%">
              <el-option v-for="item in typeOption" :label="item.roomName" :value="item.roomType">
              </el-option>
            </el-select>
            <el-menu style="margin-top: 30px; border-right: none" :default-active="'-1'">
              <el-menu-item style="color: black" v-for="(item, roomStatusIndex) in statusOption" :key="roomStatusIndex" @click="selectStatus(item.value)">
                <template slot="title">
                  <i :class="roomStatusIndex == 0 ? 'el-icon-menu' : 'el-icon-s-home'" :style="{'font-size': '22px', color: roomStatusBackGroundColor[roomStatusIndex - 1]}"></i>
                  <span>{{item.name}}</span>
                  <span style="float: right;">{{data[item.key]}}</span>
                </template>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <el-row :gutter="10" style="width: 100%">
              <el-col v-for="item in roomList" :span="4" align="left">
                <el-popover placement="bottom" trigger="click">
                  <el-button type="primary" v-if="item.roomStatus != 4" @click="updateRoomStatus(item.roomId, 4)">锁房</el-button>
                  <el-button type="primary" v-if="item.roomStatus == 0 || item.roomStatus == 2" @click="updateRoomStatus(item.roomId, 3)">置脏</el-button>
                  <el-button type="primary" @click="repair(item)">维修</el-button>
                  <el-button type="primary" v-if="item.roomStatus == 2 || item.roomStatus == 3" @click="updateRoomStatus(item.roomId, 1)">退房</el-button>
                  <el-button type="primary" v-if="item.roomStatus != 0 && item.roomStatus != 2" @click="updateRoomStatus(item.roomId, 0)">恢复</el-button>
                  <el-button slot="reference" :style="{'text-align': 'left', 'padding': 0, 'margin-bottom': '10px', 'height': '90px', 'width': '100%', 'background-color': roomStatusBackGroundColor[item.roomStatus], 'border-radius': '7px'}">
                    <span class="itemText" style="height: 40px">
                      <span style="flex: 1">{{item.roomNumber}}</span>
                      <span style="margin-right: 10px">{{item.checkInPerson}}</span>
                    </span>
                    <span style="height: 39px; margin-left: 10px; font-size: 14px; color: #fff;">{{item.roomName}}</span>
                    <div v-if="false" style="height: 25px; background-color: rgb(94, 90, 207); border-radius: 0 0 10px 10px;"></div>
                  </el-button>
                </el-popover>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-container>
    </div>
    <el-dialog title="填写维修原因" :visible.sync="dialogVisible" width="30%">
      <div>
        维修原因
        <el-input v-model="roomTaskEntity.taskReason" placeholder="请输入内容"></el-input>
      </div>
      <div>
        备注
        <el-input v-model="roomTaskEntity.remark" placeholder="请输入内容"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="doRepair">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchList } from '@/api/room'
import { fetchRoomTypeList } from '@/api/room'
import { updateRoomStatus } from '@/api/room'
import { repair } from '@/api/roomTask'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'name'
    ])
  },

  data() {
    return {
      dialogVisible: false,
      searchText: '',
      typeOption: [],
      statusOption: [
        { key: 'roomCount', name: '全部', value: -1 },
        { key: 'emptyClean', name: '空净', value: 0 },
        { key: 'emptyDirty', name: '空脏', value: 1 },
        { key: 'liveClean', name: '住净', value: 2 },
        { key: 'liveDirty', name: '住脏', value: 3 },
        { key: 'repair', name: '维修', value: 4 },
        { key: 'clock', name: '锁房', value: 5 }
      ],
      roomStatus: -1,
      listQuery: {
        roomNumber: '',
        roomType: 0
      },
      roomStatusBackGroundColor: [
        'rgb(72, 188, 136)',
        'rgb(255, 176, 18)',
        'rgb(87, 195, 245)',
        'rgb(121, 117, 247)',
        'rgb(246, 87, 110)',
        'rgb(247, 104, 64)'
      ],
      data: {},
      roomList: [],
      buttonList: [],
      roomTaskEntity: {
        roomId: 0,
        roomNumber: '',
        roomName: '',
        roomType: '',
        taskReason: '',
        taskContent: '',
        solved: 0,
        operatorTime: '',
        operatorId: 1,
        remark: ''
      }
    }
  },

  created() {
    this.getData()
  },

  methods: {
    handleFilter() {
      if (this.listQuery.roomType === 0) {
        this.roomList = this.data.roomList
      } else {
        this.roomList = this.data.roomList.filter(i => i.roomType === this.listQuery.roomType)
      }
      console.log(this.roomList)

      if (this.listQuery.roomNumber.length > 0) {
        this.roomList = this.roomList.filter(i => i.roomNumber.indexOf(this.listQuery.roomNumber) !== -1)
      }
      console.log(this.roomList)

      if (this.roomStatus === -1) {
        this.roomList = this.roomList
      } else {
        this.roomList = this.roomList.filter(room => room.roomStatus === this.roomStatus)
      }
      console.log(this.roomList)
    },

    getData() {
      fetchList(this.listQuery).then(res => {
        this.data = res.data
        this.roomList = this.data.roomList
        console.log(this.roomList)
      })

      fetchRoomTypeList().then(res => {
        this.typeOption = res.data
        console.log(this.typeOption)
        this.typeOption.unshift({ roomType: 0, roomName: '全部' })
        console.log(this.typeOption)
      })
    },

    selectStatus(value) {
      this.roomStatus = value
      this.handleFilter()
    },

    updateRoomStatus(roomId, status) {
      updateRoomStatus({ roomId, status }).then(res => { location.reload() })
    },

    repair(roomEntity) {
      this.roomTaskEntity.roomId = roomEntity.roomId
      this.roomTaskEntity.roomName = roomEntity.roomName
      this.roomTaskEntity.roomNumber = roomEntity.roomNumber
      this.roomTaskEntity.roomType = roomEntity.roomType
      this.dialogVisible = true
    },

    doRepair() {
      repair(this.roomTaskEntity).then(res => {
        location.reload()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 0;
  }
  /*&-text {*/
  /*font-size: 30px;*/
  /*line-height: 46px;*/
  /*}*/
}

.itemText {
  color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 10px;
  font-size: 14px;
}

.el-row {
  height: 100%;
}

.el-card {
  min-width: 100%;
  margin-right: 20px;
  transition: all 0.5s;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  padding: 20px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
