import React, {useEffect} from 'react';
import {getapidata, getbestsellersdata} from '../../Redux/Actions/Actions';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './BooksStyle';
import {
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Container, View, Content} from 'native-base';
import {Card} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
const Cat = (props) => {
  useEffect(() => {
    dispatch(getapidata());
    dispatch(getbestsellersdata());
  }, []);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.SPECIFICCATDATA);

  const BESTSELLERSdata = useSelector((state) => state.BESTSELLERSDATA.results);
  return (
    <Container>
      <Content style={styles.container}>
        <ScrollView>
          <View></View>
          <View style={styles.subcontainer}>
            <View>
              {BESTSELLERSdata === null ? (
                <View style={styles.skeletoncontainer}>
                  <SkeletonPlaceholder
                    backgroundColor="#2f3230"
                    highlightColor="#656966">
                    <SkeletonPlaceholder.Item
                      flexDirection="row"
                      alignItems="center">
                      <SkeletonPlaceholder.Item
                        width={64}
                        height={64}
                        borderRadius={5}
                      />
                      <SkeletonPlaceholder.Item marginLeft={16}>
                        <SkeletonPlaceholder.Item
                          width={200}
                          height={20}
                          borderRadius={4}
                        />
                        <SkeletonPlaceholder.Item
                          marginTop={8}
                          width={300}
                          height={20}
                          borderRadius={4}
                        />
                        <View
                          marginTop={8}
                          width={300}
                          height={20}
                          borderRadius={4}></View>
                        <SkeletonPlaceholder.Item
                          marginTop={8}
                          width={260}
                          height={20}
                          borderRadius={4}
                        />
                      </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item
                      marginTop={32}
                      flexDirection="row"
                      alignItems="center">
                      <SkeletonPlaceholder.Item
                        width={64}
                        height={80}
                        borderRadius={5}
                      />
                      <SkeletonPlaceholder.Item marginLeft={16}>
                        <SkeletonPlaceholder.Item
                          width={200}
                          height={20}
                          borderRadius={4}
                        />
                        <SkeletonPlaceholder.Item
                          marginTop={8}
                          width={300}
                          height={20}
                          borderRadius={4}
                        />
                        <SkeletonPlaceholder.Item
                          marginTop={8}
                          width={260}
                          height={20}
                          borderRadius={4}
                        />
                      </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                  </SkeletonPlaceholder>
                </View>
              ) : (
                <FlatList
                  data={data}
                  numColumns={1}
                  renderItem={({item, index}) => (
                    <Card style={styles.bookcard}>
                      <View style={styles.cardcontainer}>
                        <ImageBackground
                          blurRadius={2}
                          source={
                            item.book_image
                              ? {uri: item.book_image}
                              : require('../../Assets/images/imageplaceholder.png')
                          }
                          style={styles.imagebackground}>
                          <Image
                            source={
                              item.book_image
                                ? {uri: item.book_image}
                                : require('../../Assets/images/imageplaceholder.png')
                            }
                            style={styles.bookimage}
                          />

                          <View>
                            <View style={styles.bookdetailcontainer}>
                              <View style={styles.bookdetailsubcontainer}>
                                <Text style={styles.cardheadingtext}>
                                  Title:
                                </Text>
                                <Text
                                  numberOfLines={1}
                                  numColumns={0}
                                  style={styles.cardtext}>
                                  {item.title.length > 30
                                    ? item.title.substring(0, 30 - 3) + '...'
                                    : item.title}
                                </Text>
                              </View>

                              <View style={styles.bookdetailsubcontainer}>
                                <Text style={styles.cardheadingtext}>
                                  Author:
                                </Text>
                                <Text style={styles.cardtext}>
                                  {item.author.length > 30
                                    ? item.author.substring(0, 30 - 3) + '...'
                                    : item.author}
                                </Text>
                              </View>
                              <View style={styles.bookdetailsubcontainer}>
                                <Text style={styles.cardheadingtext}>
                                  Publisher:
                                </Text>
                                <Text style={styles.cardtext}>
                                  {item.publisher}
                                </Text>
                              </View>

                              <View style={styles.bookdetailsubcontainer}>
                                <Text style={styles.cardheadingtext}>
                                  Price:
                                </Text>
                                <Text style={styles.cardtext}>
                                  {item.price}
                                </Text>
                              </View>
                              <View>
                                <TouchableOpacity
                                  onPress={() => {
                                    props.navigation.navigate(
                                      'BookDetailScreen',
                                      {book: item},
                                    );
                                  }}
                                  style={styles.readmorebutton}>
                                  <Text style={styles.readmoretext}>
                                    Read more{' '}
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </ImageBackground>
                      </View>
                    </Card>
                  )}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Cat;
