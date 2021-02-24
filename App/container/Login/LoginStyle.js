import {StyleSheet} from 'react-native';
import Colors from '../../Assets/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logocontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    
    paddingTop: '4%',
  },
  item: {
    margin: 10,
  },
  input: {
    color: 'white',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    marginHorizontal: '7%',
    marginVertical: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: '7%',
    marginTop: 70,
  },
  enablebutton: {
    borderColor: Colors.primary,
  },
  disablebutton: {
    borderColor: '#303030',
  },
  Createaccountbutton: {
    backgroundColor: 'grey',
    padding: 20,
    marginHorizontal: '7%',
    marginTop: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',

    textTransform: 'uppercase',
  },
  ortext: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center',
    paddingHorizontal: '10%',
    textTransform: 'uppercase',
  },
  disabletext: {
    color: '#303030',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  dividercontainer: {
    flexDirection: 'row',
    marginVertical: '17%',
    marginHorizontal: '7%',
    alignItems: 'center',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: '18.25%',
  },
  image: {
    height: 100,
    width: 300,
  },
});
