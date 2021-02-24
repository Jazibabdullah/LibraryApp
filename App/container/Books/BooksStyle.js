import {StyleSheet} from 'react-native';
import Colors from '../../Assets/Colors/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  subcontainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 1,
    margin: 2,
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
  },
  bookimage: {
    width: '100%',
    height: 300,
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
  readmorebutton: {
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 20,
    width: 90,
    alignItems: 'center',
    marginTop: 4,
  },
  readmoretext: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
  },
});
