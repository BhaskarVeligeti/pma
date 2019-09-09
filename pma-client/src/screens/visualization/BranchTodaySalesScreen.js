import React, { useState } from 'react';
import { ScrollView, RefreshControl, StyleSheet, View,  Dimensions,TouchableOpacity } from 'react-native';
import { Text, ListItem, Divider } from 'react-native-elements';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import BarChartView from '../../d3/BarChartView'
import {branchTodaySales as data} from '../../fixtures/staticdata.json.js'
const { width, height } = Dimensions.get('window');

const BranchTodaySalesScreen = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false);
    const { containerStyle } = styles

    _onRefresh = () => {
        setRefreshing(true);
        // fetchProduct();
        setTimeout(() => {
            setRefreshing(false);
        }, 3000);

    }


    var margin={left: 50, right: 60, top: 60, bottom:120}
    return (
        
        <View style={containerStyle}>
            {/* <Loader loading={loading} /> */}
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing} //Whether the view should be indicating an active refresh.
                                onRefresh={() => _onRefresh()} // Called when the view starts refreshing.
                                colors={["#6f42c1", "#007bff", "#dc3545", "#28a745", "#007bff", "#17a2b8"]}/>}>

                    <BarChartView
						gdata={data}
						container={'TodaySales'}
						width= '300'
						height= '200'
						margin={margin}
						xAxisLabel="Branch"
						yAxisLabel="Sales"
						isFormat="Y"
						label={''}/>

                    </ScrollView>
            </View>
    )

}


const styles = StyleSheet.create({
    containerStyle: {
        // borderColor: '#6610f2',
        // borderWidth: 1,
        flex: 1,
    },

   
});

export default BranchTodaySalesScreen;