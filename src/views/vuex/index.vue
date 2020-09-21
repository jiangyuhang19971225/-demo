<template>
  <div class="container">
    <h4>
      我是从state上获取的count
      <p style="color:red;display:inline-block">{{this.$store.state.count}}</p>
    </h4>
    <h4>
      我是从getter上获取的count
      <p style="color:red;display:inline-block">{{this.$store.getters.getCount}}</p>
    </h4>
    <h4>
      我是从...mapState上获取的count
      <p style="color:red;display:inline-block">{{count1}}</p>
    </h4>
    <h4>
      我是从...mapGetter上获取的count
      <p style="color:red;display:inline-block">{{}}</p>
    </h4>
    <el-button @click="add()">+</el-button>
    <el-button @click="del()">-</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    add () {
      // this.$store.commit('addCount', 1) //直接commit同步的
      this.$store.dispatch('getAddCount', 1)
    },
    del () {
      // this.$store.commit('delCount', 1)
      this.$store.dispatch('getDelCount', 1)
    }
  },
  computed: {
    // 通过... 拓展运算符
    ...mapState({
      count1: state => state.count
    }),
    ...mapGetters({
      // count2: state => state.count
    })
  }
}
</script>

<style scoped>
</style>
