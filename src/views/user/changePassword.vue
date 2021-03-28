<template>
  <div class="app-container">
    <div>
      <span>用户名</span>
      <el-input v-model="user" placeholder="请输入用户名" />
    </div>
    <div>
      <span>原密码</span>
      <el-input v-model="prev" placeholder="请输入原密码" />
    </div>
    <div>
      <span>新密码</span>
      <el-input v-model="newpassword" placeholder="请输入新密码" />
    </div>
    <div>
      <span>确认新密码</span>
      <el-input v-model="confirmnp" placeholder="请输入新密码" />
    </div>
    <el-button type="primary" @click="confirm()">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword'
}

function confirm() {
  alert('确定要修改？')
}
</script>

<style scoped>

</style>
