import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  Image,
  Icons,
  TouchableOpacity,
} from 'react-native';

import HomeComponent from '../container/Home/Home';
import {DrawerContent} from '../container/DrawerContent/DrawerContent';
const Drawer = createDrawerNavigator();
const homestack = createStackNavigator();

const homestackscreen = ({navigation}) => (
  <homestack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
      },

      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: 'white',
        alignSelf: 'center',
      },
    }}>
    <homestack.Screen
      name="Home"
      component={HomeComponent}
      options={{
        title: 'Home',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../Assets/images/white-menu-icon-12.jpg')}
              style={{width: 50, height: 50}}
            />
            {/* <Icons
              name="menu-outline"
              color="white"
              tintcolor="white"
              stye={{backgroundcolor: 'white'}}
            /> */}
          </TouchableOpacity>
        ),
      }}
    />
  </homestack.Navigator>
);

class design extends Component {
  render() {
    return (
      <Drawer.Navigator
        screenOptions={{headerTitleAlign: 'center'}}
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={homestackscreen}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    );
  }
}
export default design;
