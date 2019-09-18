import React from 'react'
import { AreaChart,PieChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { Text, LinearGradient, Stop, Defs, Circle, G, Line } from 'react-native-svg'
import { View } from 'react-native';
import * as d3 from 'd3'


const DynamicPieChart = ({ data }) => {
  const axesSvg = { fontSize: 11, fill: '#007bff' };
  const verticalContentInset = { top: 10, bottom: 10 }
  const xAxisHeight = 20


  const chartData = data.map(({ xValue, yValue }, index) => yValue);


  // console.log('chartData :', chartData, xAxisLabel)
  const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

  const pieData = chartData
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: { fill: randomColor() },
      key: `pie-${index}`,
    }))

    const Labels = ({ slices }) => {
      return slices.map((slice, index) => {
          const { labelCentroid, pieCentroid, data } = slice;
          // console.log('data:',data)
          return (
              <G key={ index }>
                  <Line
                      x1={ labelCentroid[ 0 ] }
                      y1={ labelCentroid[ 1 ] }
                      x2={ pieCentroid[ 0 ] }
                      y2={ pieCentroid[ 1 ] }
                      stroke={ data.svg.fill }
                  />
                  <Circle
                      cx={ labelCentroid[ 0 ] }
                      cy={ labelCentroid[ 1 ] }
                      r={ 15 }
                      fill={ data.svg.fill }
                  />
                     <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={14}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                       {data.value}
                    </Text>

              </G>
          )
      })
  }


  return (
    <>
   <PieChart
                style={ { height: 350} }
                data={ pieData }
                innerRadius={ 20 }
                outerRadius={ 110 }
                labelRadius={ 150 }
            >
                <Labels/>
            </PieChart>
    </>
  )
}


export  {DynamicPieChart};
