<template>
  <div class="app-container" style="margin-left: 20px;">
    <div class="itemSection">
      <span class="word">账号名称：</span>
      <el-input
        v-model="user"
        maxlength="12"
        minlength="2"
        class="inputcontent"
        :disabled="canInput"
      />
    </div>
    <div class="itemSection">
      <span class="word">姓名：</span>
      <el-input v-model="name" :disabled="canInput" class="inputcontent" style="margin-left: 32px;" />
    </div>
    <div style="display: flex;font-size: 16px;margin-left: 5px">
      <div class="itemSection">
        <span>性别：</span>
      </div>
      <div class="itemSection" style="margin-left: 50px;">
        <el-radio v-model="gender" :disabled="canInput" label="1">男</el-radio>
        <el-radio v-model="gender" :disabled="canInput" label="2">女</el-radio>
      </div>
    </div>
    <div style="display: flex;">
      <div class="itemSection">
        <span class="word" style="margin-top: 10px;display: inline-block;">出生日期: </span>
      </div>
      <div class="itemSection">
        <el-date-picker
          v-model="borndate"
          :disabled="canInput"
          type="date"
          style="width: 256px;"
        />
      </div>
    </div>
    <div class="itemSection">
      <span class="word">身份证号： </span>
      <el-input
        v-model="idnumber"
        maxlength="18"
        class="inputcontent"
        :disabled="canInput"
        style="width: 350px;"
      />
    </div>
    <div class="itemSection">
      <span class="word">联系电话： </span>
      <el-input
        v-model="phone"
        :disabled="canInput"
        maxlength="13"
        class="inputcontent"
        style="width: 350px;"
      />
    </div>
    <div class="itemSection">
      <span class="word">邮箱： </span>
      <el-input
        v-model="mail"
        :disabled="canInput"
        class="inputcontent"
        style="width: 350px;margin-left: 32px;"
      />
    </div>
    <div class="itemSection">
      <span class="word">联系地址： </span>
      <el-input
        v-model="useraddress"
        :disabled="canInput"
        class="inputcontent"
        style="width: 650px;"
      />
    </div>
    <div class="itemSection">
      <span class="word">用户类型： </span>
      <el-select v-model="type" :disabled="canInput" style="width: 650px;" class="inputcontent">
        <el-option
          v-for="item in options"
          :key="item.value"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="createbotton">
      <el-button type="primary" @click="changeCanInput()">{{ functionBotton }}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountSetting',
  data() {
    return {
      name: '',
      user: '',
      comfirmpassword: '',
      gender: '',
      idnumber: '',
      borndate: '',
      phone: '',
      mail: '',
      useraddress: '',
      type: '',

      options: [{
        value: '酒店经理'
      }, {
        value: '前台人员'
      }],

      canInput: 'true',
      functionBotton: '编辑'
    }
  },
  methods: {
    changeCanInput() {
      this.canInput = !this.canInput
      if (this.functionBotton === '编辑') {
        this.functionBotton = '保存数据'
      } else {
        this.functionBotton = '编辑'
        alert('修改成功！')
      }
    }
  }
}
</script>

<style scoped>
  .itemSection{
    margin: 15px 0 15px 20px;
  }
  .word{
    font-size: 16px;
    margin-left: 5px;
    margin-right: 10px;
  }
  .inputcontent{
    margin:8px 50px 0 0;
    width:320px;
  }
  .createbotton{
    margin: 50px 0 15px 23px;
  }
</style>
