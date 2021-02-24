import {StyleSheet} from 'react-native';
import Colors from '../../Assets/Colors/Colors';

export default StyleSheet.create({
  segmentconheader: {
    backgroundColor: 'black',
  },
  container: {
    backgroundColor: 'black',
  },
  subcontainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'black',
    padding: 1,
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
  catagoryitemcontainer: {
    padding: 10,
    margin: 10,
    alignContent: 'center',
    backgroundColor: 'grey',
  },
  catagoryitemtext: {fontSize: 13, color: 'white'},
  bookcard: {margin: 10, borderRadius: 10},
  cardcontainer: {
    flexDirection: 'row',
    backgroundColor: '#808080',
    alignItems: 'center',
  },
  bookimage: {
    width: 90,
    height: 120,
    borderRadius: 5,
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
