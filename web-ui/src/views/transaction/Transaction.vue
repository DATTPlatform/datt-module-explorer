<template>
  <div class="transaction">
    <div class="top-chart w1200 ">
      <div class="chart_title">
        <h2 class="fl font18 capitalize">{{$t('transaction.transaction0')}}</h2>
        <div class="fr">
          <div class="font16"><span class="font12 capitalize">{{$t('transaction.transaction1')}}:</span>
            {{this.txListTotal}}
          </div>
          <div class="chart_bt">
            <el-button type="text" class="btn capitalize" @click="changeDate(1)" :class="timeRate === 1 ? 'btn_N':''">
              {{$t('public.week')}}
            </el-button>
            <el-button type="text" class="btn capitalize" @click="changeDate(2)" :class="timeRate === 2 ? 'btn_N':''">
              {{$t('public.month')}}
            </el-button>
            <el-button type="text" class="btn capitalize" @click="changeDate(3)" :class="timeRate === 3 ? 'btn_N':''">
              {{$t('public.year')}}
            </el-button>
          </div>
        </div>
      </div>
      <div class="chart_info">
        <ve-line height="300px" style="top: -40px"
                 :data="timeChartData"
                 :legend-visible="false"
                 :colors="colors"
                 :settings="chartSettings"
                 :loading="timeRateDataLoading"></ve-line>
      </div>
    </div>
    <div class="info bg-gray">
      <div class="w1200">
        <h2 class="title font18 capitalize">{{$t('public.transactionList')}}</h2>
        <div class="tabs w1200">
          <SelectBar size="small" v-model="typeRegion" @change="changeType">
          </SelectBar>
          <el-switch class="hide-switch fr" v-model="hideSwitch" :width="32" :inactive-text="$t('block.block1')"
                     v-show="typeRegion=== 0" @change="hideConsensusList">
          </el-switch>
          <el-table :data="txList" style="width: 100%;" stripe border v-loading="txListLoading">
            <el-table-column width="30" align="left">
            </el-table-column>
            <el-table-column :label="$t('public.height')" width="90" align="left">
              <template slot-scope="scope"><span class="click" @click="toUrl('blockInfo',scope.row.height)">{{ scope.row.height }}</span>
              </template>
            </el-table-column>
            <el-table-column label="TXID" min-width="280" align="left">
              <template slot-scope="scope"><span class="click" @click="toUrl('transactionInfo',scope.row.hash)">{{ scope.row.hashs }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="time" :label="$t('public.time')" width="180" align="left">
            </el-table-column>
            <el-table-column :label="$t('public.type')" width="180" align="left">
              <template slot-scope="scope"><span class="capitalize">{{ $t('type.'+scope.row.type) }}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('public.amount')" width="160" align="left">
              <template slot-scope="scope">{{ scope.row.value }}{{scope.row.symbol}}</template>
            </el-table-column>
            <el-table-column :label="$t('public.fee')" width="160" align="left">
              <template slot-scope="scope">{{ scope.row.fees }}{{scope.row.fee.symbol}}</template>
            </el-table-column>
          </el-table>
          <!--<el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="$t('network.network15')" name="first">
              <SelectBar size="small" v-model="typeRegion" @change="changeType">
              </SelectBar>
              <el-switch class="hide-switch fr" v-model="hideSwitch" :width="32" :inactive-text="$t('block.block1')"
                         v-show="typeRegion=== 0" @change="hideConsensusList">
              </el-switch>
              <el-table :data="txList" style="width: 100%;" stripe border v-loading="txListLoading">
                <el-table-column width="30" align="left">
                </el-table-column>
                <el-table-column :label="$t('public.height')" width="90" align="left">
                  <template slot-scope="scope"><span class="click" @click="toUrl('blockInfo',scope.row.height)">{{ scope.row.height }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="TXID" min-width="280" align="left">
                  <template slot-scope="scope"><span class="click" @click="toUrl('transactionInfo',scope.row.hash)">{{ scope.row.hashs }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="time" :label="$t('public.time')" width="180" align="left">
                </el-table-column>
                <el-table-column :label="$t('public.type')" width="180" align="left">
                  <template slot-scope="scope"><span class="capitalize">{{ $t('type.'+scope.row.type) }}</span>
                  </template>
                </el-table-column>
                <el-table-column :label="$t('public.amount')+ '('+symbol+')'" width="160" align="left">
                  <template slot-scope="scope">{{ scope.row.value }}</template>
                </el-table-column>
                <el-table-column :label="$t('public.fee')+ '('+symbol+')'" width="160" align="left">
                  <template slot-scope="scope">{{ scope.row.fees }}</template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="$t('network.network16')" name="second">
              <el-table :data="nerveTxList" style="width: 100%;" stripe border v-loading="txListLoading">
                <el-table-column width="30" align="left">
                </el-table-column>
                <el-table-column :label="$t('public.height')" width="90" align="center">
                  <template slot-scope="scope"><span class="click" @click="toUrl('blockInfo',scope.row.height)">{{ scope.row.height }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="TXID" min-width="280" align="center">
                  <template slot-scope="scope"><span class="click" @click="toUrl('transactionInfo',scope.row.txHash)">{{ scope.row.hashs }}</span>
                  </template>
                </el-table-column>
               &lt;!&ndash; <el-table-column label="TXID(NERVE)" min-width="280" align="center">
                  <template slot-scope="scope"><span class="click" @click="toUrl('transactionInfo',scope.row.hash0)">{{ scope.row.hashs0 }}</span>
                  </template>
                </el-table-column>&ndash;&gt;
                <el-table-column prop="time" :label="$t('public.time')" width="180" align="left">
                </el-table-column>
                <el-table-column :label="$t('public.type')" width="180" align="center">
                  <template slot-scope="scope">
                    <span class="capitalize">{{scope.row.transferType === -1 ? $t('network.network10'):$t('network.network11') }}</span>
                  </template>
                </el-table-column>
                <el-table-column :label="$t('public.amount')" width="160" align="left">
                  <template slot-scope="scope">{{ scope.row.values }}</template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>-->
          <!--<paging :pager="pagerIndex" @change="pagesList" v-show="pagerTotal > pagerRows">
          </paging>-->
          <div class="paging">
            <el-pagination class="pages" background layout="total,prev, pager, next, jumper"
                           v-show="pagerTotal > pagerRows"
                           :total="pagerTotal"
                           :current-page.sync="pagerIndex"
                           :page-size="pagerRows"
                           @current-change="pagesList">
            </el-pagination>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import SelectBar from '@/components/SelectBar';
  import {getLocalTime, superLong, timesDecimals} from '@/api/util.js'

  export default {
    data() {
      this.colors = ['#7db46d', '#7db46d', '#7db46d', '#546570', '#c4ccd3'];
      this.chartSettings = {
        yAxisType: ['normal'],
        labelMap: {'value': 'TXS'},
      };
      return {

        //统计图数据
        timeChartData: {
          columns: [],
          rows: []
        },
        timeRateDataLoading: true,
        timeRate: 2,
        //交易类型
        typeRegion: 0,
        //隐藏滑块
        hideSwitch: false,
        //交易列表
        txList: [],
        //交易列表加载动画
        txListLoading: true,

        nerveTxList: [],//nerve 交易列表
        //交易列表总数
        txListTotal: 0,
        //分页信息
        pagerTotal: 0,
        pagerIndex: 1,
        pagerRows: 6,

        symbol: sessionStorage.hasOwnProperty('symbol') ? sessionStorage.getItem('symbol') : 'DATT',//默认symbol
        decimals: sessionStorage.hasOwnProperty('decimals') ? Number(sessionStorage.getItem('decimals')) : 8,//decimals
        activeName: 'first',
      }
    },
    components: {
      SelectBar
    },
    created() {
      this.getYearRateData(this.timeRate);
      this.getTransactionsTotal();
      this.tabNameList();
    },
    mounted() {
    },
    beforeRouteLeave(to, from, next) {
      //console.log(to.name);
      if (to.name === 'transactionInfo') {
        from.meta.keepAlive = true;
      } else {
        from.meta.keepAlive = false;
      }
      next()
    },
    methods: {

      /**
       * 获取交易历史数据统计
       */
      getYearRateData(time) {
        this.$post('/', 'getTxStatistical', [time])
          .then((response) => {
            //console.log(response);
            if (response.hasOwnProperty("result")) {
              this.timeChartData.columns = ['key', 'value'];
              this.timeChartData.rows = response.result;
              this.timeRateDataLoading = false;
            }
          })
      },

      /**
       * @disc: 获取最新的交易总量
       * @date: 2019-09-10 14:02
       * @author: Wave
       */
      getTransactionsTotal() {
        this.$post('/', 'getCoinInfo', [])
          .then((response) => {
            //console.log(response);
            if (response.hasOwnProperty("result")) {
              this.txListTotal = response.result.txCount;
            }
          })
      },

      /**
       * 选择统计数据的周、月、年
       **/
      changeDate(type) {
        this.timeRateDataLoading = true;
        this.timeChartData.columns = [];
        this.timeChartData.rows = [];
        this.timeRate = type;
        this.getYearRateData(type)
      },

      /**
       * @disc: tab 切换
       * @params:
       * @date: 2020-06-28 15:11
       * @author: Wave
       */
      handleClick(tab) {
        this.activeName = tab.name;
        this.pagerIndex = 1;
        this.pageTotal = 0;
        this.tabNameList();
      },

      /**
       * @disc: 根据tab名称加载数据
       * @params:
       * @date: 2020-07-01 10:54
       * @author: Wave
       */
      tabNameList() {
        if (this.activeName === 'first') {
          this.getTxList(this.pagerIndex, this.pagerRows, this.typeRegion, this.hideSwitch);
        } else {
          this.getCrossTxList(this.pagerIndex, this.pagerRows, this.typeRegion, this.hideSwitch);
        }
      },

      /**
       * 获交易列表
       */
      getTxList(page, rows, type, show) {
        this.$post('/', 'getTxList', [page, rows, type, show])
          .then((response) => {
            //console.log(response);
            if (response.hasOwnProperty("result")) {
              for (let item of response.result.list) {
                item.time = moment(getLocalTime(item.createTime * 1000)).format('YYYY-MM-DD HH:mm:ss');
                item.hashs = superLong(item.hash, 20);
                item.value = timesDecimals(item.value, item.decimal);
                item.fees = timesDecimals(item.fee.value, this.decimals);
              }
              this.txList = response.result.list;
              if (type === 0 && !show) {
                this.txListTotal = response.result.totalCount
              }
              this.pagerTotal = response.result.totalCount;
              this.txListLoading = false;
            }
          })
      },

      /**
       * 分页功能
       **/
      pagesList(e) {
        this.pageIndex = e;
        this.txListLoading = true;
        this.tabNameList();
      },

      /**
       * 获取交易类型
       **/
      changeType(type) {
        this.pager = {total: 0, page: 1, rows: 7,};
        this.typeRegion = parseInt(type);
        this.getTxList(this.pager.page, this.pager.rows, this.typeRegion, this.hideSwitch);
      },

      /**
       * 隐藏共识奖励
       **/
      hideConsensusList() {
        this.txListLoading = true;
        this.pager = {total: 0, page: 1, rows: 6};
        this.getTxList(this.pager.page, this.pager.rows, this.typeRegion, this.hideSwitch);
      },

      /**
       * 查询跨链交易列表
       */
      getCrossTxList(page, rows, type, show) {
        this.$post('/', 'getCrossTxList', [page, rows, type, show])
          .then((response) => {
            //console.log(response);
            if (response.hasOwnProperty("result")) {
              for (let item of response.result.list) {
                item.hashs = superLong(item.txHash, 20);
                item.values = timesDecimals(item.values, 8);
                item.time = moment(getLocalTime(item.createTime * 1000)).format('YYYY-MM-DD HH:mm:ss');
              }
              this.nerveTxList = response.result.list;
              this.pagerTotal = response.result.totalCount;
              this.txListLoading = false;
            }
          })
      },

      /**
       * url 连接跳转
       * @param name
       * @param parmes
       */
      toUrl(name, parmes) {
        this.$router.push({
          name: name,
          query: name === 'transactionInfo' ? {hash: parmes} : {height: parmes}
        })
      }
    },
  }
</script>

<style lang="less">
  @import "./../../assets/css/style";

  .transaction {
    //height: 920px;
    .top-chart {
      height: 280px;
      @media screen and (max-width: 1000px) {
        display: none;
      }
      .chart_title {
        margin: 40px 0 0 0;
        .chart_bt {
          z-index: 8;
          position: relative;
        }
      }
      .chart_info {
        margin: 20px 0 0 0;
      }
    }
    .info {
      width: 100%;
      margin-bottom: 100px;
      .title {
        line-height: 40px;
        font-weight: 400;
        margin: 5px auto;
        border-bottom: @BD1;
        @media screen and (max-width: 1000px) {
          margin: 0 auto 0;
          padding: 1rem 0 0 0.5rem;
          width: 95%;
        }
      }
    }
    .tabs {
      margin: 0 0 0 0;
      @media screen and (max-width: 1000px) {
        width: 95%;
        margin: 0 auto;
      }
      .el-select {
        margin: 20px 0 14px 0;
      }
      .hide-switch {
        margin: 35px 0 0 0;
      }
    }
  }

</style>
