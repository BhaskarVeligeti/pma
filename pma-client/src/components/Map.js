import React, { useContext } from 'react';
import { StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import MapView, {Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';
import { Text,Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
import { withNavigation } from 'react-navigation'


const Map = ({ navigation }) => {
    const { state: { currentLocation } } = useContext(LocationContext);

    const { map, viewStyle, iconStyle } = styles
    // console.log('currentLocation :', currentLocation)
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

                <Text style={viewStyle}>{currentLocation.coords.latitude} {currentLocation.coords.longitude}</Text>
              
            </MapView>
       
            <Button
                    icon={<AntDesign name="login" style={iconStyle} />}
                    iconRight
                    title={'Signin '}
                    onPress={() => navigation.navigate('Signin')}
                    raised
                    buttonStyle={{ borderRadius: 2 }}
                />
        </>
    )
};


const styles = StyleSheet.create({
    map: {
        width: width,
        height: height-14
    },
    viewStyle: {
        marginTop: 30,
        marginRight: 10,
        alignSelf: 'flex-end',
        color: '#007bff'
    },
     iconStyle: {
        fontSize: 24,
        color: 'white'
    },
});

export default withNavigation(Map);
