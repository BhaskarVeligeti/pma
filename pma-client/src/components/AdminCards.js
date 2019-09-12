import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import { Text, Card } from 'react-native-elements';
import { withNavigation } from 'react-navigation'
import Spacer from './Spacer'
const { width, height } = Dimensions.get('window');

const AdminCards = ({ navigation }) => {

    const { containerStyle, viewStyle, textStyle, imageStyle } = styles
    return (
        <View style={{ backgroundColor: '#ffffff' }}>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Sales')}>
                    <Card
                        key={1}
                        
                        title={
                            <View style={viewStyle}>
                                <Text style={textStyle}>{'Sales'}</Text>
                            </View>
                        }
                        containerStyle={containerStyle}
                        image={require(`../../assets/Loader.gif`)}

                    >
                    </Card>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('Trend')}>
                    <Card
                        key={2}
                        title={
                            <View style={viewStyle}>
                                <Text style={textStyle}>{'Sales Trend Analysis'}</Text>
                            </View>
                        }
                        containerStyle={containerStyle}
                        image={require(`../../assets/Loader.gif`)}
                    >
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                    <Card
                        key={3}
                        title={
                            <View style={viewStyle}>
                                <Text style={textStyle}>{'Product  Sales Analysis'}</Text>
                            </View>
                        }
                        containerStyle={containerStyle}
                        image={require(`../../assets/Loader.gif`)}
                    >
                    </Card>
                </TouchableOpacity>
                <Spacer />
            </ScrollView>
        </View>
    )

}
const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderColor: '#17a2b8',
        shadowColor: "#343a40",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 20.00,
        elevation: 30,
        // height:200

    },
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#17a2b8',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        marginBottom: 15
    },
    textStyle: {
        color: '#fff', margin: 10,
        textShadowColor: '#000',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
        fontSize: 18
    },
    imageStyle: {
        flex: 1,
        width: 200, height: 150,
        alignSelf: 'center',
        alignContent: 'center'

    }
})



export default withNavigation(AdminCards);