import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator,TouchableOpacity,TouchableHighlight  } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';
import { Text, Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
import { withNavigation, withNavigationFocus } from 'react-navigation'
import { LinearGradient } from 'expo-linear-gradient';

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
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
            color={"#6f42c1"}
            style={{marginTop:height/2}}
             />;
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
                <TouchableHighlight  
                onPress={() => navigation.navigate('Signin')}
                underlayColor='#6d3ab0'
                activeOpacity={0.4}
                >
                     <LinearGradient
                    colors={['#a94bb9', '#9b46b7', '#8d42b5', '#7d3eb2', '#6d3ab0']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={[bubble, button]}
                >
                   <AntDesign name="login" style={iconStyle} />
                </LinearGradient>
                </TouchableHighlight >
            </View>


        </>
    )
};


const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        width: width,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
 
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 15,
        backgroundColor: 'transparent',
        marginBottom: 0,  
     
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,1)',
        paddingHorizontal: 15,
        paddingVertical: 10
     
    },
    viewStyle: {
        marginTop: 30,
        marginRight: 10,
        alignSelf: 'flex-end',
        color: '#007bff'
    },
    iconStyle: {
        fontSize: 25,
        color: 'white'
    },
});

export default withNavigation(Map);
