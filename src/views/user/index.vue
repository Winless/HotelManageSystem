<template>
  <div class="app-container">
    <el-table
      border
      :data="userlist"
      style="margin-top: 30px"
    >
      <el-table-column label="账号">
        <template slot-scope="scope">
          {{ scope.row.user }}
        </template>
      </el-table-column>
      <el-table-column label="用户类型">
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column label="联系电话">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column label="邮箱">
        <template slot-scope="scope">
          {{ scope.row.docs }}
        </template>
      </el-table-column>
      <el-table-column label="联系地址">
        <template slot-scope="scope">
          {{ scope.row.address }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          {{ scope.row.action }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      userlist: [
        {
          user: 'admin',
          type: '酒店经理',
          phone: '12345678999',
          docs: '12345678999@qq.com',
          address: '广东药科大学',
          action: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
