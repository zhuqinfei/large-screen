<template>
        <div className="bordered 管辖统计">
            <h2>人口分布统计</h2>
            <div id="chart" className="chart"></div>
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
            let myChart = echarts.init(document.getElementById("chart"));
         
            myChart.setOption({
               ...baseEchartOptions,
                xAxis: {
                    data: ['罗湖区', '福田区', '南山区', '盐田区', '宝安区', '龙华区', '龙岗区', '坪山区', '光明区'],
                    axisTick: { show: false },
                    axisLine: {
                        lineStyle: { color: '#083B70' }
                    },
                    axisLabel: {
                        fontSize: px(12),
                        interval:0,
                        formatter(val) {
                            if (val.length > 2) {
                                const array = val.split('');
                                array.splice(2, 0, '\n');
                                return array.join('');
                            } else {
                                return val;
                            }
                        }
                    }
                },
                yAxis: {
                    splitLine: { show: false },
                    axisLine: {
                        show: true,
                        lineStyle: { color: '#083B70' }
                    },
                    axisLabel: {
                        fontSize: px(12)
                    }
                },
                series: [
                    {
                        type: 'bar',
                        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
                    }
                ]
            });
        })
    }
}
</script>
