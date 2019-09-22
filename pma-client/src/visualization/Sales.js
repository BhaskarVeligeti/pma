import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native';

import {
  DynamicBarChart,
  DynamicLineChart,
  DynamicPieChart,
  DynamicStackedAreaChart,
  DynamicProgressCircle
} from '../svg-charts'


import { Feather } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import Spacer from '../components/Spacer'
// data
import { 
  todaySales, 
  weeklySales, 
  currentMonthSales, 
  currentYearSales,yearSales,  areaSales,
 } from '../fixtures/staticdata.json.js'






const Sales = () => {

  const { headerTextStyle, salesContainer, containerStyle, iconStyle } = styles

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <ScrollView >
        <View style={salesContainer}>
          <Feather name="info" style={iconStyle} />
          <Text style={headerTextStyle}> Daily sales..</Text>
        </View>
        <DynamicBarChart data={todaySales.data} fill='#17a2b8' />
        
        <Spacer />
        <DynamicLineChart data={todaySales.data} fill='#17a2b8' />
        <Spacer />
        <DynamicPieChart data={todaySales.data} />
        <Spacer />

        <DynamicStackedAreaChart data={areaSales.data} />
        <Spacer />
        <DynamicProgressCircle data={areaSales.data} />
        <Spacer />
        <DynamicBarChart data={yearSales.data} fill='#17a2b8' />
        
        <View style={salesContainer}>
          <Feather name="info" style={iconStyle} />
          <Text style={headerTextStyle}> Weekly sales..</Text>
        </View>
        <Card containerStyle={containerStyle}>
          <DynamicBarChart data={weeklySales.data} fill='#007bff' />
        </Card>
        <View style={salesContainer}>
          <Feather name="info" style={iconStyle} />
          <Text style={headerTextStyle}> Current Month sales..</Text>
        </View>
        <Card containerStyle={containerStyle}>
          <DynamicBarChart data={currentMonthSales.data} fill='#28a745' />
        </Card>
        <View style={salesContainer}>
          <Feather name="info" style={iconStyle} />
          <Text style={headerTextStyle}> Current Year sales..</Text>
        </View>
        <DynamicBarChart data={currentYearSales.data} fill='#fd7e14' />
        <Spacer />
      </ScrollView>
    </View>
  )
}




//rgba(134, 65, 244, 0.8)


const styles = StyleSheet.create({
  containerStyle: {
    margin: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#f8f9fa',
    shadowColor: "#343a40",
    shadowOffset: {
      width: 0.5,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 20.50,
    elevation: 10,

  },
  salesContainer: {
    marginTop: 5,
    height: 40,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
  },
  headerTextStyle: {
    color: 'rgba(134, 65, 244, 1)',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    fontSize: 15
  },
  iconStyle: {
    color: 'rgba(134, 65, 244, 1)',
    fontSize: 20,
    
  }
})

export default Sales;
