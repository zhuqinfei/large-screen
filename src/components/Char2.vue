<template>
    <div className="bordered 破获排名">
        <h2>案件破获排名</h2>
        <div id="chart2" className="chart"></div>
        <div className="legend">
            <span className="first" />破案排名1
            <span className="second" />破案排名2
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
        onMounted(() => {
            let myChart = echarts.init(document.getElementById("chart2"));
            myChart.setOption({
                ...baseEchartOptions,
                grid: {
                    x: px(60),
                    y: px(40),
                    x2: px(40),
                    y2: px(40),
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLabel: {
                        fontSize: px(12),
                        show: false
                    },
                    splitLine: { show: false },
                },
                yAxis: {
                    type: 'category',
                    data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局',
                        '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
                    axisLabel: {
                        fontSize: px(12),
                        formatter(val) {
                            return val.replace('公安局', '\n公安局');
                        }
                    },
                    axisTick: { show: false },
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                    },
                    {
                        name: '2012年',
                        type: 'bar',
                        data: [2, 3, 4, 5, 6, 7, 8, 9, 10]
                    }
                ]
            });
        })
    }
}
</script>
