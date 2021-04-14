<template>
  <div class="app-container">
    <div style="background-color: #ccc; height: 2px; width: 100%; margin: 10px 0 18px 0"></div>
    <div class="topbar">
      <div class="row">
        <el-input v-model="listQuery.orderSearch" placeholder="订单号" suffix-icon="el-icon-search" />
        <el-input v-model="listQuery.taxNumber" placeholder="发票号码" suffix-icon="el-icon-search" />
        <el-input v-model="listQuery.Payer" placeholder="纳税人" suffix-icon="el-icon-search" />
      </div>
      <div class="row">
        <div>
          <span>开票日期: </span>
          <el-date-picker v-model="listQuery.printDate" type="date" placeholder="选择日期" style="margin-left: 20px">
          </el-date-picker>
        </div>
      </div>
    </div>
    <div style="background-color: #ccc; height: 3px; width: 100%; margin: 10px 0 18px 0"></div>
    <div style="margin: 50px 20px auto 20px;">
      <el-table :data="list" style="width: 100%" :header-cell-style="{background:'#eef1f6',color:'#000',textAlign:'center'}" :cell-style="{ textAlign: 'center' }">
        <el-table-column prop="orderSn" label="订单号">
        </el-table-column>
        <el-table-column prop="date" label="开票日期">
        </el-table-column>
        <el-table-column prop="invoiceSn" label="发票号码">
        </el-table-column>
        <el-table-column prop="memberName" label="客户名称">
        </el-table-column>
        <el-table-column prop="invoiceType" label="发票种类">
        </el-table-column>
        <el-table-column prop="payAmount" label="合计金额">
        </el-table-column>
        <el-table-column prop="tax" label="税额（3%）">
        </el-table-column>
        <el-table-column prop="status" label="状态">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" round @click="printInvoice(scope.row)">打印发票</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { list } from "@/api/invoice"

export default {
  name: 'Invoice',
  data() {
    return {
      listQuery: {
        orderSearch: '',
        taxNumber: '',
        Payer: '',
        printDate: ''
      },
      list: []
    }
  },
  created() {
    this.getInvoiceList(1)
  },
  methods: {
    getInvoiceList(page) {
      list({ page }).then(res => {
        this.list = res.data
      })
    },
    printInvoice(invoice) {
      window.print()
    }
  }
}
</script>

<style scoped>
.topbar {
  margin: 55px 0;
}
.row {
  margin: 30px auto 50px 20px;
}
.el-input {
  width: 320px;
  margin-right: 40px;
}
</style>
