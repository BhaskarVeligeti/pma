import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import HomeScreen from '../screens/MyHomeScreen';
import Sales from '../visualization/Sales';
import Trend from '../visualization/Trend';
import Product from '../visualization/Product';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// ******************************************** Home flow : *****************************************************

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Sales:Sales,
  Trend:Trend,
  Product:Product,

},{
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: '#ffffff',
      elevation: 0 
    },
    headerTintColor: '#6f42c1', 
  }
}
)


HomeStack.path = '';

const homeStackNavigator = createStackNavigator({
  HomeStack: {
    screen: HomeStack,
    navigationOptions: {
      header: null
    },
  },
}, config);

homeStackNavigator.path = '';

export default homeStackNavigator;
