<template>
    <div class="bordered 破获排名">
        <h2>案件破获排名</h2>
        <div id="chart2" class="chart"></div>
        <div class="legend">
            <span class="first" />破案排名1
            <span class="second" />破案排名2
        </div>
    </div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import {onMounted, onUpdated, ref, } from 'vue';
import { baseEchartOptions } from '../shared/base-echart-options';
import { px } from '../shared/px'
export default {
    setup() {
        const myChart = ref(null)
        const data = [
            { name: '城关区公安局', 2011: 2, 2012: 3 },
            { name: '七里河区公安局', 2011: 2, 2012: 3 },
            { name: '西固区公安局', 2011: 2, 2012: 3 },
            { name: '安宁区公安局', 2011: 2, 2012: 3 },
            { name: '红古区公安局', 2011: 2, 2012: 3 },
            { name: '永登县公安局', 2011: 2, 2012: 3 },
            { name: '皋兰县公安局', 2011: 2, 2012: 3 },
            { name: '榆中县公安局', 2011: 2, 2012: 3 },
            { name: '新区公安局', 2011: 2, 2012: 3 },
        ];
        const x = (data) => {
            myChart.current.setOption({
                ...baseEchartOptions,
                grid: {
                    x: px(62),
                    y: px(20),
                    x2: px(20),
                    y2: px(20),
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
                        },
                        //interval: 0,
                    },
                    axisTick: { show: false },
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#2034f9'
                                }, {
                                    offset: 1,
                                    color: '#04a1ff'
                                }]),
                            }
                        }
                    },
                    {
                        name: '2012年',
                        type: 'bar',
                        data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#b92ae8'
                                }, {
                                    offset: 1,
                                    color: '#6773e7'
                                }]),
                            }
                        }
                    }

                ]
            });
        }
        onMounted(() => {
            myChart.current = echarts.init(document.getElementById("chart2"));
            x(data);
        })
        onUpdated(() => {
            setInterval(() => {
                const newData = [
                    { name: '城关区公安局', 2011: 2, 2012: Math.random() * 10 },
                    { name: '七里河区公安局', 2011: 2, 2012: 3 },
                    { name: '西固区公安局', 2011: 2, 2012: 3 },
                    { name: '安宁区公安局', 2011: 2, 2012: 3 },
                    { name: '红古区公安局', 2011: 2, 2012: 3 },
                    { name: '永登县公安局', 2011: 2, 2012: 3 },
                    { name: '皋兰县公安局', 2011: 2, 2012: 3 },
                    { name: '榆中县公安局', 2011: 2, 2012: 3 },
                    { name: '新区公安局', 2011: 2, 2012: 3 },
                ];
                x(newData);
            }, 100);
        })
    }
}
</script>
