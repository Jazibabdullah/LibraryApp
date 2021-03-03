import React, {Component} from 'react';

import styles from './RegisterStyle';
import {Container, View, Content} from 'native-base';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
export default class FABExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: '',
      Lastname: '',
      email: '',
      password: '',
      accountcreated: false,
    };
  }

  disable = () => {
    if (
      this.state.Firstname == '' ||
      this.state.Lastname == '' ||
      this.state.email == '' ||
      this.state.password == ''
    )
      return true;
  };
  createaccount() {
    this.setState({accountcreated: true});
  }

  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <View>
            <View style={styles.logocontainer}>
              <Image
                style={styles.image}
                source={require('../../Assets/images/MUVlogo.png')}
              />
            </View>
          </View>
          <View style={styles.item}>
            <TextInput
              placeholderTextColor="grey"
              placeholder="First Name"
              onChangeText={(text) => this.setState({Firstname: text})}
              style={styles.input}
            />
            <TextInput
              placeholderTextColor="grey"
              placeholder="Last Name"
              onChangeText={(text) => this.setState({Lastname: text})}
              style={styles.input}
            />
            <TextInput
              placeholderTextColor="grey"
              placeholder="Email"
              onChangeText={(text) => this.setState({email: text})}
              style={styles.input}
            />
            <TextInput
              secureTextEntry
              placeholderTextColor="grey"
              placeholder="Password"
              onChangeText={(text) => this.setState({password: text})}
              style={styles.input}
            />
            {this.state.accountcreated === true ? (
              <View>
                <View style={styles.accountverifycontainer}>
                  <Text style={styles.accountcreatedtext}>Account Created</Text>
                  <Text style={styles.textcolor}>
                    Please verify your account in your email
                  </Text>
                </View>
                <TouchableOpacity
                  disabled={this.disable()}
                  onPress={() => this.props.navigation.navigate('LoginScreen')}
                  style={[styles.button, {marginTop: 40}, styles.enablebutton]}>
                  <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                disabled={this.disable()}
                onPress={() => this.createaccount()}
                style={
                  this.state.Firstname == '' ||
                  this.state.Lastname == '' ||
                  this.state.email == '' ||
                  this.state.password == ''
                    ? [styles.button, styles.disablebutton]
                    : [styles.button, styles.enablebutton]
                }>
                <Text
                  style={
                    this.state.Firstname == '' ||
                    this.state.Lastname == '' ||
                    this.state.email == '' ||
                    this.state.password == ''
                      ? styles.disabletext
                      : styles.text
                  }>
                  create account
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </Content>
      </Container>
    );
  }
}
