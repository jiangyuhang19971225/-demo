<template>
  <div class="bigBox">
    <div :class="divBox?'divBox1':'divBox2'"></div>
    <div style="width:100%;display:flex; justify-content: center;">
      <div class="box">
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入要搜索的内容"
          @select="handleSelect"
          prefix-icon="el-icon-search"
          value-key="value"
          clearable
          @keyup.enter.native="submit"
          :trigger-on-focus="false"
          @focus="focus"
          @blur="blur"
        ></el-autocomplete>
        <el-collapse-transition>
          <div class="history" v-if="dataShow">
            <div class="clearHistoryBox">
              <span>搜索历史</span>
              <span v-on:click="clearHistory()">清空</span>
            </div>
            <div
              v-for="(item,index) in data"
              :key="index"
              class="clearHistoryBoxBrothers"
              v-on:click="submit1(item)"
            >{{item}}</div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
    <el-tabs v-model="first" @tab-click="handleClick" v-if="tabBoolean">
      <el-tab-pane label="全部" name="first">
        用户管理
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </el-tab-pane>
      <el-tab-pane :label="item.key" :name="item.key" v-for="(item,index) in tabData" :key="index">
        <div v-for="(ele,index1) in divData" :key="index1">{{ele.source.business_person}}</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      divBox: true, // 搜索框向上收缩
      timer: null, // 点击清空 先触发失去焦点  所以加定时器
      dataShow: false, // 历史记录框的显示隐藏
      data: null, // localstro 里取得数据
      tabBoolean: false, // 搜索结果显示隐藏
      first: 'first',
      tabData: [
        { key: 'cntvfuwuqi', count: 954 },
        { key: 'bk_switch', count: 93 },
        { key: 'glusterfs', count: 63 },
        { key: 'cntvjigui', count: 16 },
        { key: 'bk_nginx', count: 6 }
      ],
      divData: [
        {
          source: {
            asset_code: '',
            asset_owner: '',
            bak_operator: '',
            bk_inst_id: 1111,
            bk_inst_name: '6100079300116643',
            bk_obj_id: 'cntvfuwuqi',
            bk_supplier_account: '0',
            business_department: '技术运维中心-平台运维部',
            business_owner: '多荣华',
            cabinets_id: '大德库房',
            cpu: 'E5506 @ 2.13GHz',
            cpu_model: '',
            creation_time: '',
            eht1_switch: '',
            eht1_switch_sn_bk: '',
            eht2_switch_name_bk: '',
            eht3_mac: '',
            eht3_port: '',
            eht3_switch: '',
            eht3_switch_name_bk: '',
            eth0: '',
            eth0_ip_bk: '10.70.62.68',
            eth0_mac_bk: '',
            eth0_port: '5',
            eth0_port_bk: '5',
            eth0_switch: '',
            eth0_switch_bk: 'Q05',
            eth0_switch_name_bk: '',
            eth0_switch_sn_bk: '',
            eth1_ip_bk: '10.70.70.68',
            eth1_mac_bk: '',
            eth1_port: '21',
            eth1_port_bk: '21',
            eth1_switch: '',
            eth1_switch_bk: 'Q05',
            eth1_switch_name_bk: '',
            eth2_address: '',
            eth2_ip_bk: '',
            eth2_mac: '',
            eth2_mac_bk: '',
            eth2_port: '',
            eth2_port_bk: '',
            eth2_switch_bk: '',
            eth2_switch_sn_bk: '',
            eth2_uplink_switch: '',
            eth3: '',
            eth3_ip_bk: '',
            eth3_mac_bk: '',
            eth3_port_bk: '',
            eth3_switch_bk: '',
            eth3_switch_sn_bk: '',
            eth4: '',
            eth4_ip_bk: '',
            eth4_mac: '',
            eth4_mac_bk: '',
            eth4_port: '',
            eth4_port_bk: '',
            eth4_switch_bk: '',
            eth4_switch_name_bk: '',
            eth4_switch_sn_bk: '',
            eth4_uplink_switch: '',
            eth5: '',
            eth5_ip_bk: '',
            eth5_mac: '',
            eth5_mac_bk: '',
            eth5_port: '',
            eth5_port_bk: '',
            eth5_switch_bk: '',
            eth5_switch_name_bk: '',
            eth5_switch_sn_bk: '',
            eth5_uplink_switch: '',
            eth6: '',
            eth6_ip_bk: '',
            eth6_mac_bk: '',
            eth6_port: '',
            eth6_port_bk: '',
            eth6_switch_bk: '',
            eth6_switch_name_bk: '',
            eth6_switch_sn_bk: '',
            eth6_uplink_switch: '',
            eth_mac: '',
            hard_disk: '2x146G',
            hardware_info: '',
            hardware_information: '',
            hardware_model: 'I420r-G',
            host_name: 'localhost',
            host_type: '',
            ilo_ip: '10.70.78.68',
            ilo_ip_bk: '10.70.78.68',
            ilo_mac_address: '00:30:48:F2:1E:05',
            ilo_mac_bk: '00:30:48:F2:1E:05',
            ilo_port_bk: '',
            ilo_switch_bk: 'Q05',
            ilo_switch_name_bk: '',
            ilo_switch_sn_bk: '',
            infiniban_type: '',
            infiniband_count: '',
            infiniband_type: '',
            inner_ip: '10.70.62.68',
            interface_count: '',
            iol: '',
            iol_ip: '',
            kvm_cabinet_id: '',
            local_disk_amount: '',
            local_disk_capacity: '',
            local_disk_type: '',
            location_in_cabinet: '15',
            logical_core_count: '',
            main_operator: '多荣华',
            manufacturer: '曙光',
            memory_bank_count: '',
            memory_capacity: '12G',
            memory_model: '',
            nic_count: '',
            nic_type: '',
            operating_system: 'CentOS release 6.5 (Final)',
            outer_ip: '10.70.70.68',
            physical_core_count: '',
            purchasing_date: '',
            remark: '',
            serial_number: '6100079300116643',
            server_unit_count: '2',
            service_code: '',
            type: '服务器',
            warranty_period: '3',
            zhuangtai: '闲置'
          },
          highlight: {
            bk_inst_id: ['<em>1111</em>']
          },
          type: 'object',
          score: 2
        },
        {
          source: {
            bk_inst_id: 1246,
            bk_inst_name: '1',
            bk_obj_id: 'dingding',
            bk_supplier_account: '0',
            dingding_user_id: '111111111111'
          },
          highlight: {
            dingding_user_id: ['<em>111111111111</em>'],
            'dingding_user_id.keyword': ['<em>111111111111</em>']
          },
          type: 'object',
          score: 2
        },
        {
          source: {
            affiliated_cluster: '',
            bk_asset_id: '',
            bk_bak_operator: 'xujingang chenen',
            bk_cloud_id: 0,
            bk_comment: '',
            bk_cpu: null,
            bk_cpu_mhz: null,
            bk_cpu_module: '',
            bk_disk: null,
            bk_host_id: 7049,
            bk_host_innerip: '10.55.32.110',
            bk_host_name: '',
            bk_host_outerip: '10.10.23.6',
            bk_isp_name: null,
            bk_mac: '',
            bk_mem: null,
            bk_os_bit: '',
            bk_os_name: '',
            bk_os_type: null,
            bk_os_version: '',
            bk_outer_mac: '',
            bk_province_name: '110000',
            bk_service_term: 3,
            bk_sla: null,
            bk_sn: '1111T43663',
            bk_state_name: 'CN',
            bk_supplier_account: '0',
            business_owner: '',
            business_person: '视频技术中心-应用开发部',
            cloud_platform: '',
            creation_time: '',
            image: '',
            import_from: '1',
            main_operator: '',
            operator: 'hehuihui',
            physical_node: '',
            prequalification_no: '',
            purpose: '',
            resource_group: '',
            service_life: '',
            to_configure: '',
            type: '0',
            vm_name: ''
          },
          highlight: {
            bk_sn: ['<em>1111T43663</em>'],
            'bk_sn.keyword': ['<em>1111T43663</em>']
          },
          type: 'host',
          score: 2
        },
        {
          source: {
            asset_code: '',
            asset_owner: '',
            bak_operator: '',
            bk_inst_id: 1552,
            bk_inst_name: '1111T43663',
            bk_obj_id: 'cntvfuwuqi',
            bk_supplier_account: '0',
            business_department: '视频技术中心-应用开发部',
            business_owner: '盛尧',
            cabinets_id: 'F09',
            cpu: 'Intel(R) Xeon(R) CPU E5-2650 0 @ 2.00GHz',
            cpu_model: '',
            creation_time: '',
            eht1_switch: '',
            eht1_switch_sn_bk: '',
            eht2_switch_name_bk: '',
            eht3_mac: '',
            eht3_port: '',
            eht3_switch: '',
            eht3_switch_name_bk: '',
            eth0: '',
            eth0_ip_bk: '10.55.32.110',
            eth0_mac_bk: '专有设备无法获取MAC',
            eth0_port: '',
            eth0_port_bk: '6',
            eth0_switch: '',
            eth0_switch_bk: 'F09-2',
            eth0_switch_name_bk: '',
            eth0_switch_sn_bk: '210235A24WH119000212',
            eth1_ip_bk: '10.10.23.6',
            eth1_mac_bk: '专有设备无法获取MAC',
            eth1_port: '',
            eth1_port_bk: '6',
            eth1_switch: '',
            eth1_switch_bk: 'F09-1',
            eth1_switch_name_bk: '',
            eth2_address: '',
            eth2_ip_bk: '',
            eth2_mac: '',
            eth2_mac_bk: '',
            eth2_port: '',
            eth2_port_bk: '',
            eth2_switch_bk: '',
            eth2_switch_sn_bk: '210235A1XCH178000081',
            eth2_uplink_switch: '',
            eth3: '',
            eth3_ip_bk: '',
            eth3_mac_bk: '',
            eth3_port_bk: '',
            eth3_switch_bk: '',
            eth3_switch_sn_bk: '',
            eth4: '',
            eth4_ip_bk: '',
            eth4_mac: '',
            eth4_mac_bk: '',
            eth4_port: '',
            eth4_port_bk: '',
            eth4_switch_bk: '',
            eth4_switch_name_bk: '',
            eth4_switch_sn_bk: '',
            eth4_uplink_switch: '',
            eth5: '',
            eth5_ip_bk: '',
            eth5_mac: '',
            eth5_mac_bk: '',
            eth5_port: '',
            eth5_port_bk: '',
            eth5_switch_bk: '',
            eth5_switch_name_bk: '',
            eth5_switch_sn_bk: '',
            eth5_uplink_switch: '',
            eth6: '',
            eth6_ip_bk: '',
            eth6_mac_bk: '',
            eth6_port: '',
            eth6_port_bk: '',
            eth6_switch_bk: '',
            eth6_switch_name_bk: '',
            eth6_switch_sn_bk: '',
            eth6_uplink_switch: '',
            eth_mac: '',
            hard_disk: '',
            hardware_info: '',
            hardware_information: '',
            hardware_model: 'T43',
            host_name: 'localhost',
            host_type: '',
            ilo_ip: '',
            ilo_ip_bk: '无',
            ilo_mac_address: '',
            ilo_mac_bk: '',
            ilo_port_bk: '23',
            ilo_switch_bk: 'F08-1',
            ilo_switch_name_bk: '',
            ilo_switch_sn_bk: '210235A08LH095000014',
            infiniban_type: '',
            infiniband_count: '',
            infiniband_type: '',
            inner_ip: '10.7.0.160',
            interface_count: '',
            iol: '',
            iol_ip: '',
            kvm_cabinet_id: '',
            local_disk_amount: '',
            local_disk_capacity: '',
            local_disk_type: '',
            location_in_cabinet: '8',
            main_operator: '徐金刚',
            manufacturer: 'PowerSmart',
            memory_bank_count: '',
            memory_capacity: '16G',
            memory_model: '',
            nic_count: '',
            nic_type: '',
            operating_system: 'CentOS Linux release 7.5.1804 (Core)',
            outer_ip: '10.20.20.160',
            physical_core_count: '',
            purchasing_date: '',
            remark: '',
            serial_number: '1111T43663',
            server_unit_count: '1',
            service_code: '',
            type: '专有设备',
            warranty_period: '',
            zhuangtai: '正常'
          },
          highlight: {
            bk_inst_name: ['<em>1111T43663</em>'],
            'bk_inst_name.keyword': ['<em>1111T43663</em>'],
            serial_number: ['<em>1111T43663</em>'],
            'serial_number.keyword': ['<em>1111T43663</em>']
          },
          type: 'object',
          score: 2
        },
        {
          source: {
            bk_inst_id: 1825,
            bk_inst_name: 'xdfs-gz-115',
            bk_obj_id: 'glusterfs',
            bk_supplier_account: '0',
            brick_info:
              '/dev/sdb:/data/5b0c3806-16bc-4956-932a-8df003ae0632;/dev/sdc:/data/d16bd4a3-ccc2-4821-94ac-64a35167a307;/dev/sdd:/data/6a7257c3-c92b-4484-8f12-778dd7badf7d;/dev/sde:/data/11111185-fb60-4163-a447-e5ddecda2c13;',
            brick_log: '/var/log/glusterfs/bricks',
            brick_port: '49152:49664',
            config_dir: '/etc/glusterfs/',
            gluster: 'gluster',
            glusterd: 'glusterd',
            glusterd_port: '24007,24008,24009',
            glusterfs: 'glusterfs',
            glusterfsd: 'glusterfsd',
            init: 'glusterd',
            ip: '10.80.16.115',
            log_dir: '/var/log/glusterfs',
            redundancy: 'disperse-4:1',
            version: '3.10.3'
          },
          highlight: {
            brick_info: [
              '-64a35167a307;/dev/sdd:/data/6a7257c3-c92b-4484-8f12-778dd7badf7d;/dev/sde:/data/<em>11111185</em>-fb60-4163-a447-e5ddecda2c13;'
            ],
            'brick_info.keyword': [
              '<em>/dev/sdb:/data/5b0c3806-16bc-4956-932a-8df003ae0632;/dev/sdc:/data/d16bd4a3-ccc2-4821-94ac-64a35167a307;/dev/sdd:/data/6a7257c3-c92b-4484-8f12-778dd7badf7d;/dev/sde:/data/11111185-fb60-4163-a447-e5ddecda2c13;</em>'
            ]
          },
          type: 'object',
          score: 2
        },
        {
          source: {
            affiliated_cluster: '技术运维中心-测试集群',
            bk_asset_id: '',
            bk_bak_operator: 'yangyong',
            bk_cloud_id: 4,
            bk_comment: '',
            bk_cpu: 1,
            bk_cpu_mhz: 2095,
            bk_cpu_module: 'Intel Xeon Processor (Skylake, IBRS)',
            bk_disk: 46,
            bk_host_id: 7208,
            bk_host_innerip: '10.52.13.33',
            bk_host_name: 'vsjq-tetst-1.novalocal',
            bk_host_outerip: '',
            bk_isp_name: null,
            bk_mac: 'fa:16:3e:db:23:6a',
            bk_mem: 1741,
            bk_os_bit: '64-bit',
            bk_os_name: 'linux centos',
            bk_os_type: '1',
            bk_os_version: '7.6.1810',
            bk_outer_mac: '',
            bk_province_name: null,
            bk_service_term: null,
            bk_sla: null,
            bk_sn: '',
            bk_state_name: null,
            bk_supplier_account: '0',
            business_person:
              '央视国际网络有限公司,技术事业群,技术运维中心,平台运维部',
            cloud_platform: '四季青私有云可用区1',
            creation_time: '2020-08-05 14:44:00',
            image: 'centos76-yum',
            import_from: '3',
            operator: 'zhanghangyuan',
            physical_node: 'node-5',
            prequalification_no: '111111111',
            purpose: '1111111111111111',
            resource_group: '技术运维中心',
            service_life: '长期',
            to_configure: '1C2G50G',
            type: '1',
            vm_name: 'vsjq-tetst-1'
          },
          highlight: {
            prequalification_no: ['<em>111111111</em>'],
            'prequalification_no.keyword': ['<em>111111111</em>'],
            purpose: ['<em>1111111111111111</em>'],
            'purpose.keyword': ['<em>1111111111111111</em>']
          },
          type: 'host',
          score: 2
        }
      ],

      restaurants: [], // 请求的数据
      state: '', //
      timeout: null,
      list: '',
      arr: []
    }
  },
  methods: {
    // 清空历史记录
    clearHistory () {
      console.log('1111')
      window.localStorage.removeItem('searchHistory')
      this.data = null
      this.dataShow = false
      this.arr = []
      console.log('清空this.data', this.data)
    },
    // 失去焦点
    blur () {
      console.log('失去焦点关闭')
      this.timer = setTimeout(() => {
        this.dataShow = false
      }, 150)
    },
    // 获得焦点
    focus () {
      console.log('点击触发')
      this.data = JSON.parse(window.localStorage.getItem('searchHistory'))
      console.log('dataShow', this.data)
      this.data = [...new Set(this.data)]
      console.log('去重', this.data)
      if (this.data.length) {
        console.log('获取焦点判断localstr有长度 ')
        this.dataShow = true
      }
    },
    // 切换tabs标签的触发事件
    handleClick () {
      console.log('111')
    },
    // 回车触发事件
    submit () {
      //
      this.divBox = false
      this.dataShow = false
      console.log('回撤触发', this.state)
      this.tabBoolean = true

      this.arr.push(this.state)
      window.localStorage.setItem('searchHistory', JSON.stringify(this.arr))
      // 发请求 传this,state
    },
    submit1 (item) {
      console.log('点击触发', item)
      this.divBox = false
      this.dataShow = false
      this.tabBoolean = true
      // 发请求 传item
    },
    loadAll () {
      return [
        {
          value: '速记黄焖鸡米饭',
          address: '上海市长宁区北新泾街道金钟路180号1层01号摊位'
        },
        { value: '红辣椒麻辣烫', address: '上海市长宁区天山西路492号' },
        {
          value: '(小杨生煎)西郊百联餐厅',
          address: '长宁区仙霞西路88号百联2楼'
        },
        { value: '阳阳麻辣烫', address: '天山西路389号' },
        {
          value: '南拳妈妈龙虾盖浇饭',
          address: '普陀区金沙江路1699号鑫乐惠美食广场A13'
        }
      ]
    },
    // 点击 || 改变触发
    querySearchAsync (queryString, cb) {
      console.log('queryString输入的值', queryString)
      // console.log('cb', cb)

      var restaurants = this.restaurants // 后端数据
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants

      console.log('results', results)
      // 下拉列表的显示
      cb(results)
      //   clearTimeout(this.timeout)
      //   this.timeout = setTimeout(() => {

      //   }, 3000 * Math.random())
    },
    // 联想模块
    createStateFilter (queryString) {
      return (state) => {
        // console.log('state', state)
        // console.log('state', state.title.toLowerCase())

        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1
        )
      }
    },
    // 下拉搜索框选中的值
    handleSelect (item) {
      console.log('handleSelect', item)
      // console.log('state搜索框选中的值', item)
      // const item1 = JSON.parse(JSON.stringify(item))
      // this.$router.push({ name: 'Home', query: { name: item1.address } })
      console.log(item)
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>
<style>
.el-tabs__item.is-active {
  font-weight: bold;
}
</style>

<style scoped>
.bigBox {
  background-color: #fafbfd;
  height: calc(100%);
  overflow: auto;
}
.el-tabs {
  padding: 20px 80px;
}
.divBox1 {
  width: 100%;
  height: 200px;
}
.divBox2 {
  width: 100%;
  height: 50px;
  transition: height 0.5s;
}
.box {
  width: 60%;
  position: relative;
}
.el-autocomplete {
  width: 100%;
}
.history {
  background-color: #fff;
  margin-top: 10px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
  padding: 5px 10px;
  position: absolute;
  z-index: 99;
  width: 100%;
}
.clearHistoryBox {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  color: #c4c6cc;
  font-size: 14px;
  border-bottom: 1px solid #f0f1f5;
}
.clearHistoryBoxBrothers {
  padding: 10px 10px;
  font-size: 14px;
  text-align: left;
}
.clearHistoryBoxBrothers:hover {
  background-color: #e1ecff;
  color: #3a84ff;
}
.clearHistoryBox span:last-child {
  cursor: pointer;
}
</style>
