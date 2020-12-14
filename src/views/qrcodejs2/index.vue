<template>
  <div class="container">
    <div id="qrCode" ref="qrCodeDiv"></div>
<div class="a1">
  <i class="iconfont iconcpu_icon "></i>
</div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  data () {
    return {
      // data: '{"bk_app_code":"aomp-ccportal","bk_app_secret":"eae445d3-b0b9-4816-842e-604f22ca4f68","bk_username":"admin","bk_obj_id":"cntvfuwuqi","bk_supplier_account":0,"bk_inst_id":231,"zhuangtai":"闲置","business_owner":"多荣华","main_operator":"多荣华"}'
      data: 'www.baidu.com'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.bindQRCode()
    })
  },
  methods: {
    bindQRCode () {
      return new QRCode(this.$refs.qrCodeDiv, {
        text: this.data,
        width: 200,
        height: 200,
        colorDark: '#333333', // 二维码颜色
        colorLight: '#ffffff', // 二维码背景色
        correctLevel: QRCode.CorrectLevel.L // 容错率，L/M/H
      })
    }
  }
}
</script>

<style scoped>
.a1 {
  /* margin-top: 100px; */
  width: 100px;
  height: 100px;

}
.iconcpu_icon {
  font-size: 30px;
  background-color: #399CFF;
}
.container {
  font-size: 20px;
}
</style>
