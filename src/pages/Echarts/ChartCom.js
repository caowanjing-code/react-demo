// 平滑曲线echarts的使用

import React, { Component } from 'react'
import { Card } from 'antd';
import ReactEcharts from 'echarts-for-react'

export default class ChartCom extends Component {
    getChartOption = () => {
        return {
            xAxis: {
                type: 'category',
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '30%']
            },
            visualMap: {
                type: 'piecewise',
                show: false,
                dimension: 0,
                seriesIndex: 0,
                pieces: [{
                    gt: 1,
                    lt: 3,
                    color: 'rgba(0, 0, 180, 0.4)'
                }, {
                    gt: 5,
                    lt: 7,
                    color: 'rgba(0, 0, 180, 0.4)'
                }]
            },
            series: [
                {
                    type: 'line',
                    smooth: 0.6,
                    symbol: 'none',
                    lineStyle: {
                        color: '#5470C6',
                        width: 5
                    },
                    markLine: {
                        symbol: ['none', 'none'],
                        label: {show: false},
                        data: [
                            {xAxis: 1},
                            {xAxis: 3},
                            {xAxis: 5},
                            {xAxis: 7}
                        ]
                    },
                    areaStyle: {},
                    data: [
                        ['2019-10-10', 200],
                        ['2019-10-11', 560],
                        ['2019-10-12', 750],
                        ['2019-10-13', 580],
                        ['2019-10-14', 250],
                        ['2019-10-15', 300],
                        ['2019-10-16', 450],
                        ['2019-10-17', 300],
                        ['2019-10-18', 100]
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: '100%',margin:'20px' }}>
                    <ReactEcharts option={this.getChartOption()}></ReactEcharts>
                </Card>
            </>
        )
    }
}
