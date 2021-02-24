import {StyleSheet} from 'react-native';
import Colors from '../../Assets/Colors/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  subcontainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  catcontainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 1,
  },
  catsubcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
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
  catagoryactiveitemcontainer: {
    padding: 10,
    margin: 10,
    alignContent: 'center',
    backgroundColor: '#996fed',
  },
  catagoryitemcontainer: {
    padding: 10,
    margin: 10,
    alignContent: 'center',
    backgroundColor: 'grey',
  },
  catagoryitemtext: {fontSize: 13, color: 'white'},
  bookcard: {margin: 10, borderRadius: 10},
  bokscontainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'black',
    padding: 1,
    flex: 2.5,
  },
  bookssubontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardcontainer: {
    margin: 10,
    borderRadius: 10,
  },
  bookimage: {
    width: 120,
    height: 170,
    borderRadius: 5,
    resizeMode: 'repeat',
  },
});
