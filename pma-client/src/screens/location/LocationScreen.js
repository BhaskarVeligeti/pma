// import './_mockLocation' // fake location to test
import React, { useContext } from 'react';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import { Text } from 'react-native-elements'
const { width, height } = Dimensions.get('window');
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../../components/Map'
import { Context as LocationContext } from '../../context/LocationContext'
import useLocation from '../../hooks/useLocation'


const LocationScreen = ({ navigation, isFocused }) => {
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation);
    const { container } = styles

    //  console.log('isFocused :', isFocused)

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

export default withNavigationFocus(LocationScreen);