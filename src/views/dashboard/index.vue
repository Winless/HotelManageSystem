<template>
  <div class="dashboard-container">
    <el-row>
      <el-col :span="4">
        <el-card>
          <span style="display: block">房号查询</span>
          <el-input
            v-model="listQuery.roomNumber"
            style="width: 100%;margin-top: 10px;margin-bottom: 10px"
            placeholder="请输入房号"
            suffix-icon="el-icon-search"
            @keyup.enter.native="handleSearch()">

          </el-input>
          <span style="display: block">房间筛选</span>
          <el-select @change="handleFilter()" v-model="listQuery.roomType" style="margin-top: 10px">
            <el-option v-for="item in typeOption"
                       :label="item.name"
                       :value="item.value"
                       >
            </el-option>
          </el-select>
          <el-menu  style="margin-top: 30px">
            <el-menu-item style="color: black" index="" v-for="item in statusOption">
              <template slot="title">
                <i class="el-icon-info"></i>
                <span>{{item.name}}</span>
                <span style="float: right;">{{data[item.key]}}</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-card>
      </el-col>
      <el-col :span="20">
        <el-card align="middle">
          <el-row :gutter="10" style="width: 100%">
            <el-col v-for="item in roomList" :span="4" align="left">
              <div style="margin-bottom:10px;height: 80px;background-color: rgb(72,188,136)">
                <span class="itemText">{{item.roomNumber}}</span>
                <span class="itemText">{{getText(item.roomType)}}</span>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

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
      typeOption: [{name: '全部', value: 0 }, { name: '标准单人间', value: 1 }, { name: '标准大床房', value: 2 }, { name: '标准双人间', value: 3},
        { name: '豪华双人间', value: 4 }, { name: '总统套房', value: 5 }, { name: '豪华单人房', value: 6 }],
      statusOption: [
        { key: 'emptyClean', name: '空净', value: 0 },
        { key: 'emptyDirty', name: '空脏', value: 1 },
        { key: 'liveClean', name: '住净', value: 2 },
        { key: 'liveDirty', name: '住脏', value: 3 },
        { key: 'repair', name: '维修', value: 4 },
        { key: 'clock', name: '锁房', value: 5 }],
      listQuery: {
        roomNumber: '',
        roomType: 0
      },
      data: {},
      roomList: []
    }
  },

  created() {
    this.getData();
  },

  methods: {
    handleSearch() {
      // this.getData();
      console.log(this.listQuery.roomNumber);
      this.roomList = this.data.roomList.filter(i => i.roomNumber.indexOf(this.listQuery.roomNumber) !== -1);
    },

    handleFilter() {
      if(this.listQuery.roomType === 0) {
        this.roomList = this.data.roomList
      } else {
        this.roomList = this.data.roomList.filter(i => i.roomType === this.listQuery.roomType)
      }

    },

    getText(roomType) {
      return this.typeOption.find(i => i.value === roomType).name;
    },
    getData() {
      fetchList(this.listQuery).then(res => {
        this.data = res.data;
        this.roomList = this.data.roomList;
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
  display: block;
  margin-left: 10px;
  padding-top: 10px;
  font-size: 14px;
}
</style>
