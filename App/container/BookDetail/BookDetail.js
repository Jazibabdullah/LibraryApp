import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
  ToastAndroid,
} from 'react-native';
import {
  Container,
  Header,
  Button,
  Icon,
  Fab,
  Tab,
  Tabs,
  TabHeading,
  Badge,
  StatusBar,
} from 'native-base';
import styles from './BookDetailStyle';
import {useSelector} from 'react-redux';
function BookDetail({route, navigation}) {
  const [buynowbutton, setbuynowbutton] = useState(false);
  const {book} = route.params;
  useEffect(() => {});
  const data = useSelector((state) => state.SPECIFICCATDATA);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <ImageBackground
          blurRadius={2}
          source={
            book.book_image
              ? {uri: book.book_image}
              : require('../../Assets/images/imageplaceholder.png')
          }
          style={styles.imagebackground}>
          <Image
            source={
              book.book_image
                ? {uri: book.book_image}
                : require('../../Assets/images/imageplaceholder.png')
            }
            style={styles.bookimage}
          />

          <View>
            <View style={styles.bookdetailcontainer}>
              <View style={styles.bookdetailsubcontainer}>
                <Text style={styles.cardheadingtext}>Title:</Text>
                <Text numberOfLines={1} numColumns={0} style={styles.cardtext}>
                  {book.title.length > 70
                    ? book.title.substring(0, 70 - 3) + '...'
                    : book.title}
                </Text>
              </View>

              <View style={styles.bookdetailsubcontainer}>
                <Text style={styles.cardheadingtext}>Author:</Text>
                <Text style={styles.cardtext}>
                  {book.author.length > 30
                    ? book.author.substring(0, 30 - 3) + '...'
                    : book.author}
                </Text>
              </View>
              <View style={styles.bookdetailsubcontainer}>
                <Text style={styles.cardheadingtext}>Publisher:</Text>
                <Text style={styles.cardtext}>{book.publisher}</Text>
              </View>

              <View style={styles.bookdetailsubcontainer}>
                <Text style={styles.cardheadingtext}>Price:</Text>
                <Text style={styles.cardtext}>{book.price}</Text>
              </View>
              <View style={styles.descriptioncontainer}>
                <Text style={styles.cardheadingtext}>Description:</Text>
                <Text style={styles.cardtext}>{book.description}</Text>
              </View>
            </View>
          </View>
          <Fab
            // disabled={book.buy_links == undefined}
            active={buynowbutton}
            direction="up"
            // containerStyle={{ }}
            style={
              book.buy_links == undefined
                ? styles.disabledfab
                : styles.enablefab
            }
            position="bottomRight"
            onPress={
              book.buy_links == undefined
                ? () =>
                    ToastAndroid.show('no link available', ToastAndroid.SHORT)
                : () => setbuynowbutton(!buynowbutton)
            }>
            <Icon name="ios-cloud-download" />
            <Button
              // disabled={book.buy_links[4] == undefined}
              style={styles.bookstorebutton}
              onPress={() => Linking.openURL(book.buy_links[4].url)}>
              <Icon name="book" />
            </Button>
            <Button
              //   disabled={book.amazon_product_url == undefined}
              style={styles.amazonbutton}
              onPress={
                book.amazon_product_url == undefined
                  ? () =>
                      ToastAndroid.show('no link available', ToastAndroid.SHORT)
                  : () => Linking.openURL(book.amazon_product_url)
              }>
              <Icon name="logo-amazon" />
            </Button>
          </Fab>
        </ImageBackground>
      </View>
    </View>
  );
}

export default BookDetail;
