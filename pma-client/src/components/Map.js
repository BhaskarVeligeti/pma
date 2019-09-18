import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';
import { Text, Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
import { withNavigation } from 'react-navigation'


const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0234;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const Map = ({ navigation }) => {
    const { state: { currentLocation } } = useContext(LocationContext);

    const { map, viewStyle, iconStyle, button, buttonContainer, bubble } = styles
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
            size='large'
            color={"#6f42c1"} />;
    }


    return (
        <>
            <MapView
                style={map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
                }}
            // region={{
            //     ...currentLocation.coords,
            //     latitudeDelta: 0.01,
            //     longitudeDelta: 0.01
            // }}
            >

                {/* <TouchableOpacity 
           onPress = {() => MapView.animateCamera({
               center: {...currentLocation.coords}})}
          >
                <Circle
                    center={currentLocation.coords}
                    radius={20}
                    // strokeColor="rgba(158, 158, 255, 1.0)"
                    // fillColor="rgba(158, 158, 255, 0.3)"
                    strokeColor="rgba(158, 0, 0, 1.0)"
                    fillColor="rgba(158, 0, 0, 0.3)"
                    strokeWidth={2}
                    />
               
              </TouchableOpacity> */}
                <Marker.Animated coordinate={currentLocation.coords} pinColor={'#ffd8b1'} />

                <Text style={viewStyle}>{currentLocation.coords.latitude} {currentLocation.coords.longitude}</Text>

            </MapView>

            {/* <Button
                    icon={<AntDesign name="login" style={iconStyle} />}
                    iconRight
                    title={' '}
                    onPress={() => navigation.navigate('Signin')}
                    raised
                    buttonStyle={{ borderRadius: 2 }}
                /> */}


            <View style={buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signin')}
                    style={[bubble, button]}

                >
                    <AntDesign name="login" style={iconStyle} />
                </TouchableOpacity>
            </View>


        </>
    )
};


const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
        marginBottom: 0,
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
        marginRight: 20,
    },
    viewStyle: {
        marginTop: 30,
        marginRight: 10,
        alignSelf: 'flex-end',
        color: '#007bff'
    },
    iconStyle: {
        fontSize: 24,
        color: '#6f42c1'
    },
});

export default withNavigation(Map);
