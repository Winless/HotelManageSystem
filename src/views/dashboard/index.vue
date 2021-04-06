<template>
  <div class="dashboard-container" style="height: 100%">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%">
      <el-container style="height: 100%">
        <el-container>
          <el-aside width="300px">
            <span style="display: block">房号查询</span>
            <el-input v-model="listQuery.roomNumber" style="width: 100%;margin-top: 10px;margin-bottom: 10px" placeholder="请输入房号" suffix-icon="el-icon-search" @input="handleFilter()">

            </el-input>
            <span style="display: block">房间筛选</span>
            <el-select @change="handleFilter()" v-model="listQuery.roomType" style="margin-top: 10px; width: 100%">
              <el-option v-for="item in typeOption" :label="item.name" :value="item.value">
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
                  <el-button v-for="option in roomOption" type="primary" :icon="option.icon">{{option.name}}</el-button>
                  <el-button slot="reference" :style="{'text-align': 'left', 'padding': 0, 'margin-bottom': '10px', 'height': '90px', 'width': '100%', 'background-color': roomStatusBackGroundColor[item.roomStatus], 'border-radius': '7px'}">
                    <span class="itemText" style="height: 40px">
                      <span style="flex: 1">{{item.roomNumber}}</span>
                      <span style="margin-right: 10px">李锦记</span>
                    </span>
                    <span style="height: 39px; margin-left: 10px; font-size: 14px; color: #fff;">{{getText(item.roomType)}}</span>
                    <div v-if="false" style="height: 25px; background-color: rgb(94, 90, 207); border-radius: 0 0 10px 10px;"></div>
                  </el-button>
                </el-popover>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchList } from '@/api/room'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },

  data() {
    return {
      searchText: '',
      typeOption: [
        { name: '全部', value: 0 },
        { name: '标准单人间', value: 1 },
        { name: '标准大床房', value: 2 },
        { name: '标准双人间', value: 3 },
        { name: '豪华双人间', value: 4 },
        { name: '总统套房', value: 5 },
        { name: '豪华单人房', value: 6 }
      ],
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
      roomOption: [
        { name: '锁房', value: 0, icon: 'el-icon-setting' },
        { name: '维修', value: 1, icon: 'el-icon-setting' },
        { name: '置脏', value: 2, icon: 'el-icon-setting' }
      ],
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
      roomList: []
    }
  },

  created() {
    this.getData();
  },

  methods: {
    handleFilter() {
      if (this.listQuery.roomType === 0) {
        this.roomList = this.data.roomList
      } else {
        this.roomList = this.data.roomList.filter(i => i.roomType === this.listQuery.roomType)
      }

      if (this.listQuery.roomNumber.length > 0) {
        this.roomList = this.roomList.filter(i => i.roomNumber.indexOf(this.listQuery.roomNumber) !== -1)
      }
      if (this.roomStatus == -1) {
        this.roomList = this.roomList
      } else {
        this.roomList = this.roomList.filter(room => room.roomStatus == this.roomStatus)
      }
    },

    getText(roomType) {
      return this.typeOption.find(i => i.value === roomType).name
    },

    getData() {
      fetchList(this.listQuery).then(res => {
        this.data = res.data
        this.roomList = this.data.roomList
      })
    },

    selectStatus(value) {
      this.roomStatus = value
      this.handleFilter()
    },
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
