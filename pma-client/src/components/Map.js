import React from 'react';
import { View,StyleSheet, Dimensions } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Text } from 'react-native-elements'
const { width, height } = Dimensions.get('window');

const Map = () => {
    const { map,viewStyle } = styles

    const currentLocation = {
        coords: {
            latitude: -25.973461,
            longitude: 28.109205,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }
    }

    return (
        <>
            <MapView
                style={map}
                initialRegion={{
                    latitude: -25.973461,
                    longitude: 28.109205,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}>
                <Circle
                    center={currentLocation.coords}
                    radius={20}
                    strokeColor="rgba(158, 158, 255, 1.0)"
                    fillColor="rgba(158, 158, 255, 0.3)"
                />

            </MapView>
            <View style={viewStyle}>
            <Text>{currentLocation.coords.latitude}</Text>
            <Text>{currentLocation.coords.longitude}</Text>
            </View>
          
        </>
    )
};


const styles = StyleSheet.create({
    map: {
        width: width,
        height: height / 2 + 200
    },
    viewStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }

});

export default Map;
