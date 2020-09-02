<template>
  <div class="bigBox">
    <div :class="divBox?'divBox1':'divBox2'"></div>
    <div style="width:100%;display:flex; justify-content: center;">
      <div class="box">
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入要搜索的内容"
          @select="handleSelect"
          prefix-icon="el-icon-search"
          value-key="value"
          clearable
          @keyup.enter.native="submit"
          @focus="focus"
          @blur="blur"
          :trigger-on-focus="aa"
        ></el-autocomplete>
        <el-collapse-transition>
          <div class="history" v-if="dataShow">
            <div class="clearHistoryBox">
              <span>搜索历史</span>
              <span v-on:click="clearHistory()">清空</span>
            </div>
            <div
              v-for="(item,index) in data"
              :key="index"
              class="clearHistoryBoxBrothers"
              v-on:click="submit1(item)"
            >{{item}}</div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
    <el-tabs v-model="first" @tab-click="handleClick" v-if="tabBoolean">
      <el-tab-pane label="全部" name="first">
        用户管理
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </el-tab-pane>
      <el-tab-pane :label="item.key" :name="item.key" v-for="(item,index) in tabData" :key="index">
        <div v-for="(ele,index1) in divData" :key="index1">{{ele.source.business_person}}</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aa: false,
      divBox: true, // 搜索框向上收缩
      timer: null, // 点击清空 先触发失去焦点  所以加定时器
      dataShow: false, // 历史记录框的显示隐藏
      data: null, // localstro 里取得数据
      tabBoolean: false, // 搜索结果显示隐藏
      first: 'first',
      tabData: [
        { key: 'cntvfuwuqi', count: 954 },
        { key: 'bk_switch', count: 93 },
        { key: 'glusterfs', count: 63 },
        { key: 'cntvjigui', count: 16 },
        { key: 'bk_nginx', count: 6 }
      ],
      divData: [
        {
          source: {
            asset_code: '',
            asset_owner: '',
            bak_operator: '',
            bk_inst_id: 1111,
            bk_inst_name: '6100079300116643',
            bk_obj_id: 'cntvfuwuqi',
            bk_supplier_account: '0',
            business_department: '技术运维中心-平台运维部',
            business_owner: '多荣华',
            cabinets_id: '大德库房',
            cpu: 'E5506 @ 2.13GHz',
            cpu_model: '',
            creation_time: '',

            eth4: '',
            eth4_ip_bk: '',
            eth4_mac: '',
            eth4_mac_bk: '',
            eth4_port: '',
            eth4_port_bk: '',
            eth4_switch_bk: '',
            eth4_switch_name_bk: '',
            eth4_switch_sn_bk: '',
            zhuangtai: '闲置'
          },
          highlight: {
            bk_inst_id: ['<em>1111</em>']
          },
          type: 'object',
          score: 2
        }
      ],

      restaurants: [], // 请求的数据
      state: '', // input输入框
      timeout: null, // 定时器 失去焦点
      list: '',
      arr: [] // 数组存到localStorage
    }
  },
  methods: {
    // 清空历史记录
    clearHistory () {
      console.log('1111')
      window.localStorage.removeItem('searchHistory')
      this.data = null
      this.dataShow = false
      this.arr = []
      console.log('清空this.data', this.data)
    },
    // 失去焦点
    blur () {
      console.log('失去焦点关闭')
      this.timer = setTimeout(() => {
        this.dataShow = false
      }, 150)
    },
    // 获得焦点
    focus () {
      if (this.state === '') {
        console.log('点击触发')
        this.data = JSON.parse(window.localStorage.getItem('searchHistory'))
        console.log('dataShow', this.data)
        this.data = [...new Set(this.data)]
        console.log('去重', this.data)
        if (this.data.length && this.state === '') {
          console.log('获取焦点判断localstr有长度 ')
          this.dataShow = true
          this.aa = false
        }
      }
      console.log('显示历史记录且this.aa', this.aa)
    },
    // 切换tabs标签的触发事件
    handleClick () {
      console.log('111')
    },
    // 回车触发事件
    submit () {
      //
      console.log('回撤触发', this.state)
      // 判断输入框是否为空 如果为空则不执行
      if (this.state !== '') {
        this.divBox = false // 搜索框向上收缩
        this.dataShow = false // dataShow  历史记录框
        this.tabBoolean = true // tabBoolean 搜索结果tabs
        this.arr.push(this.state)
        window.localStorage.setItem('searchHistory', JSON.stringify(this.arr))
      }
      // 发请求 传this,state
    },
    // 点击历史记录搜索
    submit1 (item) {
      console.log('点击历史记录搜索', item)
      this.divBox = false
      this.dataShow = false
      this.tabBoolean = true
      // 发请求 传item
    },

    // 改变触发
    querySearchAsync (queryString, cb) {
      console.log('queryString输入的值', queryString)
      // console.log('cb', cb)
      if (queryString) {
        this.dataShow = false
      }
      var restaurants = this.restaurants // 后端数据
      console.log('联想菜单的后端数据', restaurants)
      var results = restaurants.filter(this.createStateFilter(queryString))
      // var results = restaurants.filter((res) => {
      //   console.log('res', res)
      //   return res.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1
      // }).map(ele => {
      //   console.log(ele)
      //   return ele
      // })

      console.log('显示results', results)
      // 下拉列表的显示
      cb(results)

      //   clearTimeout(this.timeout)
      //   this.timeout = setTimeout(() => {

      //   }, 3000 * Math.random())
    },
    // 联想模块
    createStateFilter (queryString) {
      console.log('联想帅选方法')
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1
        )
      }
    },
    // 下拉搜索框选中的值
    handleSelect (item) {
      console.log('handleSelect', item)
      // 点击拉搜索框选中的值存localstorage
      this.arr.push(item.value)
      window.localStorage.setItem('searchHistory', JSON.stringify(this.arr))
      console.log(item)
      // 发请求
    },
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
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  },
  // 销毁定时器
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>
<style>
.el-tabs__item.is-active {
  font-weight: bold;
}
</style>

<style scoped>
.bigBox {
  background-color: #fafbfd;
  height: calc(100%);
  overflow: auto;
}
.el-tabs {
  padding: 20px 80px;
}
.divBox1 {
  width: 100%;
  height: 200px;
}
.divBox2 {
  width: 100%;
  height: 50px;
  transition: height 0.5s;
}
.box {
  width: 60%;
  position: relative;
}
.el-autocomplete {
  width: 100%;
}
.history {
  background-color: #fff;
  margin-top: 10px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
  padding: 5px 10px;
  position: absolute;
  z-index: 99;
  width: 100%;
}
.clearHistoryBox {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  color: #c4c6cc;
  font-size: 14px;
  border-bottom: 1px solid #f0f1f5;
}
.clearHistoryBoxBrothers {
  padding: 10px 10px;
  font-size: 14px;
  text-align: left;
}
.clearHistoryBoxBrothers:hover {
  background-color: #e1ecff;
  color: #3a84ff;
}
.clearHistoryBox span:last-child {
  cursor: pointer;
}
</style>
