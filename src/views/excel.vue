<template>
  <el-upload
    action
    class="image-uploader"
    :multiple="false"
    :auto-upload="true"
    list-type="text"
    :show-file-list="true"
    :before-upload="beforeUpload"
    :drag="true"
    :limit="3"
    :on-exceed="handleExceed"
    :http-request="uploadFile"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">
      将文件拖到此处，或
      <em>点击上传</em>
    </div>
    <div class="el-upload__tip" slot="tip">一次只能上传一个文件，仅限text格式，单文件不超过1MB</div>
  </el-upload>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    // 上传文件之前的钩子
    beforeUpload (file) {
      console.log('beforeUpload')
      console.log(file.type)
      const isText = file.type === 'application/vnd.ms-excel'
      const isTextComputer =
        file.type ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      return isText | isTextComputer
    },
    // 上传文件个数超过定义的数量
    handleExceed (files, fileList) {
      this.$message.warning('当前限制选择 3个文件，请删除后继续上传')
    },
    // 上传文件
    uploadFile (item) {
      console.log('上传的文件', item)
      const fileObj = item.file
      // FormData 对象
      const formData = new FormData()
      // 文件对象
      formData.append('file', fileObj)
      formData.append('comId', this.comId)
      console.log(JSON.stringify(formData))
      const formTwo = JSON.stringify(formData)
      //   EnterAPI.iExcel(form).then(response => {
      //     console.log('MediaAPI.upload')
      //     console.log(response)
      //     this.$message.info('文件：' + fileObj.name + '上传成功')
      //   })
      this.$axios({
        url: 'https://jsonplaceholder.typicode.com/posts/',
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        processData: false,
        data: formTwo
      }).then((res) => {
        console.log(res)
      })
    }
  },
  created () {}
}
</script>

<style>
</style>
