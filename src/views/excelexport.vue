<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="createdTime" label="日期" width="180"></el-table-column>
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
    </el-table>
    <!-- <el-button type="primary" @click="export2Excel()">导出</el-button> -->
    <el-button type="danger" @click="export2Excel()">导出</el-button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tableData: [
        // {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // },
        // {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // },
        // {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // },
        // {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }
      ]
    }
  },
  methods: {
    export2Excel () {
      require.ensure([], () => {
        const { exportExcel } = require('./excel/Export2Excel.js')
        const tHeader = ['日期', '标题', '地址'] // 上面设置Excel的表格第一行的标题
        const filterVal = ['createdTime', 'title', 'content'] // 上面的index、phone_Num、school_Name是tableData里对象的属性
        const list = this.tableData // 把data里的tableData存到list
        const data = this.formatJson(filterVal, list)
        exportExcel(tHeader, data, '列表excel')
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  },
  async mounted () {
    // axios.get('/mock/news').then(res => {
    //   console.log(res.data)
    // }).catch(error => {
    //   console.log(error)
    // })
    const data = await this.$axios.get('/mock/news')
    // console.log(data)
    // console.log(data.data)
    this.tableData = data.data
    console.log(this.tableData)
  }
}
</script>

<style>
</style>
