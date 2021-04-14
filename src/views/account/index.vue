<template>
  <div class="app-container" style="margin-left: 20px;">
    <div v-if="workerInfo != null">
      <div class="itemSection">
        <span class="word">账号名称：</span>
        <el-input v-model="workerInfo.workerAccount" :disabled="!canInput" class="inputcontent" style="margin-left: 32px;" />
      </div>
      <div class="itemSection">
        <span class="word">姓名：</span>
        <el-input v-model="workerInfo.workerName" :disabled="!canInput" class="inputcontent" style="margin-left: 32px;" />
      </div>
      <div style="display: flex;font-size: 16px;margin-left: 5px">
        <div class="itemSection">
          <span>性别：</span>
        </div>
        <div class="itemSection" style="margin-left: 50px;">
          <el-radio-group v-model="workerInfo.workerGender">
            <el-radio :disabled="!canInput" :label="1">男</el-radio>
            <el-radio :disabled="!canInput" :label="0">女</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div style="display: flex;">
        <div class="itemSection">
          <span class="word" style="margin-top: 10px;display: inline-block;">出生日期: </span>
        </div>
        <div class="itemSection">
          <el-date-picker v-model="workerInfo.workerBirth" :disabled="!canInput" type="date" style="width: 256px;" />
        </div>
      </div>
      <div class="itemSection">
        <span class="word">身份证号： </span>
        <el-input v-model="workerInfo.workerIdCard" maxlength="18" class="inputcontent" :disabled="!canInput" style="width: 350px;" />
      </div>
      <div class="itemSection">
        <span class="word">联系电话： </span>
        <el-input v-model="workerInfo.workerTelephone" :disabled="!canInput" maxlength="13" class="inputcontent" style="width: 350px;" />
      </div>
      <div class="itemSection">
        <span class="word">邮箱： </span>
        <el-input v-model="workerInfo.workerEmail" :disabled="!canInput" class="inputcontent" style="width: 350px;margin-left: 32px;" />
      </div>
      <div class="itemSection">
        <span class="word">联系地址： </span>
        <el-input v-model="workerInfo.workerAddress" :disabled="!canInput" class="inputcontent" style="width: 650px;" />
      </div>
      <div class="itemSection">
        <span class="word">用户类型： </span>
        <el-select v-model="workerInfo.workerRoleId" :disabled="!canInput" style="width: 650px;" class="inputcontent">
          <el-option v-for="item in options" :key="item.roleId" :label="item.roleName" :value="item.roleId">
          </el-option>
        </el-select>
      </div>
      <div class="createbotton">
        <el-button type="primary" v-if="!canInput" @click="edit">编辑</el-button>
        <el-button type="primary" v-if="canInput" @click="updateInfo">保存数据</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getWorkerInfo } from "@/api/user"
import { update } from "@/api/user"
import { getRoleList } from "@/api/role"

export default {
  name: 'AccountSetting',
  data() {
    return {
      workerInfo: {},
      options: [],
      canInput: false,
      functionBotton: '编辑'
    }
  },
  created() {
    this.getWorkerInfo()
    this.getRoleList()
  },
  methods: {
    getWorkerInfo() {
      getWorkerInfo().then(res => {
        this.workerInfo = res.data
      })
    },
    getRoleList() {
      getRoleList().then(res => {
        this.options = res.data
      })
    },
    edit() {
      this.canInput = true
    },
    updateInfo() {
      update(this.workerInfo).then(res => {
        console.log(res.data)
        this.canInput = false
      })
    }
  }
}
</script>

<style scoped>
.itemSection {
  margin: 15px 0 15px 20px;
}
.word {
  font-size: 16px;
  margin-left: 5px;
  margin-right: 10px;
}
.inputcontent {
  margin: 8px 50px 0 0;
  width: 320px;
}
.createbotton {
  margin: 50px 0 15px 23px;
}
</style>
