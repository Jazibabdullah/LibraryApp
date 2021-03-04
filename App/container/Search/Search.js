import {
  Container,
  Header,
  Icon,
  Content,
  Text,
  View,
  Item,
  Input,
} from 'native-base';
import {FlatList, Image, ImageBackground,YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
import styles from './SearchStyle';
import {
  getapidata,
  getbestsellersdata,
  getspecificcatdata,
} from '../../Redux/Actions/Actions';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Card} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';

function Search(props) {
  const [Suggestions, setSuggestions] = useState(true);
  const [searchvalue, setsearchvalue] = useState('');
  useEffect(() => {
    dispatch(getapidata());
    dispatch(getbestsellersdata());
    dispatch(getspecificcatdata('E-BOOK Fiction'));
    console.disableYellowBox = true;
  }, []);
  const dispatch = useDispatch();
  const fetchingstatus = useSelector((state) => state.FETCHING);
  const BESTSELLERSdata = useSelector((state) => state.SPECIFICCATDATA);
  // {BESTSELLERSdata.books!=undefined}
  const selection = (name) => {
    if (name != 'searched') {
      setSuggestions(true);
    } else {
      setSuggestions(false);
    }
  };
  return (
    <Container>
      <Header searchBar rounded style={{backgroundColor: 'grey'}}>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onChangeText={(text) => setsearchvalue(text)}
          />
          <Icon
            name="search"
            onPress={() => {
              dispatch(getspecificcatdata(searchvalue)), selection('searched');
            }}
          />
        </Item>
      </Header>

      <Content>
        <View>
          {Suggestions == true ? (
            <View>
              <View style={styles.container}>
                <View style={styles.subcontainer}>
                  <View>
                    <Text style={styles.textcolor}>Suggestions</Text>
                  </View>
                </View>

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
                          <ImageBackground
                            blurRadius={3}
                            source={
                              item.book_image
                                ? {uri: item.book_image}
                                : require('../../Assets/images/imageplaceholder.png')
                            }
                            style={styles.imagebackground}>
                            <View style={styles.cardsubcontainer}>
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
                                        ? item.title.substring(0, 30 - 3) +
                                          '...'
                                        : item.title}
                                    </Text>
                                  </View>

                                  <View style={styles.bookdetailsubcontainer}>
                                    <Text style={styles.cardheadingtext}>
                                      Author:
                                    </Text>
                                    <Text style={styles.cardtext}>
                                      {item.author.length > 30
                                        ? item.author.substring(0, 30 - 3) +
                                          '...'
                                        : item.author}
                                    </Text>
                                  </View>
                                  <View style={styles.bookdetailsubcontainer}>
                                    <Text style={styles.cardheadingtext}>
                                      Publisher:
                                    </Text>
                                    <Text style={styles.cardheadingtext}>
                                      {item.publisher}
                                    </Text>
                                  </View>

                                  <View style={styles.bookdetailsubcontainer}>
                                    <Text style={styles.cardheadingtext}>
                                      Price:
                                    </Text>
                                    <Text style={styles.cardheadingtext}>
                                      {item.price}
                                    </Text>
                                  </View>
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
          ) : (
            <View style={styles.container}>
              <View style={styles.subcontainer}>
                <View>
                  <Text style={styles.textcolor}>
                    Search result: Category {searchvalue}
                  </Text>
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
                  <View>
                    {BESTSELLERSdata === undefined ? (
                      <View style={styles.notfoundcontainer}>
                        <Text style={{color: 'white'}}>
                          No Category found with this name
                        </Text>
                      </View>
                    ) : (
                      <View>
                        <FlatList
                          data={BESTSELLERSdata}
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
                                <ImageBackground
                                  blurRadius={3}
                                  source={
                                    item.book_image
                                      ? {uri: item.book_image}
                                      : require('../../Assets/images/imageplaceholder.png')
                                  }
                                  style={styles.imagebackground}>
                                  <View style={styles.cardsubcontainer}>
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
                                        <View
                                          style={styles.bookdetailsubcontainer}>
                                          <Text style={styles.cardheadingtext}>
                                            Title:
                                          </Text>
                                          <Text
                                            numberOfLines={1}
                                            numColumns={0}
                                            style={styles.cardtext}>
                                            {item.title.length > 30
                                              ? item.title.substring(
                                                  0,
                                                  30 - 3,
                                                ) + '...'
                                              : item.title}
                                          </Text>
                                        </View>

                                        <View
                                          style={styles.bookdetailsubcontainer}>
                                          <Text style={styles.cardheadingtext}>
                                            Author:
                                          </Text>
                                          <Text style={styles.cardtext}>
                                            {item.author.length > 30
                                              ? item.author.substring(
                                                  0,
                                                  30 - 3,
                                                ) + '...'
                                              : item.author}
                                          </Text>
                                        </View>
                                        <View
                                          style={styles.bookdetailsubcontainer}>
                                          <Text style={styles.cardheadingtext}>
                                            Publisher:
                                          </Text>
                                          <Text style={styles.cardtext}>
                                            {item.publisher}
                                          </Text>
                                        </View>

                                        <View
                                          style={styles.bookdetailsubcontainer}>
                                          <Text style={styles.cardheadingtext}>
                                            Price:
                                          </Text>
                                          <Text style={styles.cardtext}>
                                            {item.price}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </ImageBackground>
                              </View>
                            </Card>
                          )}
                        />
                      </View>
                    )}
                  </View>
                )}
              </View>
            </View>
          )}
        </View>
      </Content>
    </Container>
  );
}

export default Search;
