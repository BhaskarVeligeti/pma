import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet,Dimensions,ActivityIndicator,TouchableHighlight } from 'react-native';
import { Text, Card,Image, } from 'react-native-elements';
import { withNavigation } from 'react-navigation'
import Spacer from './Spacer'
const { width, height } = Dimensions.get('window');

const AdminCards = ({ navigation }) => {

    const { containerStyle, titleStyle,viewStyle, textStyle, imageStyle } = styles
    return (
        <View style={{ backgroundColor: '#ffffff' }}>
            <ScrollView>


             {/* <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                    <Card
                        key={10}
                        
                        title={
                            <View style={viewStyle}>
                                <Text style={textStyle}>{'Where are you now!'}</Text>
                            </View>
                        }
                        containerStyle={containerStyle}
                        image={require(`../../assets/images/Where-are-you.jpg`)}

                    >
                    </Card>
                </TouchableOpacity>  */}

<TouchableOpacity onPress={() => navigation.navigate('Sales')}
                    underlayColor='#f8f9fa'
                    activeOpacity={0.4}
                    >
                    <Card
                        key={1}
                        title={
                            <View style={viewStyle}>
                                <Text style={textStyle}>{'Sales'}</Text>
                            </View>
                        }
                        containerStyle={containerStyle}
                        image={require(`../../assets/images/2.jpg`)}
                        imageStyle={{flex:1,
                            }}

                         >
                            {/* <Image 
                            source={{uri: 'assets:/2.jpg'}} 
                            style={{width: 100, height: 100}} /> */}
                    {/* {    <Image
                            source={require(`../../assets/images/2.jpg`)}
                            PlaceholderContent={<ActivityIndicator />}
                            style={{
                                flex:1,
                                width: width/2, height: height/4,
                                resizeMode: 'contain',
                              }}
                        />} */}
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
                        image={require(`../../assets/images/1.jpg`)}
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
                        image={require(`../../assets/images/3.jpg`)}
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
        // backgroundColor: '#ccc',
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
    titleStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        marginLeft:0,marginRight:0,
        color: '#6f42c1',
    },
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#17a2b8',
        // borderTopLeftRadius: 3,
        // borderTopRightRadius: 3,
        // marginBottom: 15
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