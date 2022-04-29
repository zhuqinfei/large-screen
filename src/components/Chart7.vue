<template>
    <div className="年龄段-图1">
        <div className="chart">
            <div className="main" id="chart7"></div>
            <div className="text">性别</div>
        </div>
        <div className="legend">
            <span className="male" />男
            <span className="female" />女
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
            let myChart = echarts.init(document.getElementById("chart7"));
            myChart.setOption({
                 ...baseEchartOptions,
                color: ['#8D70F8', '#33A4FA'],
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
                                return options.value * 100 + '%';
                            }
                        },
                        labelLine: { show: false },
                        itemStyle: {
                            borderColor: '#0F113A',
                            borderWidth: px(4)
                        },
                        data: [
                            { value: 0.41, name: '女' },
                            { value: 0.59, name: '男' },
                        ]
                    }
                ]
            });
        })
    }
}
</script>