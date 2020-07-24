<template>
  <div>
    <div></div>
    <div>watch侦听器执行结果：{{msg_Watch}}{{years}}</div>

    <button @click="btnByWatch">改变侦听器值</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg1_Watch: 'hello',
      msg2_Watch: 'world ',
      msg_Watch: 'hello world ',

      years: '2020'
    }
  },
  // 侦听器
  // 存在缓存机制，当侦听的值没有发生变化，不会执行侦听器
  watch: {
    // 监听 msg1_Watch ，当 msg1_Watch 发生变化的时候执行
    msg1_Watch (curVal, oldVal) {
      if (curVal) {
        console.log('侦听器执行一次，改变结果为：', curVal)
        this.msg_Watch = this.msg1_Watch + ' ' + this.msg2_Watch
      }
    },
    // 监听 msg2_Watch ，当 msg2_Watch 发生变化的时候执行
    msg2_Watch (curVal, oldVal) {
      if (curVal) {
        console.log('侦听器执行一次，改变结果为：', curVal)
        this.msg_Watch = this.msg1_Watch + ' ' + this.msg2_Watch
      }
    }
  },
  methods: {
    btnByWatch () {
      this.msg1_Watch = '改变'
      this.msg2_Watch = '成功'
    }
  }
}
</script>

<style scoped>
</style>
