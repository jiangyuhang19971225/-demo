<template>
  <div class="home">
    <input type="text " v-model="title" />
    <button type="button" @click="submit">提交</button>
    <button type="button" @click="getProjects">过去</button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      title: ''
    }
  },
  name: 'Home',
  components: {
    HelloWorld
  },
  async mounted () {
    // axios.get('/mock/news').then(res => {
    //   console.log(res.data)
    // }).catch(error => {
    //   console.log(error)
    // })
    const data = await this.$axios.get('/mock/news')
    console.log(data)
    console.log(data.data)
  },
  methods: {
    submit () {
      this.$axios.post('/mock/addProject', { title: this.title })
    },
    getProjects () {
      this.$axios.get('/mock/projects').then(res => {
        console.log('获取新数据', res.data)
      })
    }

  }
}
</script>
