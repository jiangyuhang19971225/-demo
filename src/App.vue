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
      <!-- <router-link to="/quill">富文本</router-link> -->
      <el-button type="success" @click="click">富文本</el-button>|
<router-link to="/slot">
        <el-button>插槽的使用</el-button>|
      </router-link>
      <router-link to="/input">
        <el-button>搜索框</el-button>
      </router-link>

      <router-link to="/liu">刘</router-link>
      <router-link to="/vuex"><h3> vuex</h3></router-link>

    </div>
    <div class="content">
      <hr>
    <router-view style="margin-top:50px"/>
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content {
  padding: 50px;
  // background-color: rgb(240, 231, 231);
}
</style>
