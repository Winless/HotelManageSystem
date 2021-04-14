<template>
  <div class="app-container">
    <el-table border :data="userlist" style="margin-top: 30px" :header-cell-style="{background:'#eef1f6',color:'#000',textAlign:'center'}" :cell-style="{ textAlign: 'center' }">
      <el-table-column label="ID">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="姓名">
        <template slot-scope="scope">
          {{ scope.row.workerName }}
        </template>
      </el-table-column>
      <el-table-column label="用户类型">
        <template slot-scope="scope">
          {{ scope.row.roleName }}
        </template>
      </el-table-column>
      <el-table-column label="联系电话">
        <template slot-scope="scope">
          {{ scope.row.workerTelephone }}
        </template>
      </el-table-column>
      <el-table-column label="邮箱">
        <template slot-scope="scope">
          {{ scope.row.workerEmail }}
        </template>
      </el-table-column>
      <el-table-column label="联系地址">
        <template slot-scope="scope">
          {{ scope.row.workerAddress }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle @click="edit(scope.row.workerId)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="confirmToDeleteManager(scope.row.workerName, scope.row.workerId)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑信息" :visible.sync="dialogVisible" width="30%">
      <div class="itemSection">
        <span class="word">账号名称：</span>
        <el-input v-model="workerInfo.workerAccount" class="inputcontent" style="margin-left: 32px;" />
      </div>
      <div class="itemSection">
        <span class="word">姓名：</span>
        <el-input v-model="workerInfo.workerName" class="inputcontent" style="margin-left: 32px;" />
      </div>
      <div style="display: flex;font-size: 16px;margin-left: 5px">
        <div class="itemSection">
          <span>性别：</span>
        </div>
        <div class="itemSection" style="margin-left: 50px;">
          <el-radio-group v-model="workerInfo.workerGender">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div style="display: flex;">
        <div class="itemSection">
          <span class="word" style="margin-top: 10px;display: inline-block;">出生日期: </span>
        </div>
        <div class="itemSection">
          <el-date-picker v-model="workerInfo.workerBirth" type="date" style="width: 256px;" />
        </div>
      </div>
      <div class="itemSection">
        <span class="word">身份证号： </span>
        <el-input v-model="workerInfo.workerIdCard" maxlength="18" class="inputcontent" style="width: 350px;" />
      </div>
      <div class="itemSection">
        <span class="word">联系电话： </span>
        <el-input v-model="workerInfo.workerTelephone" maxlength="13" class="inputcontent" style="width: 350px;" />
      </div>
      <div class="itemSection">
        <span class="word">邮箱： </span>
        <el-input v-model="workerInfo.workerEmail" class="inputcontent" style="width: 350px;margin-left: 32px;" />
      </div>
      <div class="itemSection">
        <span class="word">联系地址： </span>
        <el-input v-model="workerInfo.workerAddress" class="inputcontent" style="width: 650px;" />
      </div>
      <div class="itemSection">
        <span class="word">用户类型： </span>
        <el-select v-model="workerInfo.workerRoleId" style="width: 650px;" class="inputcontent">
          <el-option v-for="item in options" :key="item.roleId" :label="item.roleName" :value="item.roleId">
          </el-option>
        </el-select>
      </div>
      <div class="createbotton">
        <el-button type="primary" @click="updateInfo">保存数据</el-button>
      </div>
    </el-dialog>
    <el-dialog title="删除操作" :visible.sync="deleteDialog" width="30%">
      <span>是否确认删除管理员：{{deleteWorkerName}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialog = false">取 消</el-button>
        <el-button type="primary" @click="deleteManager(deleteWorkerId)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getManagerList } from "@/api/user"
import { getWorkerInfo } from "@/api/user"
import { update } from "@/api/user"
import { deleteWorker } from "@/api/user"
import { getRoleList } from "@/api/role"

export default {
  name: 'User',
  data() {
    return {
      workerInfo: {},
      options: [],
      userlist: [],
      dialogVisible: false,
      deleteDialog: false,
      deleteWorkerName: '',
      deleteWorkerId: 0,
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getManagerList().then(res => {
        console.log(res)
        this.userlist = res.data
      })
    },
    edit(workerId) {
      this.dialogVisible = true
      this.getWorkerInfo(workerId)
      this.getRoleList()
    },
    getWorkerInfo(workerId) {
      getWorkerInfo({ workerId }).then(res => {
        this.workerInfo = res.data
      })
    },
    getRoleList() {
      getRoleList().then(res => {
        this.options = res.data
      })
    },
    updateInfo() {
      update(this.workerInfo).then(res => {
      })
    },
    confirmToDeleteManager(workerName, workerId) {
      this.deleteWorkerName = workerName
      this.deleteWorkerId = workerId
      this.deleteDialog = true
    },
    deleteManager(workerId) {
      deleteWorker({ workerId }).then(res => {
        location.reload()
      })
    }
  }
}
</script>

<style scoped>
</style>
