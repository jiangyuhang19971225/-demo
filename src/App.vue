<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/excel">导入excel</router-link>|
      <router-link to="/excel1">导出excel</router-link>
      <router-link to="/echarts">echarts</router-link>|
      <router-link to="/biaodan">表单</router-link>|
      <router-link to="/elupload" style="color:red;font-size:16px">上传文件</router-link>|
      <router-link to="/pagination">分页</router-link>|
      <router-link to="/uploadImg">上传图片</router-link>|

      <el-button type="success" @click="click">富文本</el-button>|
      <router-link to="/slot">
        <el-button>插槽的使用</el-button>|
      </router-link>
      <router-link to="/input">
        <el-button>搜索框</el-button>
      </router-link>

      <router-link to="/liu">刘</router-link>
      <router-link to="/vuex">
        <h3>vuex</h3>
      </router-link>
    </div>
    <div class="two" style="background-color:#fcf">
      <router-link to="/checkbox">多选框</router-link>
    </div>
    <router-link to="/echarts1">
      <el-button type="success" plain>echarts图表</el-button>

    </router-link>
     <router-link to="/echarts2">
      <el-button type="success" plain>NEWecharts图表</el-button>
    </router-link>
    <router-link to="/numAdd">
      <el-button type="success" plain>数组增长countup.js</el-button>
    </router-link>
    <router-link to="/qrcodejs2">
      <el-button type="success" plain>二维码测试</el-button>
    </router-link>
    <router-link to="/elmenu">
      <el-button type="success" plain>导航栏</el-button>
    </router-link>
 <selectTree v-model="queryForm.queryVal1" clearable :treeData="treeData" style="width:200px"></selectTree>
    <div class="content">
      <hr />
      <router-view  />
    </div>
  </div>
</template>
<script>
import selectTree from 'iview-select-tree'
export default {
  components: {
    selectTree
  },
  data () {
    return {
      queryForm: {
        queryVal1: ''
      },
      treeData: [
        {
          title: '中国',
          expand: true,
          value: '1',
          children: [
            {
              title: '福建',
              expand: true,
              value: '11',
              children: [
                {
                  value: '111',
                  title: '宁德',
                  expand: true,
                  children: [
                    {
                      value: '111111',
                      title: '福安'
                    },
                    {
                      value: '2222222',
                      title: '寿宁'
                    },
                    {
                      value: '3333333',
                      title: '周宁'
                    }
                  ]
                },
                {
                  value: '112',
                  title: '厦门'
                },
                {
                  value: '1123',
                  title: '福建'
                },
                {
                  value: '1124',
                  title: '泉州'
                },
                {
                  value: '1125',
                  title: '莆田'
                },
                {
                  value: '1126',
                  title: '三明'
                },
                {
                  value: '1127',
                  title: '龙岩'
                }
              ]
            },
            {
              title: '广东',
              value: '12',
              expand: true,
              children: [
                {
                  value: '121',
                  title: '广州'
                },
                {
                  value: '122',
                  title: '深圳'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    click () {
      this.$router.push({
        name: 'quill',
        params: {
          id: 1
        }
      })
    },
    change () {
      console.log('111111111111111', this.value1)
    }
  }
}
</script>

<style lang="stylus">
@import 'assets/css/font.css';
</style>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content {
 width: 100%;
 height: 100%;
}
div {
  box-sizing: border-box;
}
</style>
