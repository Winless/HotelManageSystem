<template>
  <div class="main-content">
    <div class="refresh">
      <el-button>
        <i class="el-icon-refresh" />
        <span>刷新</span>
      </el-button>
    </div>
<!--    <div class="roomStatusData">-->
<!--      <el-table-->
<!--        :data="tableData"-->
<!--        style="width: 100%"-->
<!--      >-->
<!--        <el-table-column-->
<!--          prop="roomType"-->
<!--          label="房间类型"-->
<!--        />-->
<!--        <el-table-column-->
<!--          prop="roomSum"-->
<!--          label="总房数"-->
<!--        />-->
<!--        <el-table-column-->
<!--          prop="roomLiving"-->
<!--          label="在住房数"-->
<!--        />-->
<!--      </el-table>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'RoomStatusTable'
}
</script>

<style scoped>

</style>
