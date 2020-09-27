<template>
  <div class="container">
    <div class="dom" ref="dom" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {}
  },
  methods: {
    echartsMethods () {
      const dom = this.$refs.dom
      const myEchart = echarts.init(dom)
      const option = {
        // 标题设置
        title: {
          text: '学生生源地来源分布图',
          //   subtext: '模拟数据',
          // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: 'center',
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: 'top',
          // itemGap设置主副标题纵向间隔，单位px，默认为10，
          itemGap: 30,
          backgroundColor: '#EEE',
          // 主标题文本样式设置
          textStyle: {
            fontSize: 26,
            fontWeight: 'bolder',
            color: '#000080'
          }
          // 副标题文本样式设置
        //   subtextStyle: {
        //     fontSize: 18,
        //     color: '#8B2323'
        //   }
        },
        // 图例设置
        legend: {
          // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
          orient: 'vertical',
          // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: 'left',
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: 'center',
          itemWidth: 24, // 设置图例图形的宽
          itemHeight: 18, // 设置图例图形的高
          textStyle: {
            color: '#666' // 图例文字颜色
          },
          // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
          itemGap: 30,
          backgroundColor: '#eee', // 设置整个图例区域背景颜色
          data: ['北京', '上海', '广州', '深圳', '郑州']
        },
        graphic: [{ // 环形图中间添加文字
          type: 'text', // 通过不同top值可以设置上下显示
          left: 'center',
          top: '45%',
          style: {
            text: '环图中添加颜色' + '\n' + '和series平级',
            textAlign: 'center',
            fill: 'blue', // 文字的颜色
            width: 30,
            height: 30,
            fontSize: 20,
            fontFamily: 'Microsoft YaHei'
          }
        }],
        // 值域设置
        series: [
          {
            name: '生源地',
            type: 'pie',
            // radius: '50%',  // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
            radius: ['40%', '60%'], // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
            center: ['50%', '50%'], // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            data: [
              { value: 335, name: '北京' },
              { value: 310, name: '上海' },
              { value: 234, name: '广州' },
              { value: 135, name: '深圳' },
              { value: 148, name: '郑州' }
            ],
            // itemStyle 设置饼状图扇形区域样式
            itemStyle: {
              // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
              // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(30, 144, 255，0.5)'
              }
            },
            // 设置值域的那指向线
            labelLine: {
              normal: {
                normal: {
                  show: true, // 是否显示引导线
                  length: 20, // 百分比引导线 第一段长度
                  length2: 30 // 视觉引导项第二段的长度。
                }
              }
              // show: false // show设置线是否显示，默认为true，可选值：true ¦ false
            },
            label: {
              normal: {
                position: 'outside', // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                // formatter: '{a} {b} : {c}个 ({d}%)' // 设置标签显示内容 ，默认显示{b}
                // {a}指series.name  {b}指series.data的name
                // {c}指series.data的value  {d}%指这一部分占总数的百分比
                formatter: '{d}%',
                show: true, // 文字显示隐藏
                // formatter: '{b}\n{c}',
                // position: 'center',
                lineHeight: 30,
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold'
                  }
                }

              }
            }
          }

        ],
        // 提示框
        tooltip: {
          // trigger 设置触发类型，默认数据触发，可选值：'item' ¦ 'axis'
          trigger: 'item',
          showDelay: 20, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          hideDelay: 20, // 隐藏延迟，单位ms
          //   backgroundColor: '#fff', // 提示框背景颜色
          textStyle: {
            fontSize: '12px',
            color: '#fff' // 设置文本颜色 默认#FFF
          },
          // formatter设置提示框显示内容
          // {a}指series.name  {b}指series.data的name
          // {c}指series.data的value  {d}%指这一部分占总数的百分比
          formatter: '{a} <br/>{b} : {c}个 ({d}%)'
        }

      }
      myEchart.setOption(option)
    }
  },
  mounted () {
    this.echartsMethods()
  }
}
</script>

<style scoped>
</style>
