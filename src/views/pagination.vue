<template>
  <div>
    <el-table :data="list">
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[1,3,5,10]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
const listJson = {
  list: [
    { name: 'aa', age: 12 },
    { name: 'bb', age: 13 },
    { name: 'cc', age: 14 },
    { name: 'ad', age: 15 },
    { name: 'eaae', age: 16 },
    { name: 'faaf', age: 16 },
    { name: 'hah', age: 17 },
    { name: 'ii', age: 18 },
    { name: 'rar', age: 19 },
    { name: 'dd', age: 10 }
  ]
}
export default {
  data () {
    return {
      list: [],
      data: [],
      limit: 5, // 每页显示条数
      total: null, // 总条数
      page: 1, // 当前页数
      searchData: ''
    }
  },
  methods: {
    // 每页数量改变
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.limit = val
      this.getList()
    },
    // 当前页改变
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.page = val
      this.getList()
    },
    pageList () {
      // 发请求拿到数据并暂存全部数据
      this.data = listJson.list
      this.getList()
    },
    getList () {
      //  es6过滤得到满足搜索条件的展示数据list
      const list = this.data.filter((item, index) =>

        item.name.includes(this.searchData)
        // item.name.includes('')

      )
      console.log('filter list', list)
      // 过滤分页
      this.list = list.filter(
        (item, index) =>
          index < this.page * this.limit &&
          index >= this.limit * (this.page - 1)
      )
      // 假设一页五条 第一页第一天到第五条  0<1*5&&0>=5*0
      //   第二页  第六条  6<2*5&&6>=5*1
      // 分页的总数据
      this.total = list.length
    }
  },
  created () {
    this.pageList()
  }
}
</script>

<style scoped>
</style>
