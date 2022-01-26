// 雷达图echarts的使用

import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { Card } from 'antd';

export default class Stactic extends React.Component{
    getOption=()=>{
        
           const option = {
                tooltip: {
                  trigger: 'item'
                },
                legend: {
                  top: '5%',
                  left: 'center'
                },
                series: [
                  {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                      }
                    },
                    labelLine: {
                      show: false
                    },
                    data: [
                      { value: 1048, name: 'Search Engine' },
                      { value: 735, name: 'Direct' },
                      { value: 580, name: 'Email' },
                      { value: 484, name: 'Union Ads' },
                      { value: 300, name: 'Video Ads' }
                    ]
                  }
                ]
              }
              return option;
        
    }
    render() {
        return (
            <>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: '100%',margin:'20px' }}>
                    <ReactEcharts option={this.getOption()}></ReactEcharts>
                </Card>
            </>
        )
    }
}

