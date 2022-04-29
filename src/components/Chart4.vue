<template>
  <div className="bordered 企业新增">
    <h2>全市新增企业统计</h2>
    <div id="chart4" className="chart" />
  </div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import { nextTick,onMounted,ref } from 'vue';
import { baseEchartOptions } from '../shared/base-echart-options';
import { px } from '../shared/px';
export default {
    setup() {
      const myChart = ref(null)
        const data = [
            0.15, 0.13, 0.11,
            0.13, 0.14, 0.15,
            0.16, 0.18, 0.21,
            0.19, 0.17, 0.16,
            0.15
        ];
        const y = (data) => {
            let myChart = echarts.init(document.getElementById("chart4"));
            myChart.setOption({
                ...baseEchartOptions,
                grid: {
                    x: px(60),
                    y: px(40),
                    x2: px(40),
                    y2: px(60),
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
                    splitLine: { show: true, lineStyle: { color: '#073E78' } },
                    axisTick: { show: false },
                    axisLine: { show: false },
                    axisLabel: {
                        fontSize: px(12),
                        interval: 1,
                    },
                },
                yAxis: {
                    type: 'value',
                    splitLine: { lineStyle: { color: '#073E78' } },
                    axisLabel: {
                        fontSize: px(12),
                        formatter(val) {
                            return val * 100 + '%';
                        }
                    }
                },
                series: [{
                    name: '故意伤人',
                    type: 'line',
                    data:data,
                    symbol: 'circle',
                    symbolSize: px(12),
                    lineStyle: { width: px(2) },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#414a9f'
                        }, {
                            offset: 1,
                            color: '#1b1d52'
                        }]),
                    }
                }]
            });
        }
     
       onMounted(() => {
            myChart.current = echarts.init(document.getElementById("chart4"));
            y(data);
        })
      
        nextTick(()=>{
              setInterval(() => {
                  a()
               
            }, 6000); 
           
           function a(){
                const newData = [
                   0.17, 0.12, 0.14,
                   0.15, 0.12, 0.16,
                   0.18, 0.13, 0.19,
                   0.21, 0.16, 0.17,
                   0.13
                ];
                y(newData);
                setTimeout(()=>{
                    b()
                },3000)
           }
             function b(){
                 y(data)
           }
           
        })   
    }
}
</script>