<template>
  <div class="conhometainer">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <!-- <span slot="title">分组一</span> -->
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航二</span>
        </template>
        <el-menu-item-group>
          <!-- <span slot="title">分组一</span> -->
          <el-menu-item index="1-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
    <el-menu
      el-menu
      unique-opened
      router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <component
        class="menu-item"
        v-for="value in menu"
        :key="value.id"
        :index="value.path === '' ? String(value.id) : value.path"
        :is="
          value.children && value.children.length > 0
            ? 'el-submenu'
            : 'el-menu-item'
        "
      >
        <template v-if="value.children && value.children.length > 0">
          <template slot="title">
            <i
              :class="value.icon"
              style="
                width: 24px;
                display: inline-block;
                padding-right: 5px;
                text-align: center;
                margin-right: 0px !important;
                font-size: 18px;
              "
            ></i>
            <span>{{ value.display_name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              class="menu-item"
              v-for="(v, i) in value.children"
              :key="v.path + i"
              :index="v.path"
              @click="openhuanjingshitu(v.path)"
            >
              <i :class="v.icon"></i>
              <span slot="title">{{ v.display_name }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </template>

        <template v-else >
          <i  :class="value.icon"></i>
          <span>{{ value.display_name }}</span>
        </template>
      </component>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      menu: []
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {
    this.$axios
      .get('http://localhost:3500/list_menu')
      .then((res) => {
        // console.log(res.data[0])
        this.menu = res.data[0].children
        console.log('导航数据', this.list_menu)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
</style>
