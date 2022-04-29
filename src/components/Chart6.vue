<template>
    <div className="bordered 地区">
        <h2>广东省深圳市分布图</h2>
        <div className="wrapper">
        <div id="chart6" className="chart"/>
        <div className="legend bordered">
          <span className="icon" :style="{background: colors['广东省']}"/>深圳市
        </div>
        <div class="wrapper">
           <div class="container">
            <div class="radar-holder">
             <div class="radar radar-1x"></div>
             <div class="radar radar-2x"></div>
             <div class="radar radar-3x"></div>
            </div>
            <p class="radar-message">数据实时监控中</p>
           </div>
           <div className="notes">此地图仅显示了中国的部分区域</div>
        </div>
         
       
      </div>
    </div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import { baseEchartOptions } from '../shared/base-echart-options';
import { px } from '../shared/px';
import china from '../geo/china.json';

export default {
    setup() {
        const colors = { '广东省': '#BB31F7'};
        onMounted(() => {
            let myChart = echarts.init(document.getElementById("chart6"));
            // @ts-ignore
            echarts.registerMap('CN', china);
            myChart.setOption({
                 ...baseEchartOptions,
                xAxis: { 
                    show: false,
                    axisLabel: {fontSize: px(12),},
                },
                yAxis: { 
                    show: false,
                    axisLabel: {fontSize: px(12),},
                },
                series: [
                    {
                        type: 'map',
                        mapType: 'CN', // 自定义扩展图表类型
                        data: [
                            { name: '广东省', value: 100 },
                        ],
                        itemStyle: {
                            areaColor: '#010D3D',
                            color: colors['广东省'],
                            borderColor: '#01A7F7',
                            emphasis: {
                                label: { color: 'white' },
                                areaColor: '#5470C6',
                            },
                        }
                    },
                ]

            });
        })
     return{colors}
    }
}
</script>

<style lang="scss" scoped>
@import "../shared/helper";

.wrapper {
  display: flex;
}

.container{
   position:absolute;
   top:px(544);
   left:px(14);
}

.radar-message {
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: px(8);
  margin: px(10) 0;
}

.radar-holder {
  width: px(84);
  margin: px(0) auto;
  text-align: center;
  position: relative;
  height: px(90);
  
}
.radar-holder .radar-1x {
  position: absolute;
  top: px(24);
  left: px(24);
}
.radar-holder .radar-2x {
  position: absolute;
  top: px(12);
  left: px(12);
}
.radar-holder .radar-3x {
  position: absolute;
  top: 0;
  left: 0;
}

/* Spinner */
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
.radar {
  height: px(24);
  width: px(24);
  display: inline-block;
  position: relative;
  -webkit-animation: rotation 2s infinite linear;
  animation: rotation 2s infinite linear;
  border: px(4) solid #80bcff;
  border-radius: 100%;
}
.radar, .radar:before, .radar:after {
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.radar:before {
  content: "";
  display: block;
  position: absolute;
  left: px(-4);
  top: px(-6);
  height: 100%;
  width: 100%;
  border-top: px(6) solid yellow;
  border-left: px(4) solid transparent;
  border-bottom: px(4) solid transparent;
  border-right: px(4) solid transparent;
  border-radius: 100%;
}

.radar-2x {
  height: px(48);
  width: px(48);
  border: px(4) solid #80bcff;
  animation-delay: 0.1s;
  opacity: 0.66;
  -webkit-animation-delay: 0.1s;
  /* Safari and Chrome */
}
.radar-2x:before {
  left: px(-4);
  top: px(-6);
  border-top: px(6) solid yellow;
  border-left: px(4) solid transparent;
  border-bottom: px(4) solid transparent;
  border-right: px(4) solid transparent;
}

.radar-3x {
  height: px(72);
  width: px(72);
  border: px(4) solid #80bcff;
  animation-delay: 0.2s;
  -webkit-animation-delay: 0.2s;
  /* Safari and Chrome */
  opacity: 0.33;
}
.radar-3x:before {
  left: px(-4);
  top: px(-6);
  border-top: px(6) solid yellow;
  border-left: px(4) solid transparent;
  border-bottom: px(4) solid transparent;
  border-right: px(4) solid transparent;
}
</style>