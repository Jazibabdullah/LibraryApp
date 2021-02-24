import {StyleSheet} from 'react-native';
import Colors from '../../Assets/Colors/Colors';

export default StyleSheet.create({
  container: {flex: 1},
  subcontainer: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    flex: 1,
  },

  disabledfab: {
    backgroundColor: 'grey',
    borderRadius: 50,
  },
  enablefab: {
    backgroundColor: '#5067FF',
    borderRadius: 50,
  },

  textcolor: {color: 'white'},

  imagebackground: {
    flex: 1,
    borderRadius: 5,
    resizeMode: 'contain',
    borderRadius: 20,
    height: '100%',
  },
  cardsubcontaner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookimage: {
    width: '100%',
    height: 400,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  bookdetailcontainer: {
    padding: 10,
    margin: 10,
    alignContent: 'center',
  },
  bookdetailsubcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardheadingtext: {fontSize: 15, color: 'white', fontWeight: 'bold'},
  cardtext: {
    fontSize: 12,
    color: 'white',
  },
  descriptioncontainer: {
    flexDirection: 'column',
  },
  bookstorebutton: {
    backgroundColor: 'orange',
  },
  amazonbutton: {
    backgroundColor: 'black',
  },
});
