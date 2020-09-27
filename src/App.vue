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
    <div class="content">
      <hr />
      <router-view  />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    click () {
      this.$router.push({
        name: 'quill',
        params: {
          id: 1
        }
      })
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
