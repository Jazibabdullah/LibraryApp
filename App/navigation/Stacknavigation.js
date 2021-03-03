import React from 'react';
import TabNavigator from './Tabnavigation';
import LoginScreen from '../container/Login/Login';
import HomeScreen from '../container/Home/Home';
import LibraryScreen from '../container/Library/Library';
import SearchScreen from '../container/Search/Search';
import BooksScreen from '../container/Books/Books';
import BookDetailScreen from '../container/BookDetail/BookDetail';
import RegisterScreen from '../container/Register/Register';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
function Stacknavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
        <Stack.Screen name="BooksScreen" component={BooksScreen} />
        <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stacknavigation;
