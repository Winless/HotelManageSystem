<template>
  <div class="app-container">
    <el-table
      border
      :data="list"
      style="margin-top: 10px"
    >
      <el-table-column
        label="房间号"
      >
        <template slot-scope="scope">
          {{ scope.row.num }}
        </template>
      </el-table-column>
      <el-table-column
        label="房间类型"
      >
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column
        label="原房态"
      >
        <template slot-scope="scope">
          {{ scope.row.previous }}
        </template>
      </el-table-column>
      <el-table-column
        label="新房态"
      >
        <template slot-scope="scope">
          {{ scope.row.new }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作时间"
      >
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作员"
      >
        <template slot-scope="scope">
          {{ scope.row.operator }}
        </template>
      </el-table-column>
      <el-table-column
        label="备注"
      >
        <template slot-scope="scope">
          {{ scope.row.note }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Checkroom'
}
</script>

<style scoped>

</style>
