import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  profilepicturesection: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  profilepicture: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'skyblue',
  },
  titlesection: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    paddingLeft: 40,
    color: 'white',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'white',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
