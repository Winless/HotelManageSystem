<template>
  <div class="app-container" style="margin-left: 20px;">
    <div class="itemSection">
      <span class="word">账号名称：</span>
      <el-input
        v-model="user"
        placeholder="请输入账号名称 字符长度在2-12之间"
        maxlength="12"
        minlength="2"
        class="inputcontent"
      />
    </div>
    <div class="password" style="margin: -20px 0;">
      <div class="itemSection">
        <span class="word">密码：</span>
        <el-input v-model="password" placeholder="请输入密码 长度在6-12位之间" class="inputcontent" show-password maxlength="12" minlength="6" style="margin-left: 32px;"/>
      </div>
      <div class="itemSection">
        <span class="word">确认新密码：</span>
        <el-input v-model="comfirmpassword" placeholder="确认新密码" class="inputcontent" show-password maxlength="12" minlength="6" style="margin-left: 32px;"/>
      </div>
    </div>
    <div class="itemSection">
      <span class="word">姓名：</span>
      <el-input v-model="name" placeholder="请输入真实姓名" class="inputcontent" style="margin-left: 32px;"/>
    </div>
    <div style="display: flex;font-size: 16px;margin-left: 5px">
      <div class="itemSection">
        <span>性别：</span>
      </div>
      <div class="itemSection" style="margin-left: 50px;">
        <el-radio v-model="gender" label="1">男</el-radio>
        <el-radio v-model="gender" label="2">女</el-radio>
      </div>
    </div>
    <div style="display: flex;">
      <div class="itemSection">
        <span class="word" style="margin-top: 10px;display: inline-block;">出生日期: </span>
      </div>
      <div class="itemSection">
        <el-date-picker
          v-model="borndate"
          type="date"
          placeholder="选择日期"
          style="width: 256px;"
        />
      </div>
    </div>
    <div class="itemSection">
      <span class="word">身份证号： </span>
      <el-input
        v-model="idnumber"
        placeholder="请输入身份证号"
        maxlength="18"
        class="inputcontent"
        style="width: 350px;"
      />
    </div>
    <div class="itemSection">
      <span class="word">联系电话： </span>
      <el-input
        v-model="phone"
        placeholder="请输入联系电话"
        maxlength="13"
        class="inputcontent"
        style="width: 350px;"
      />
    </div>
    <div class="itemSection">
      <span class="word">邮箱： </span>
      <el-input
        v-model="mail"
        placeholder="请输入您的邮箱"
        class="inputcontent"
        style="width: 350px;margin-left: 32px;"
      />
    </div>
    <div class="itemSection">
      <span class="word">联系地址： </span>
      <el-input
        v-model="useraddress"
        placeholder="请输入联系地址"
        class="inputcontent"
        style="width: 650px;"
      />
    </div>
    <div class="itemSection">
      <span class="word">用户类型： </span>
      <el-select v-model="type" style="width: 650px;" class="inputcontent">
        <el-option
          v-for="item in options"
          :key="item.value"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="createbotton">
      <el-button type="primary" @click="createconfirm()">创建用户</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateUser',
  data() {
    return {
      name: '',
      user: '',
      password: '',
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
      }]
    }
  },
  methods: {
    createconfirm() {
      alert('创建成功！')
    }
  }
}
</script>

<style scoped>
  .itemSection{
    margin: 15px 0 15px 20px;
  }
  .word{
    /*display: inline-block;*/
    font-size: 16px;
    margin-left: 5px;
    margin-right: 10px;
  }
  .inputcontent{
    margin:8px 50px 0 0;
    width:320px;
  }
  .password{
    display: flex;
  }
  .createbotton{
    margin: 50px 0 15px 23px;
  }
</style>
