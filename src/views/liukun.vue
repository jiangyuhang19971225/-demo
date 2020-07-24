<template>
  <div>
    <el-upload
      action
      class="upload-demo"
      :on-change="handleChange"
      :http-request="uploadFile"
      :before-upload="beforeUpload"
      :headers="tokenHeader"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
  <!-- //  action="https://jsonplaceholder.typicode.com/posts/" -->
</template>

<script>
export default {
  data () {
    return {
      fileList: [], // 上传文件的列表
      tokenHeader: {},
      data: [] //   上传的请求头
    }
  },
  methods: {
    // 限制上传文件后列表的的个数
    handleChange (file, fileList) {
      this.fileList = fileList.slice(-3)
    },
    // 限制上传文件的格式
    // 文件上传前钩子函数   吧token 头里面  并限制文件格式
    beforeUpload (file) {
      //   console.log('上传前', file)
      //   在头部加入token
      //   const data = session.getToken()
      // 为文件上传组件自动发送的请求设置token
      //   this.tokenHeader.Authorization = `Bearer ${data.token}`

      // 限制上传的格式
      var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
      const extension = testmsg === 'xls'
      const extension2 = testmsg === 'xlsx'
      const isJPG = extension || extension2
      const isLt10M = file.size / 1024 / 1024 < 10

      if (!isJPG) {
        this.$message.error('上传文件格式错误!')
        return false
      }
      if (!isLt10M) {
        this.$message.error('上传文件大小不能超过 10MB!')
      }
      return isJPG && isLt10M
    },
    // 上传文件
    uploadFile (item) {
      console.log('文件的格式', item)
      const fileObj = item.file
      console.log('文件file', fileObj)
      // FormData 对象
      // const formData = new FormData()
      var formData = new FormData()
      // 文件对象
      // 使用formData.append加入后台需要的参数
      formData.append('file', fileObj)
      // 注意：此时的formData通过控制台是打印不出来的,可通过
      // console.log("file_name",formData.get("file"));查看添加的参数
      console.log('formdata.get数据', formData.get('file'))
      // const instance = this.$axios.create({
      //   withCredentials: true
      // })
      this.$axios
        .post('https://jsonplaceholder.typicode.com/posts/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
          console.log(response.data)
        }).catch(err => {
          console.log('错误', err)
        })

      //   this.$axios({
      //     url: 'https://jsonplaceholder.typicode.com/posts/',
      //     method: 'post',
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     },
      //     processData: false,
      //     data: formTwo
      //   }).then((res) => {
      //     console.log(res)
      //   })
    }
  }
}
</script>

<style>
</style>
