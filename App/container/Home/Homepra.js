import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Image
          key={'blurryImage'}
          source={{ uri }}
          style={styles.absolute}
        /> */}
        <Text style={styles.absolute}>Hi, I am some blurred text</Text>
        <Text style={styles.absolute}>Hi, I am some blurred text</Text>
        <Text style={styles.absolute}>Hi, I am some blurred text</Text>
        <Text style={styles.absolute}>Hi, I am some blurred text</Text>
        <Text style={styles.absolute}>Hi, I am some blurred text</Text>
        {/* in terms of positioning and zIndex-ing everything before the BlurView will be blurred */}
        <BlurView
          style={styles.absolute}
          //   viewRef={this.state.viewRef}
          blurType="light"
          blurAmount={90}
          reducedTransparencyFallbackColor="white"
        />
        <Text>
          I'm the non blurred text because I got rendered on top of the BlurView
        </Text>
        <Text style={styles.absolute}>Hi, I am some blurred text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
