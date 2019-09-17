import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
const { width, height } = Dimensions.get('window');
import Map from '../../components/Map'
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync
} from 'expo-location';


const LocationScreen = ({ navigation }) => {
    const [err, setErr] = useState(null);

    // ask permission when this component render
    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
        } catch (e) {
            setErr(e);
        }
    };

    // run startWatching() first time only 
    useEffect(() => { 
        startWatching() }, 
        []);

    const { container } = styles
    return (
        <>
            {err ? 
            <Text style={{ color: 'red' }}>{'Please enable location service'}</Text> : 
            <Map></Map>}
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }

});

export default LocationScreen;
