import React from 'react'
import { BarChart, Grid,AreaChart,LineChart,PieChart,ProgressCircle   } from 'react-native-svg-charts';
import { View, StyleSheet,ScrollView } from 'react-native';
import * as d3 from 'd3'
import Spacer from '../../components/Spacer'

const BarChartTest = () => {
  const fill = 'rgb(134, 65, 244)'
  const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]
  const data2 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
  const data3 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
  const data4 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

  const pieData = data
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))


  return (

    
      <>
<ScrollView>

      <BarChart style={{ height: 250 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
      <Grid />
      </BarChart>
        
      <AreaChart
                style={{ height: 200 }}
                data={data2}
                contentInset={{ top: 30, bottom: 30 }}
                curve={d3.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid />
            </AreaChart>


            <LineChart
                style={{ height: 200 }}
                data={data3}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </LineChart>

            <PieChart style={{ height: 200 }} data={pieData} />
<Spacer />
            <ProgressCircle style={{ height: 200 }} progress={0.7} progressColor={'rgb(134, 65, 244)'} />
            </ScrollView>
    </>
  )
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})

export default BarChartTest;
/*
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BarChart from './BarChart'
import { branchTodaySales } from '../../fixtures/staticdata.json'



const data = [
    { label: 'Jan', value: 500 },
    { label: 'Feb', value: 312 },
    { label: 'Mar', value: 424 },
    { label: 'Apr', value: 745 },
    { label: 'May', value: 89 },
    { label: 'Jun', value: 434 },
    { label: 'Jul', value: 650 },
    { label: 'Aug', value: 980 },
    { label: 'Sep', value: 123 },
    { label: 'Oct', value: 186 },
    { label: 'Nov', value: 689 },
    { label: 'Dec', value: 643 }
  ]


const BarChartTest = () => {
    return (
        <View style={styles.container}>
       <BarChart data={data} round={100} unit="€"/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

export default BarChartTest;

*/