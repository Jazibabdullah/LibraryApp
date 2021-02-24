import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Image,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import styles from './DrawerContentStyle';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [username, setusername] = React.useState('');

  useEffect(() => {});

  const [state, setstate] = React.useState();
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.profilepicturesection}>
              <View style={styles.profilepicture}>
                <Avatar.Image
                  source={require('../../Assets/images/profileloading.png')}
                  size={150}
                />
              </View>

              <View style={styles.titlesection}>
                <Title style={styles.title}>Jazib Abdullah</Title>
                <Caption style={styles.caption}>
                  mjazibabdullah@gmail.comm
                </Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={(color, size) => (
                <Icon name="home-outline" color="white" size={26} />
              )}
              swipeEnabled="false"
              label="Home"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('HomeScreen');
              }}
            />
            {/* </DrawerItem> */}
            <DrawerItem
              icon={(color, size) => (
                <Icon name="library" color="white" size={26} />
              )}
              labelStyle={{color: 'white'}}
              label="Library"
              onPress={() => {
                props.navigation.navigate('LibraryScreen');
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon name="book-search-outline" color="white" size={26} />
              )}
              labelStyle={{color: 'white'}}
              label="Search"
              onPress={() => {
                props.navigation.navigate('SearchScreen');
              }}
            />

            <DrawerItem
              style={{color: 'white'}}
              icon={(color, size) => (
                <Icon name="cog-outline" color="white" size={26} />
              )}
              labelStyle={{color: 'white'}}
              label="Settings"
              //   onPress={() => {
              //     props.navigation.navigate('ProfileScreen');
              //   }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon name="help-circle-outline" color="white" size={26} />
              )}
              labelStyle={{color: 'white'}}
              label="Help & FAQ"
              //   onPress={() => {
              //     props.navigation.navigate('HelpScreen');
              //   }}
            />
            <DrawerItem
              color="white"
              icon={(color, size) => (
                <Icon name="location-exit" color="white" size={26} />
              )}
              labelStyle={{color: 'white'}}
              label="Log Out"
              //   onPress={() => {
              //     clearValues();props.navigation.navigate('LoginScreen');
              //   }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
