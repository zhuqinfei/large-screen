<template>
    <div class="bordered 增长趋势">
        <h2>行业增长趋势</h2>
        <div id="chart3" class="chart" />
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
            let myChart = echarts.init(document.getElementById("chart3"));
            myChart.setOption({
                ...baseEchartOptions,
                legend: {
                    bottom: px(-6),
                    textStyle: { color: 'white' },
                    itemWidth: px(30),
                    itemHeight: px(16),
                    height: px(6)
                },
                grid: {
                    x: px(-6),
                    x2: px(20),
                    y: px(20),
                    y2: px(60),
                    containLabel: true
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
                series: [
                      {
                        name: '餐饮',
                        type: 'line',
                        data: [0.07, 0.06, 0.08, 0.07, 0.06, 0.06, 0.05, 0.04, 0.03].reverse()
                    },
                    {
                        name: '服装',
                        type: 'line',
                        data: [0.05, 0.05, 0.04, 0.05, 0.05, 0.06, 0.07, 0.06, 0.05].reverse()
                    },
                    {
                        name: '旅游',
                        type: 'line',
                        data: [0.07, 0.06, 0.05, 0.04, 0.05, 0.03, 0.04, 0.03, 0.02].reverse()
                    },
                    {
                        name: '酒店',
                        type: 'line',
                        data: [0.04, 0.04, 0.03, 0.03, 0.04, 0.04, 0.03, 0.03, 0.02].reverse()
                    },
                    {
                        name: '金融',
                        type: 'line',
                        data: [0.09, 0.08, 0.08, 0.06, 0.07, 0.08, 0.06, 0.07, 0.06].reverse()
                    }
                ].map(obj => ({
                    ...obj,
                    symbol: 'circle',
                    symbolSize: px(12),
                    lineStyle: { width: px(2) }
                }))
            });
        })
    }
}
</script>
