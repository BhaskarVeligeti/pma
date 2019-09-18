import React from 'react'
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { Text, LinearGradient, Stop, Defs } from 'react-native-svg'
import { View } from 'react-native';
import * as d3 from 'd3'


const DynamicBarChart = ({ data, fill }) => {
  const CUT_OFF = 20
  const chartData = data.map(({ xValue, yValue }, index) => yValue);
  const xAxisLabel = data.map(({ xValue, yValue }, index) => xValue);

  // console.log('chartData :', chartData, xAxisLabel)

  const Gradient = () => (
    <Defs key={'gradient'}>
      <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
        <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
        <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
      </LinearGradient>
    </Defs>
  )


  const Labels = ({ x, y, bandwidth }) => (
    chartData.map((value, index) => (
      <Text
        key={index}
        x={x(index) + (bandwidth / 2)}
        y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
        fontSize={14}
        fill={value >= CUT_OFF ? 'white' : 'black'}
        alignmentBaseline={'middle'}
        textAnchor={'middle'}
      >
        {value}
      </Text>
    ))
  )



  return (
    <View style={{ flexDirection: 'row', height: 200, paddingVertical: 20, marginTop: -20, }}>
      <BarChart
        style={{ flex: 1 }}
        data={chartData}
        svg={{
          strokeWidth: 2,
          fill: 'url(#gradient)',
        }}
        contentInset={{ top: 20, bottom: 10 }} // margin in svg
        gridMin={0}
        numberOfTicks={6}
      >
        <Grid
          direction={Grid.Direction.HORIZONTAL}
          svg={{ fill: '#ccc', strokeOpacity: 0.3 }} />
        <Gradient />
        <Labels />
        <XAxis
          data={chartData}
          formatLabel={(_, index) => xAxisLabel[index]}
          contentInset={{ left: 30, right: 40 }}
          style={{ marginHorizontal: 10, height: 30, marginTop: 160 }}
          svg={{ fontSize: 11, fill: '#007bff' }}
        />
      </BarChart>

    </View>
  )
}


export  {DynamicBarChart};
