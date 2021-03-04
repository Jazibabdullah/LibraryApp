import React, {Component} from 'react';
import {BlurView} from '@react-native-community/blur';
import styles from './LoginStyle';
import {Container, View, Content} from 'native-base';
import {HelperText} from 'react-native-paper';
import {TextInput, TouchableOpacity, Image, Text} from 'react-native';
import {
  required,
  validateEmail,
  minLength7,
  maxLength14,
  validatePassword,
} from '../../utils/validators';
export default class FABExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: '',
      Lastname: '',
      email: '',
      password: '',
    };
  }
  hasErrors = () => {
    return !this.state.email.includes('@');
  };
  required = () => {
    return !this.state.email != '';
  };
  disable = () => {
    if (this.state.email == '' || this.state.password == '') {
      return true;
    }
  };

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
              placeholder="Email"
              onChangeText={(text) => this.setState({email: text})}
              style={styles.input}
            />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <HelperText
                style={{marginHorizontal: 10}}
                type="error"
                visible={this.hasErrors()}>
                Email address is invalid!
              </HelperText>
              <HelperText
                style={{marginHorizontal: 10}}
                type="error"
                visible={this.required()}>
                required!
              </HelperText>
            </View>

            <TextInput
              placeholderTextColor="grey"
              secureTextEntry
              placeholder="Password"
              onChangeText={(text) => this.setState({password: text})}
              style={styles.input}
            />

            <TouchableOpacity
              disabled={this.disable()}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              style={
                this.state.email == '' || this.state.password == ''
                  ? [styles.button, styles.disablebutton]
                  : [styles.button, styles.enablebutton]
              }>
              <Text
                style={
                  this.state.email == '' || this.state.password == ''
                    ? styles.disabletext
                    : styles.text
                }>
                Login
              </Text>
            </TouchableOpacity>
            <View style={styles.dividercontainer}>
              <View style={styles.divider} />

              <Text style={[styles.ortext]}>or</Text>

              <View style={styles.divider} />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RegisterScreen')}
              style={styles.Createaccountbutton}>
              <Text style={styles.text}>create account</Text>
            </TouchableOpacity>
          </View>
         
        </Content>
      </Container>
    );
  }
}
