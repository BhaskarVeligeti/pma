import React from 'react'
import { ProgressCircle  } from 'react-native-svg-charts';
import { View } from 'react-native';
import * as d3 from 'd3'


const DynamicProgressCircle = ({ data }) => {
  const axesSvg = { fontSize: 11, fill: '#007bff' };
  const verticalContentInset = { top: 10, bottom: 10 }
  const xAxisHeight = 20


  const chartData = data.map((data, index) => data);


  return (
    <>
    <ProgressCircle
                style={ { height: 200 } }
                progress={ 0.7 }
                progressColor={'rgb(134, 65, 244)'}
            />
 
    </>
  )
}


export  {DynamicProgressCircle};
