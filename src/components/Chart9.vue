<template>
  <div class="年龄段-图3">
    <h3>年龄趋势图</h3>
    <div id="chart9" class="chart"></div>
  </div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import { baseEchartOptions } from '../shared/base-echart-options';
import { px } from '../shared/px';

export default {
  setup() {
    onMounted(() => {
      let myChart = echarts.init(document.getElementById("chart9"));
      myChart.setOption({
        ...baseEchartOptions,
        grid: {
          x: px(46),
          y: px(14),
          x2: px(30),
          y2: px(50),
        },
        color: '#F7A110',
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [0, 10,20, 30,40,50, 60, 70,80],
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
          type: 'line',
          data: [
            0.07,0.08,0.30,
            0.32,0.08,0.07,
            0.04,0.01,0.01
          ],
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: { width: px(2) },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#F7A110'
            }, {
              offset: 1,
              color: '#1B1D52'
            }]),
          }
        }]
      });
    })
  }
}
</script>