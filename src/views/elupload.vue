<template>
  <div>
    <!-- //  drag 拖拽上传 -->
    <!-- multiple  是否支持多文件上传 -->
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :multiple="false"
      :on-change="changeFlie"
      :before-upload="bfUpload"
      :data="insertProgram"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {
      insertProgram: {
        liveId: 111
      }
    }
  },
  methods: {
    // 文件变动触发方法
    changeFlie (file, fileList) {
      console.log('file', file) // 单个对象
      console.log('fileList', fileList) // 数组
    },

    // 上传文件之前的钩子 判断上传的文件是否符合规范
    bfUpload (file) {
      console.log('bfupload.file', file)
      const ss = file.name
      const suffix = file.name.substring(ss.indexOf('.') + 1)
      console.log(suffix)
    }
  }
}
</script>

<style>
</style>
