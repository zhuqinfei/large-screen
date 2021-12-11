<template>
  <div className="年龄段-图2">
    <div className="chart">
      <div className="main" id="chart8" />
      <div className="text">年龄段</div>
    </div>
    <div className="legend">
      <span :style="{ background: colors[0] }" />10-20
      <span :style="{ background: colors[1] }" />20-30
      <span :style="{ background: colors[2] }" />30-40
      <span :style="{ background: colors[3] }" />40-50
      <span :style="{ background: colors[4] }" />50-60
    </div>
  </div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import { baseEchartOptions } from '../shared/base-echart-options';
import { px } from '../shared/px';

export default {
  setup() {
    const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
    onMounted(() => {
      let myChart = echarts.init(document.getElementById("chart8"));
      myChart.setOption({
        ...baseEchartOptions,
        color: colors,
        xAxis: { show: false },
        yAxis: { show: false },
        legend: { show: false },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['75%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: true, position: 'inside', textStyle: { color: 'white', fontSize: px(20) },
              formatter(options) {
                return (options.value * 100).toFixed(0) + '%';
              },
            },
            labelLine: { show: false },
            itemStyle: {
              borderColor: '#0F113A',
              borderWidth: px(4)
            },
            data: [
              { value: 0.07, name: '10-20' },
              { value: 0.10, name: '20-30' },
              { value: 0.23, name: '30-40' },
              { value: 0.28, name: '40-50' },
              { value: 0.32, name: '50-60' },
            ]
          }
        ]
      });
    })
    return{colors}
  }
}
</script>