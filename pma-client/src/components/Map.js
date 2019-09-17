import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Text } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';

const { width, height } = Dimensions.get('window');

const Map = () => {
    const {state: { currentLocation }} = useContext(LocationContext);

    const { map, viewStyle } = styles
    // console.log('currentLocation :', currentLocation.coords)
    /*
    currentLocation : Object {
  "coords": Object {
    "accuracy": 5,
    "altitude": 5,
    "altitudeAccuracy": 5,
    "heading": 0,
    "latitude": -25.973461,
    "longitude": 28.109205,
    "speed": 0,
  },
  "timestamp": 10000000,
}
    */

    if (!currentLocation) {
        return <ActivityIndicator 
        animating={true}
        size='large' 
        color={"#6f42c1"} 
        style={{ marginTop: 200 }} />;
    }


    return (
        <>
            <MapView
                style={map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                // region={{
                //     ...currentLocation.coords,
                //     latitudeDelta: 0.01,
                //     longitudeDelta: 0.01
                // }}
            >
                <Circle
                    center={currentLocation.coords}
                    radius={20}
                    strokeColor="rgba(158, 158, 255, 1.0)"
                    fillColor="rgba(158, 158, 255, 0.3)" />
            
                <Text style={viewStyle}>{currentLocation.coords.latitude}</Text>
                <Text style={viewStyle}>{currentLocation.coords.longitude}</Text>
        
            </MapView>
           

        </>
    )
};


const styles = StyleSheet.create({
    map: {
        width: width,
        height: height 
    },
    viewStyle: {
     marginRight:10,
     alignSelf:'flex-end',
        color:'#007bff'
    }

});

export default Map;
