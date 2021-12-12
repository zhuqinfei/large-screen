<template>
    <div id="chart13" class="chart"></div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import { baseEchartOptions } from '../shared/base-echart-options';
import { px } from '../shared/px';

export default {
    setup() {
        const data = [
            { value: 0.08, name: '东岗路' },
            { value: 0.06, name: '段家滩' },
            { value: 0.11, name: '雁北' },
            { value: 0.09, name: '五泉山' },
            { value: 0.12, name: '中山路' },
            { value: 0.06, name: '庆阳路' },
            { value: 0.08, name: '武都路' },
            { value: 0.08, name: '酒泉路' },
            { value: 0.08, name: '天水路' },
        ];
        onMounted(() => {
            let myChart = echarts.init(document.getElementById("chart13"));
            myChart.setOption({
                ...baseEchartOptions,
                xAxis: {
                    data: data.map(i => i.name),
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
                        formatter(value) {
                            return (value * 100).toFixed(0) + '%';
                        }
                    }
                },
                series: [{
                    type: 'bar',
                    data: data.map(i => i.value),
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