import React, {useState, useEffect, useContext} from 'react';
import {
  getapidata,
  getbestsellersdata,
  getspecificcatdata,
} from '../../Redux/Actions/Actions';
import {getcategoriesdata} from '../../res/functions';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Segment,
  Content,
  Text,
  View,
  Title,
} from 'native-base';
import styles from './HomeStyle';
import {FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

const Cat = (props) => {
  // useEffect(() => {
  //   // dispatch(getapidata());
  //   // getcategoriesdata();
  // });
  const [Catagories, setCatagories] = useState(true);
  const [BestSeller, setBestSeller] = useState(false);
  useEffect(() => {
    dispatch(getapidata());
    dispatch(getbestsellersdata());
    // dispatch(getspecificcatdata('E-BOOK Fiction'));
  }, []);
  const dispatch = useDispatch();

  // const [categoriesdata, setcategoriesdata] = useState('')

  const data = useSelector((state) => state.DATA.results);

  const BESTSELLERSdata = useSelector((state) => state.BESTSELLERSDATA.results);
  // {(mydata=useSelector((state) => state.DATA)) ? (const mydata=undefined):(const mydata=false)}
  const selection = (name) => {
    if (name == 'Catagories') {
      setCatagories(true);
      setBestSeller(false);
    
    } else {
      setCatagories(false);
      setBestSeller(true);
    }
  };
  return (
    <Container>
      <Segment style={styles.segmentconheader}>
        <Button active={Catagories} onPress={() => selection('Catagories')}>
          <Text>Catagories</Text>
        </Button>
        <Button active={BestSeller} onPress={() => selection('BestSeller')}>
          <Text>BestSeller</Text>
        </Button>
      </Segment>
      <Content>
        <View>
          {Catagories == true ? (
            <View style={styles.container}>
              <View style={styles.subcontainer}>
                <View style={styles.Tag}>
                  <View>
                    <Text style={styles.textcolor}>Catagories</Text>
                  </View>
                  <View></View>
                </View>

                {data === null ? (
                  <View style={styles.skeletoncontainer}>
                    <SkeletonPlaceholder
                      backgroundColor="#2f3230" //TRY ADD rgba(255, 255, 255, 0.3) to see the difference
                      highlightColor="#656966" //TRY ADD rgba(255, 255, 255, 0.6) to see the difference
                    >
                      <SkeletonPlaceholder.Item marginLeft={16}>
                        <SkeletonPlaceholder.Item
                          height={20}
                          borderRadius={4}
                        />
                        <SkeletonPlaceholder.Item
                          marginTop={8}
                          height={20}
                          borderRadius={4}
                        />
                        <View marginTop={8} height={20} borderRadius={4}></View>
                        <SkeletonPlaceholder.Item
                          marginTop={8}
                          height={20}
                          borderRadius={4}
                        />
                        <SkeletonPlaceholder.Item
                          marginTop={8}
                          height={20}
                          borderRadius={4}
                        />
                        <SkeletonPlaceholder.Item
                          marginTop={8}
                          height={20}
                          borderRadius={4}
                        />
                        <SkeletonPlaceholder.Item
                          marginTop={8}
                          height={20}
                          borderRadius={4}
                        />
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
                          dispatch(getspecificcatdata(item.list_name)),
                            props.navigation.navigate('BooksScreen');
                        }}>
                        <View style={styles.catagoryitemcontainer}>
                          <Text style={styles.catagoryitemtext}>
                            {item.list_name}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                )}
              </View>
            </View>
          ) : (
            <View style={styles.subcontainer}>
              <View style={styles.Tag}>
                <View stylestyle={styles.container}>
                  <Text style={styles.textcolor}>Featured Products</Text>
                </View>
              </View>
              <View>
                {BESTSELLERSdata === null ? (
                  <View style={styles.skeletoncontainer}>
                    <SkeletonPlaceholder
                      backgroundColor="#2f3230" //TRY ADD rgba(255, 255, 255, 0.3) to see the difference
                      highlightColor="#656966" //TRY ADD rgba(255, 255, 255, 0.6) to see the difference
                    >
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
                    data={BESTSELLERSdata}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={1}
                    renderItem={({item, index}) => (
                      <Card
                        style={styles.bookcard}
                        onPress={() => {
                          props.navigation.navigate('BookDetailScreen', {
                            book: item,
                          });
                        }}>
                        <View style={styles.cardcontainer}>
                          <Image
                            source={
                              item.image_url
                                ? {uri: item.image_url}
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
                              {/* <View>
                          <Text style={{fontSize: 13, color: 'white'}}>
                            Description:
                          </Text>
                          <Text
                            numberOfLines={3}
                            style={{fontSize: 13, color: 'white'}}>
                            {item.description}
                          </Text>
                        </View> */}
                            </View>
                          </View>
                        </View>
                      </Card>
                    )}
                  />
                )}
              </View>
            </View>
          )}
        </View>
      </Content>
    </Container>
  );
};

export default Cat;
