import {StyleSheet} from 'react-native';
import Colors from '../../Assets/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  
  item: {
    margin: 10,
  },
  input: {
    color: 'white',
    borderBottomColor: '#946E1C',
    borderBottomWidth: 1,
    marginHorizontal: '7%',
    marginVertical: 10,
  },
  accountverifycontainer: {
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: '10%',
  },
  accountcreatedtext:{
    color: 'grey',
    fontWeight: 'bold',
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
    borderColor: '#400EA6',
  },
  disablebutton: {
    borderColor: '#303030',
  },
  textcolor: {color: 'grey'},
  text: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  disabletext: {
    color: '#303030',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  image: {
    height: 100,
    width: 300,
  },
});
