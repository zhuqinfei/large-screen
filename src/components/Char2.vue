<template>
    <div class="bordered 增长排名">
        <h2>经济增长排名</h2>
        <div id="chart2" class="chart"></div>
        <div class="legend">
            <span class="first" />增长排名1
            <span class="second" />增长排名2
        </div>
    </div>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import {nextTick, onMounted, onUpdated, ref, } from 'vue';
import { baseEchartOptions } from '../shared/base-echart-options';
import { px } from '../shared/px'
export default {
    setup() {
        const myChart = ref(null)
        const data = [
            { name: '罗湖区', 2011: 2, 2012: 4},
            { name: '福田区', 2011: 2, 2012: 3 },
            { name: '南山区', 2011: 2, 2012: 3 },
            { name: '盐田区', 2011: 2, 2012: 3 },
            { name: '宝安区', 2011: 2, 2012: 3 },
            { name: '龙华区', 2011: 2, 2012: 3 },
            { name: '龙岗区', 2011: 2, 2012: 3 },
            { name: '坪山区', 2011: 2, 2012: 3 },
            { name: '光明区', 2011: 2, 2012: 3 },
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
                    data: data.map(i=>i.name),
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
                        data: data.map(i=>i[2011]),
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
                        data: data.map(i=>i[2012]),
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
      
        nextTick(()=>{
              setInterval(() => {
                const newData = [
                    { name: '罗湖区', 2011: 2, 2012: Math.random() * 10 },
                    { name: '福田区', 2011: 2, 2012: 3 },
                    { name: '南山区', 2011: 2, 2012: 3 },
                    { name: '盐田区', 2011: 2, 2012: 3 },
                    { name: '宝安区', 2011: 2, 2012: 3 },
                    { name: '龙华区', 2011: 2, 2012: 3 },
                    { name: '龙岗区', 2011: 2, 2012: 3 },
                    { name: '坪山区', 2011: 2, 2012: 3 },
                    { name: '光明区', 2011: 2, 2012: 3 },
                ];
                x(newData);
            }, 1000);
        })
    }
}
</script>
