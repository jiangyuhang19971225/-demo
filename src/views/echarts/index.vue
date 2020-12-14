<template>
  <div class="container">
    <div class="echarts" ref="echarts" style="width: 800px;height:400px;"></div>
    <div class="echarts1" ref="chartContent" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      chartData: '98.23',
      dataList: [],
      timer: null
    }
  },
  methods: {
    showChart () {
      const chart = echarts.init(this.$refs.chartContent)
      var data = {
        value: this.chartData,
        company: '年度能耗',
        ringColor: [
          {
            offset: 0,
            color: 'red' // 0% 处的颜色
          },
          {
            offset: 0.5,
            color: '#F86D0E' // 100% 处的颜色
          },
          {
            offset: 1,
            color: 'green' // 100% 处的颜色
          }
        ]
      }
      const option = {
        title: {
          text: data.value + '\n' + data.company,
          x: 'center',
          y: 'center',
          textStyle: {
            color: '#fff',
            fontSize: '18'
          }
        },
        color: ['#282c40'],
        legend: {
          show: false,
          data: []
        },

        series: [
          {
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['55', '65'], // 设置圆环的半径
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: data.value,
                name: '',
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: data.ringColor
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                name: '',
                value: 100 - data.value
              }
            ]
          }
        ]
      }
      chart.clear()
      chart.setOption(option)
    },
    getData () {
      this.$axios({
        methods: 'get',
        url: 'http://localhost:3000/data'
      }).then(res => {
        console.log('模拟数据', res)
        this.dataList = res.data
        this.show()
      })
    },
    show () {
      const dom1 = this.$refs.echarts

      // 初始化
      const myChart = echarts.init(dom1)

      const option = {
      // 标题组件
        title: {
          text: '学习元饼图-工资',
          left: 'center',
          show: true, // 控制标题显示隐藏
          // 标题组件
          textStyle: {
            color: '#333333',
            fontSize: 18
          }
        },
        // 触发事件
        tooltip: {
          trigger: 'item', //  触发类型。 // 可选// 'item'// 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
          formatter: '{a} <br/>{b}: {c} ({d}%)', // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式。1, 字符串模板
          textStyle: {
          // 图例文字的样式
            color: '#fff', // 文字颜色
            fontSize: 10 // 文字大小
          }
        },

        graphic: [
          {
            type: 'text',
            top: '40%',
            left: 'center',
            style: {
              text: '10000.00',
              fill: '#333333',
              fontSize: 20,
              fontWeight: 'normal'
            }
          },
          {
            type: 'text',
            top: '53%',
            left: 'center',
            style: {
              text: '实发工资',
              fill: '#A6A8B6',
              fontSize: 12,
              fontWeight: 'normal'
            }
          }
        ],
        // 圆环的颜色
        color: ['#ccc', '#fd87fb', '#11abff', '#ffdf6f', '#968ade'],
        // 图例组件(小图标)
        legend: {
        // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
          selectedMode: true, // 控制图例是否可以通过点击改变状态
          orient: 'vertical', // 图标竖直方向 horizontal为水平方向
          x: 'right', // x轴图例显示在右边
          y: 'left',
          // bottom: 0,
          itemWidth: 20, // 图例标记的图形宽度 //小图标大小
          itemHeight: 10, // 图例标记的图形高度
          data: ['基本工资', '福利奖金', '出差补贴', '交补话补', '岗位工资'],
          textStyle: {
          // 图例文字的样式
            color: '#A6A8B6', // 文字颜色
            fontSize: 10 // 文字大小
          }
        },
        // 图表类型
        series: [
          {
            name: '工资占比图', // 代表a的值，系列名称
            type: 'pie', // 饼图
            center: ['50%', '45%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
            radius: ['45%', '60%'], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
            avoidLabelOverlap: false, // 是否禁用动画效果
            /*    animation: false, */
            // 饼图图形上的文本标签
            label: {
              posttion: 'outside',
              normal: {
                show: true, // 是否显示标签
                // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                position: 'right',
                // 显示的标签的内容
                // a（系列名称），b（数据项名称），c（数值）, d（百分比）
                formatter: '{a},{b}:{c}（{d}%）' //
              // 字符串模板 模板变量有：{a}：系列名。{b}：数据名。{c}：数据值。{d}：百分比。
              // {@xxx}：数据中名为'xxx'的维度的值，如{@product}表示名为'product'` 的维度的值。{@[n]}：数据中维度n的值，如{@[3]}` 表示维度 3 的值，从 0 开始计数。
              // D ![在这里插入图片描述](https://img-blog.csdn.net/2018101313580390?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzI3NDE4/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
              },
              // 高亮的扇区和标签样式
              emphasis: {
              // 鼠标放在圆环上显示的标签样式
                show: true,
                textStyle: {
                  fontSize: '8',
                  fontWeight: 'bold'
                }
              },
              itemStyle: {
                normal: {
                  borderColor: '#FFFFFF',
                  borderWidth: 0.5, // 描边线宽。为 0 时无描边
                  label: {
                    show: true,
                    formatter: '{d}%'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: true, // 是否显示引导线
                  length: 20, // 百分比引导线 第一段长度
                  length2: 30 // 视觉引导项第二段的长度。
                }
              }
            },
            // 标签的视觉引导线样式

            // 系列中的数据内容数组。
            data: this.dataList
          }
        ]
      }

      myChart.setOption(option)
    // 挂载展示
    },
    settime () {
      console.log('执行方法')
      this.timer = window.setInterval(() => {
        console.log('定时器')
        setTimeout(
          console.log('11', this),
          this.getData()
          , 0)
      }, 8000)
    }

  },
  mounted () {
    this.showChart()
    // 获取dom
    this.getData()
    this.settime()
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

<style scoped>
.echarts1 {
    background-color: #040404;
}
</style>
