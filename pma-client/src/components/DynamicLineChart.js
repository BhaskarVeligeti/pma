import React from 'react'
import { AreaChart,LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { Text, LinearGradient, Stop, Defs, Circle, G, Line, Rect } from 'react-native-svg'
import { View } from 'react-native';
import * as d3 from 'd3'


const DynamicLineChart = ({ data, fill }) => {
  const axesSvg = { fontSize: 11, fill: '#007bff' };
  const verticalContentInset = { top: 10, bottom: 10 }
  const xAxisHeight = 20


  const chartData = data.map(({ xValue, yValue }, index) => yValue);
  const xAxisLabel = data.map(({ xValue, yValue }, index) => xValue);

  // console.log('chartData :', chartData, xAxisLabel)

  // const Gradient = () => (
  //   <Defs key={'gradient'}>
  //     <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
  //       <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
  //       <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
  //     </LinearGradient>
  //   </Defs>
  // )

  const Gradient = ({ index }) => (
    <Defs key={index}>
        <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
            <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.8}/>
            <Stop offset={'100%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.2}/>
        </LinearGradient>
    </Defs>
)

  const Decorator = ({ x, y, data }) => {
    return chartData.map((value, index) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={4}
        stroke={'rgb(134, 65, 244)'}
        fill={'white'}
      />
    ))
  }


  return (
    <View style={{ flex:1,height: 400, flexDirection: 'row' }}>
      <YAxis
        data={chartData}
        style={{marginRight:5 }}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />
      <AreaChart
          style={{flex:1 }}
          data={chartData}
          contentInset={{ top: 20, bottom: 20 }}
          curve={d3.curveNatural}
          svg={{
            fill:'rgba(134, 65, 244, 0.05)',
            strokeWidth: 2,
            stroke: 'url(#gradient)',
          }}
        >
          <Grid 
            direction={Grid.Direction.HORIZONTAL} 
            svg={{ fill:'#ccc',strokeOpacity: 0.3 }}/>
          <Gradient />
          <Decorator />
          <XAxis
            style={{ marginTop: 400, height: xAxisHeight }}
            data={chartData}
            formatLabel={(_, index) => xAxisLabel[index]}
            contentInset={{ left: 10, right: 10 }}
            svg={axesSvg}


          />
        </AreaChart>
    </View>
  )
}


export default DynamicLineChart;
