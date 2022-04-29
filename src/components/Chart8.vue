<template>
  <div className="年龄段-图2">
    <div className="chart">
      <div className="main" id="chart8" />
      <div className="text">年龄段</div>
    </div>
    <div className="legend">
      <span :style="{ background: colors[0] }" />0-20
      <span :style="{ background: colors[1] }" />20-40
      <span :style="{ background: colors[2] }" />40-60
      <span :style="{ background: colors[3] }" />60-80
   
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
              { value: 0.15, name: '0-20' },
              { value: 0.62, name: '20-40' },
              { value: 0.15, name: '40-60' },
              { value: 0.06, name: '60-80' },
              { value: 0.02, name: '80-100' },
            ]
          }
        ]
      });
    })
    return{colors}
  }
}
</script>