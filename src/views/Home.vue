<template>
  <div class="home">
    <input type="text " v-model="title" />
    <button type="button" @click="submit">提交</button>
    <button type="button" @click="getProjects">过去</button>
    <div>img url 转base64</div>
    <img alt="Vue logo" src="../assets/logo.png"  ref='myBox'/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { getBase64 } from '@/apis/fun.js'
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
    const imgUrl = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg'
    getBase64(imgUrl, dataURL => {
      console.log(dataURL)
    })
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
