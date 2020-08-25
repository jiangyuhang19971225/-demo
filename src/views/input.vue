<template>
  <div>
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入要搜索的内容"
      @select="handleSelect"
      clearable
      prefix-icon="el-icon-search"
      value-key="address"
    ></el-autocomplete>
  </div>
</template>

<script>
export default {
  data () {
    return {
      restaurants: [], // 请求的数据
      state: '', //
      timeout: null
    }
  },
  methods: {
    loadAll () {
      return [
        {
          value: '速记黄焖鸡米饭',
          address: '上海市长宁区北新泾街道金钟路180号1层01号摊位'
        },
        { value: '红辣椒麻辣烫', address: '上海市长宁区天山西路492号' },
        {
          value: '(小杨生煎)西郊百联餐厅',
          address: '长宁区仙霞西路88号百联2楼'
        },
        { value: '阳阳麻辣烫', address: '天山西路389号' },
        {
          value: '南拳妈妈龙虾盖浇饭',
          address: '普陀区金沙江路1699号鑫乐惠美食广场A13'
        }
      ]
    },
    // 点击 || 改变触发
    querySearchAsync (queryString, cb) {
      console.log('queryString输入的值', queryString)
      console.log('cb', cb)
      var restaurants = this.restaurants // 后端数据
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants

      console.log('results', results)
      // 下拉列表的显示
      cb(results)
      //   clearTimeout(this.timeout)
      //   this.timeout = setTimeout(() => {

    //   }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        console.log('state', state)
        console.log('state', state.value.toLowerCase())

        return (
          state.address.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    // 搜索框选中的值
    handleSelect (item) {
      console.log('state' + this.state)
      console.log(item)
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>

<style scoped>
.el-autocomplete {
    width: 40%;
}
</style>
