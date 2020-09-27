<template>
  <div class="block">
    <el-container style="height: 100%;" class="el-container-home">
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <iframe :src="reportUrl" style="border:none" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reportUrl: '',
      searchTableHeight: 0,
      searchTableWidth: 0
    }
  },
  watch: {
    $route: function () {
      // 监听路由变化
      this.reportUrl = this.$route.meta.pathUrl
    }
  },
  created () {
    this.reportUrl =
      'https://datav.aliyuncs.com/share/10319f87b30bf5efd81f737be34fc611'
  },
  mounted () {
    window.onresize = () => {
      this.widthHeight() // 自适应高宽度
    }
    this.$nextTick(function () {
      this.widthHeight()
    })
  },
  methods: {
    widthHeight () {
      this.searchTableHeight = window.innerHeight + 'px'
      this.searchTableWidth = window.innerWidth + 'px'
    }
  }
}
</script>
<style  scoped>
.el-container-home {
  width: 100%;
  height: 100%;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
.block {
  padding: 0;
  margin: 0;
}

iframe {
  width: 100%;
  /* height: 100%; */
}
</style>
