import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../container/Home/Home';
import Library from '../container/Library/Library';
import Colors from '../Assets/Colors/Colors';
import Search from '../container/Search/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DrawerComponent from './Drawernavigation';
import {
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const tabBottom = createBottomTabNavigator();

const Librarystack = createStackNavigator();
const Searchstack = createStackNavigator();

const Librarystackscreen = ({navigation}) => (
  <Librarystack.Navigator
    screenOptions={{
      headerStyle: {},

      headerTitleAlign: 'center',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    }}>
    <Librarystack.Screen
      name="Home"
      component={Library}
      options={{
        title: 'Library',
      }}
    />
  </Librarystack.Navigator>
);
const Searchstackscreen = ({navigation}) => (
  <Searchstack.Navigator
    screenOptions={{
      headerStyle: {},

      headerTitleAlign: 'center',
      headerShown: false,
      headerTitleStyle: {
        alignSelf: 'center',
      },
    }}>
    <Searchstack.Screen
      name="Search"
      component={Search}
      options={{
        title: 'Search',
      }}
    />
  </Searchstack.Navigator>
);

class design extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tabBottom.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'md-home' : 'md-home-outline';
            } else if (route.name === 'Library') {
              iconName = focused ? 'md-library-sharp' : 'md-library-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: 'gray',
        }}>
        <tabBottom.Screen name="Home" component={DrawerComponent}  />
        <tabBottom.Screen name="Library" component={Librarystackscreen}  />
        <tabBottom.Screen name="Search" component={Searchstackscreen} />
      </tabBottom.Navigator>
    );
  }
}
export default design;
