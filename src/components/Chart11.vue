<template>
    <div className="chart11">
        <div className="chart">
            <div className="main" id="chart11"></div>
        </div>
        <div class="legend">
            <span :style="{ background: colors[0] }" />网上
            <span :style="{ background: colors[1] }" />实体
            <span :style="{ background: colors[2] }" />电话
            <span :style="{ background: colors[3] }" />电视
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
        const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
        onMounted(() => {
            let myChart = echarts.init(document.getElementById("chart11"));
            myChart.setOption({
                ...baseEchartOptions,
                color: colors,
                xAxis: {
                    show: false,
                    axisLabel: {
                        fontSize: px(12),
                    },
                },
                yAxis: {
                    show: false,
                    axisLabel: {
                        fontSize: px(12),
                    },
                },
                legend: { show: false },
                series: [
                    {
                        startAngle: -20,
                        type: 'pie',
                        radius: ['25%', '90%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: true, position: 'outside', textStyle: { color: 'white', fontSize: px(20) },
                            distanceToLabelLine: 0,
                            formatter(options) {
                                return options.value * 100 + '%';
                            }
                        },
                        labelLine: { show: true, length: 0 },
                        roseType: 'area',
                        itemStyle: {
                            shadowBlur: px(200),
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        data: [
                            { value: 0.36, name: '网上' },
                            { value: 0.20, name: '实体' },
                            { value: 0.18, name: '电话' },
                            { value: 0.24, name: '电视' },
                        ]
                    }
                ]
            });
        })
        return { colors }
    }
}
</script>