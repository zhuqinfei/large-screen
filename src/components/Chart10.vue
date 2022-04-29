<template>
    <div id="chart10" className="chart"></div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import { baseEchartOptions } from '../shared/base-echart-options';
import { px } from '../shared/px';

export default {
    setup() {
        onMounted(() => {
            let myChart = echarts.init(document.getElementById("chart10"));

            myChart.setOption({
                ...baseEchartOptions,
                xAxis: {
                    data: ['网上购物', '实体购物', '电话购物', '电视购物', '其他'],
                    axisTick: { show: false },
                    axisLine: {
                        lineStyle: { color: '#083B70' }
                    },
                    axisLabel: {
                        interval:0,
                        fontSize: px(12),
                        formatter(val) {
                            if (val.length > 2) {
                                const array = val.split('');
                                array.splice(2, 0, '\n');
                                return array.join('');
                            } else {
                                return val;
                            }
                        }
                    },
                },

                yAxis: {
                    splitLine: { show: false },
                    axisLine: {
                        show: true,
                        lineStyle: { color: '#083B70' }
                    },
                    axisLabel: {
                        fontSize: px(12),
                    },
                },
                series: [{
                    type: 'bar',
                    data: [40, 22, 20, 18, 32],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0A97FB'
                    }, {
                        offset: 1,
                        color: '#1E34FA'
                    }]),
                }]
            });
        })
    }
}
</script>