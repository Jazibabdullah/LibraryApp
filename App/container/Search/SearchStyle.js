import {StyleSheet} from 'react-native';
import Colors from '../../Assets/Colors/Colors';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 1,
    backgroundColor: 'black',
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'black',
  },
  notfoundcontainer: {
    flex: 1,
    height: 800,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Tag: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textcolor: {color: 'white'},
  skeletoncontainer: {
    backgroundColor: '#131413',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bookcard: {margin: 10, borderRadius: 10},
  cardcontainer: {
    flexDirection: 'row',
    backgroundColor: '#808080',
    alignItems: 'center',
  },
  imagebackground: {
    flex: 1,
    borderRadius: 5,
    resizeMode: 'contain',
    borderRadius: 20,
    opacity: 0.7,
  },
  cardsubcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookimage: {
    width: 90,
    height: 100,
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
});
