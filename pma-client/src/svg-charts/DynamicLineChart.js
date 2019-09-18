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

  const Tooltip = ({ x, y }) => (
    <G
        x={ x(2) - (75 / 2) }
        key={ 'tooltip' }
        onPress={ () => console.log('tooltip clicked') }
    >
        <G y={ 50 }>
            <Rect
                height={ 40 }
                width={ 75 }
                stroke={ 'grey' }
                fill={ 'white' }
                ry={ 10 }
                rx={ 10 }
            />
            <Text
                x={ 75 / 2 }
                dy={ 20 }
                alignmentBaseline={ 'middle' }
                textAnchor={ 'middle' }
                stroke={ 'rgb(134, 65, 244)' }
            >
                { `${chartData[2]}ºC` }
            </Text>
        </G>
        <G x={ 75 / 2 }>
            <Line
                y1={ 50 + 40 }
                y2={ y(chartData[2]) }
                stroke={ 'grey' }
                strokeWidth={ 2 }
            />
            <Circle
                cy={ y(chartData[2]) }
                r={ 6 }
                stroke={ 'rgb(134, 65, 244)' }
                strokeWidth={ 2 }
                fill={ 'white' }
            />
        </G>
    </G>
)

  return (
    <View style={{ flex:1,height: 200, flexDirection: 'row' }}>
      <YAxis
        data={chartData}
        style={{marginRight:5 }}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />
      <AreaChart
          style={{flex:1 }}
          data={chartData}
          contentInset={{ top:20,left:20,right:20,bottom:20}}
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
            style={{ marginTop: 200, height: xAxisHeight }}
            data={chartData}
            formatLabel={(_, index) => xAxisLabel[index]}
            contentInset={{ left: 20, right: 20 }}
            svg={axesSvg}
          />
          {/* <Tooltip/> */}
        </AreaChart>
    </View>
  )
}


export  {DynamicLineChart};
