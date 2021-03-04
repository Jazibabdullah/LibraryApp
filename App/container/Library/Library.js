import React, {useState, useEffect, useContext} from 'react';
import {
  getapidata,
  getbestsellersdata,
  getspecificcatdata,
} from '../../Redux/Actions/Actions';
import {getcategoriesdata} from '../../res/functions';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Colors from '../../Assets/Colors/Colors';
import styles from './LibraryStyle';
import {Container, Text, View, Title} from 'native-base';
import {FlatList, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

const Cat = (props) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    dispatch(getapidata());
    dispatch(getspecificcatdata('Combined Print and E-Book Fiction'));
    selection('Combined Print and E-Book Fiction');
  }, []);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.DATA.results);
  const BESTSELLERSdata = useSelector((state) => state.SPECIFICCATDATA);
  const fetchingstatus = useSelector((state) => state.FETCHING);

  const selection = (name) => {
    setActive(name);
  };
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <ScrollView>
            <View style={styles.catcontainer}>
              <View style={styles.catsubcontainer}>
                <View>
                  <Text style={styles.textcolor}>Catagories</Text>
                </View>
                <View></View>
              </View>

              {fetchingstatus === true ? (
                <View style={styles.skeletoncontainer}>
                  <SkeletonPlaceholder
                    backgroundColor="#2f3230" //TRY ADD rgba(255, 255, 255, 0.3) to see the difference
                    highlightColor="#656966" //TRY ADD rgba(255, 255, 255, 0.6) to see the difference
                  >
                    <SkeletonPlaceholder.Item>
                      <SkeletonPlaceholder.Item alignItems="center">
                        <SkeletonPlaceholder.Item
                          width={90}
                          height={60}
                          margin={10}
                        />
                        <SkeletonPlaceholder.Item
                          width={90}
                          height={60}
                          margin={10}
                        />
                        <SkeletonPlaceholder.Item
                          width={90}
                          height={60}
                          margin={10}
                        />
                        <SkeletonPlaceholder.Item
                          width={90}
                          height={60}
                          margin={10}
                        />
                        <SkeletonPlaceholder.Item
                          width={90}
                          height={60}
                          margin={10}
                        />
                        <SkeletonPlaceholder.Item
                          width={90}
                          height={60}
                          margin={10}
                        />
                        <SkeletonPlaceholder.Item
                          width={90}
                          height={60}
                          margin={10}
                        />
                        <SkeletonPlaceholder.Item
                          width={90}
                          height={60}
                          margin={10}
                        />
                        <SkeletonPlaceholder.Item
                          width={90}
                          height={60}
                          margin={10}
                        />
                      </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                  </SkeletonPlaceholder>
                </View>
              ) : (
                <FlatList
                  data={data}
                  numColumns={1}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(getspecificcatdata(item.list_name));
                        selection(item.list_name);
                      }}>
                      <View
                        style={
                          active == item.list_name
                            ? styles.catagoryactiveitemcontainer
                            : styles.catagoryitemcontainer
                        }>
                        <Text
                          numberOfLines={2}
                          // onPress={() =>
                          //   dispatch(getspecificcatdata(item.list_name))
                          // }
                          style={styles.catagoryitemtext}>
                          {item.list_name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.bokscontainer}>
          <ScrollView>
            <View style={styles.bookssubontainer}>
              <View>
                <Text style={styles.textcolor}>Books</Text>
              </View>
            </View>
            <View>
              {fetchingstatus === true ? (
                <View style={styles.skeletoncontainer}>
                  <SkeletonPlaceholder
                    backgroundColor="#2f3230" //TRY ADD rgba(255, 255, 255, 0.3) to see the difference
                    highlightColor="#656966" //TRY ADD rgba(255, 255, 255, 0.6) to see the difference
                  >
                    <SkeletonPlaceholder.Item
                      flexDirection="row"
                      alignItems="center">
                      <SkeletonPlaceholder.Item
                        width={130}
                        height={190}
                        margin={5}
                        borderRadius={5}
                      />
                      <SkeletonPlaceholder.Item
                        width={130}
                        height={190}
                        borderRadius={5}
                      />
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item
                      flexDirection="row"
                      alignItems="center">
                      <SkeletonPlaceholder.Item
                        width={130}
                        height={190}
                        margin={5}
                        borderRadius={5}
                      />
                      <SkeletonPlaceholder.Item
                        width={130}
                        height={190}
                        borderRadius={5}
                      />
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item
                      flexDirection="row"
                      alignItems="center">
                      <SkeletonPlaceholder.Item
                        width={130}
                        height={190}
                        margin={5}
                        borderRadius={5}
                      />
                      <SkeletonPlaceholder.Item
                        width={130}
                        height={190}
                        borderRadius={5}
                      />
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item
                      flexDirection="row"
                      alignItems="center">
                      <SkeletonPlaceholder.Item
                        width={130}
                        height={190}
                        margin={5}
                        borderRadius={5}
                      />
                      <SkeletonPlaceholder.Item
                        width={130}
                        height={190}
                        borderRadius={5}
                      />
                    </SkeletonPlaceholder.Item>
                  </SkeletonPlaceholder>
                </View>
              ) : (
                <FlatList
                  data={BESTSELLERSdata}
                  numColumns={2}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => (
                    <Card
                      style={styles.cardcontainer}
                      onPress={() => {
                        props.navigation.navigate('BookDetailScreen', {
                          book: item,
                        });
                      }}>
                      <View>
                        <Image
                          source={
                            item.book_image
                              ? {uri: item.book_image}
                              : require('../../Assets/images/imageplaceholder.png')
                          }
                          style={styles.bookimage}
                        />
                      </View>
                    </Card>
                  )}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </Container>
  );
};

export default Cat;
