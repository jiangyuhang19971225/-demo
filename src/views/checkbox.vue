<template>
  <div class="checkbox">
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
    >全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city" border>{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data () {
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'], // 默认选中绑定的数据
      cities: cityOptions, // 绑定的数据的数组
      isIndeterminate: true // 用于实现全选效果
    }
  },
  methods: {
    // 绑定值变化触发事件
    handleCheckAllChange (val) {
      console.log('全选按钮', val)
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      console.log('多选按钮触发改变', value)
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length
      console.log(this.isIndeterminate)
    }
  }
}
</script>

<style scoped>
</style>
