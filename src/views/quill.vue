<template>
  <div class="edit_container">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
    <button v-on:click="saveHtml">保存</button>
    {{data}}
    <div v-html="content"></div>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p id="filter">1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>

  </div>
</template>

<script>
import { getNowDate } from '@/apis/fun.js'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import Quill from 'vue-quill-editor'

const fonts = [
  'SimSun',
  'SimHei',
  'Microsoft-YaHei',
  'KaiTi',
  'FangSong',
  'Arial',
  'Times-New-Roman',
  'sans-serif'
]
Quill.Quill.imports['formats/font'].whitelist = fonts
Quill.Quill.register(Quill.Quill.imports['formats/font'])
export default {
  name: 'App',
  data () {
    return {
      data: '',
      toolbarTips: [
        { Choice: '.ql-bold', title: '加粗' },
        { Choice: '.ql-italic', title: '倾斜' },
        { Choice: '.ql-underline', title: '下划线' },
        { Choice: '.ql-header', title: '段落格式' },
        { Choice: '.ql-strike', title: '删除线' },
        { Choice: '.ql-blockquote', title: '块引用' },
        { Choice: '.ql-code-block', title: '插入代码段' },
        { Choice: '.ql-size', title: '字体大小' },
        { Choice: '.ql-list[value="ordered"]', title: '编号列表' },
        { Choice: '.ql-list[value="bullet"]', title: '项目列表' },
        { Choice: '.ql-header[value="1"]', title: 'h1' },
        { Choice: '.ql-header[value="2"]', title: 'h2' },
        { Choice: '.ql-align', title: '对齐方式' },
        { Choice: '.ql-color', title: '字体颜色' },
        { Choice: '.ql-background', title: '背景颜色' },
        { Choice: '.ql-image', title: '图像' },
        { Choice: '.ql-video', title: '视频' },
        { Choice: '.ql-link', title: '添加链接' },
        { Choice: '.ql-formula', title: '插入公式' },
        { Choice: '.ql-clean', title: '清除格式' },
        { Choice: '.ql-indent[value="-1"]', title: '向左缩进' },
        { Choice: '.ql-indent[value="+1"]', title: '向右缩进' },
        { Choice: '.ql-header .ql-picker-label', title: '标题大小' },
        {
          Choice: '.ql-header .ql-picker-item[data-value="1"]',
          title: '标题一'
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="2"]',
          title: '标题二'
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="3"]',
          title: '标题三'
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="4"]',
          title: '标题四'
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="5"]',
          title: '标题五'
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="6"]',
          title: '标题六'
        },
        { Choice: '.ql-header .ql-picker-item:last-child', title: '标准' },
        {
          Choice: '.ql-size .ql-picker-item[data-value="small"]',
          title: '小号'
        },
        {
          Choice: '.ql-size .ql-picker-item[data-value="large"]',
          title: '大号'
        },
        {
          Choice: '.ql-size .ql-picker-item[data-value="huge"]',
          title: '超大号'
        },
        { Choice: '.ql-size .ql-picker-item:nth-child(2)', title: '标准' },
        { Choice: '.ql-align .ql-picker-item:first-child', title: '居左对齐' },
        {
          Choice: '.ql-align .ql-picker-item[data-value="center"]',
          title: '居中对齐'
        },
        {
          Choice: '.ql-align .ql-picker-item[data-value="right"]',
          title: '居右对齐'
        },
        {
          Choice: '.ql-align .ql-picker-item[data-value="justify"]',
          title: '两端对齐'
        }
      ],
      content: '',
      editorOption: {
        // theme:'bubble'
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'], // 引用，代码块

            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: 'ordered' }, { list: 'bullet' }], // 列表
            // [{ script: 'sub' }, { script: 'super' }], // 上下标
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            // [{ direction: 'rtl' }], // 文本方向

            [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // 几级标题

            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: fonts }], // 字体
            [{ align: [] }], // 对齐方式

            ['clean'], // 清除字体样式
            // ['image', 'video'] // 上传图片、上传视频
            ['image']
          ]
        },
        theme: 'snow'
      }
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onEditorReady (editor) {
      // 准备编辑器
    },
    onEditorBlur () {}, // 失去焦点事件
    onEditorFocus () {}, // 获得焦点事件
    onEditorChange () {}, // 内容改变事件
    saveHtml: function (event) {
      console.log('111111111', this.content)
    }
  },
  mounted () {
    document.getElementsByClassName('ql-editor')[0].dataset.plaxeholder = ''
    for (const item of this.toolbarTips) {
      const tip = document.querySelector('.quill-editor ' + item.Choice)
      if (!tip) continue
      tip.setAttribute('title', item.title)
    }
    setTimeout(() => {
      const msg = document.body.scrollWidth // 滚动高度
      console.log('msg.scrollTop', msg)
      window.scrollTo(0, msg)
    }, 100)
  },
  created () {
    console.log('id=' + this.$route.params.id)
    this.data = getNowDate()
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ql-editor {
  height: auto;
  min-height: 200px;
}
</style>
