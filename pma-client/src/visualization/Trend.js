import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { DynamicLineChart} from '../svg-charts'
import { Feather } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import Spacer from '../components/Spacer'
// data
import { YearlySales } from '../fixtures/staticdata.json.js'


const Trend = () => {

  const { headerTextStyle, salesContainer, containerStyle, iconStyle } = styles

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <ScrollView >
      <View style={salesContainer}>
          <Feather name="info" style={iconStyle} />
          <Text style={headerTextStyle}> Sales trend analysis</Text>
        </View>
        <Card containerStyle={containerStyle}>
          <DynamicLineChart data={YearlySales.data} fill='#17a2b8' />
        </Card>
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

export default Trend;
