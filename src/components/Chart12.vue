<template>
    <div class="chart12">
        <div class="chart">
            <div class="main" id="chart12" />
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
        const data = [
            { value: 0.06, name: 'QQ' },
            { value: 0.21, name: '微信' },
            { value: 0.11, name: '抖音' },
            { value: 0.09, name: '快手' },
            { value: 0.12, name: '陌陌' },
            { value: 0.05, name: '淘宝' },
            { value: 0.12, name: '探探' },
        ];
        onMounted(() => {
            let myChart = echarts.init(document.getElementById("chart12"));
            myChart.setOption({
                ...baseEchartOptions,
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
                grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    top: 'center',
                    textStyle: { color: 'white' },
                    itemWidth: px(10),
                    itemHeight: px(10),

                },
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        center: ['60%', '50%'],
                        type: 'pie',
                        radius: '80%',
                        label: { show: false },
                        labelLine: { show: false },
                        data: data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        })
    }
}
</script>