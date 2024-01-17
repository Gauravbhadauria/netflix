import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {darkGray, red} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const onlyOnNetflix = [
  require('../images/movie2.webp'),
  require('../images/movie3.jpeg'),
  require('../images/movie4.jpeg'),
];
const trending = [
  {image: require('../images/movie6.webp'), isTop: true, newEpisodes: false},
  {image: require('../images/movie7.jpeg'), isTop: false, newEpisodes: true},
  {image: require('../images/movie8.jpeg'), isTop: true, newEpisodes: false},
];
const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={myStyle.container}>
      <View style={myStyle.container}>
        <StatusBar barStyle={'light-content'} />

        <View style={myStyle.topView}>
          <Image
            source={require('../images/movie1.jpeg')}
            style={myStyle.topView}
          />
          <View style={myStyle.categoryView}>
            <TouchableOpacity style={myStyle.categoryTab}>
              <Text style={myStyle.categoryText}>Tv Shows</Text>
            </TouchableOpacity>
            <TouchableOpacity style={myStyle.categoryTab}>
              <Text style={myStyle.categoryText}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={myStyle.categoryTab}>
              <Text style={myStyle.categoryText}>Categories</Text>
            </TouchableOpacity>
          </View>
          <View style={myStyle.topViewBottomView}>
            <TouchableOpacity style={myStyle.bottom1}>
              <Image
                source={require('../images/plus.png')}
                style={myStyle.bottom1Icon}
              />
              <Text style={myStyle.bottom1Text}>My List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={myStyle.playButton}>
              <Image
                source={require('../images/play.png')}
                style={myStyle.playIcon}
              />
              <Text style={{marginLeft: 10, fontWeight: '700'}}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={myStyle.bottom1}>
              <Image
                source={require('../images/information.png')}
                style={myStyle.bottom1Icon}
              />
              <Text style={myStyle.bottom1Text}>info</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={myStyle.header}>
          <Image
            source={require('../images/logo.png')}
            style={myStyle.headerLogo}
          />
          <View style={myStyle.rightHeader}>
            <Image
              source={require('../images/broadcast.png')}
              style={[
                myStyle.rightHeaderIcon,
                {marginTop: 10, marginRight: 10},
              ]}
            />
            <Image
              source={require('../images/profile.png')}
              style={myStyle.rightHeaderIcon}
            />
          </View>
        </View>
        <View style={myStyle.secondView}>
          <Text style={myStyle.customTitle}>Continue Watching</Text>
          <View style={{marginTop: 20}}>
            <FlatList
              data={onlyOnNetflix}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={myStyle.onlyOnNteflixItem}
                    onPress={() => {
                      navigation.navigate('VideoDetail', {image: item});
                    }}>
                     
                      <Image
                      source={item}
                      style={{width: 160, height: 200, borderRadius: 10}}
                    />
                     
                   
                    <View
                      style={{
                        width: '100%',
                        height: 40,
                        backgroundColor: '#262626',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../images/information.png')}
                        style={{
                          width: 20,
                          height: 20,
                          tintColor: '#8e8e8e',
                          marginLeft: 10,
                        }}
                      />
                      <Image
                        source={require('../images/options.png')}
                        style={{
                          width: 20,
                          height: 20,
                          tintColor: '#8e8e8e',
                          marginRight: 10,
                        }}
                      />
                      <View
                        style={{
                          width:
                            index == 0 ? '50%' : index == 1 ? '30%' : '90%',
                          height: 5,
                          backgroundColor: red,
                          position: 'absolute',
                          left: 0,
                          top: 0,
                        }}></View>
                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: 240,
                        position: 'absolute',
                        bottom: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../images/video.png')}
                        style={{width: 60, height: 60}}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={myStyle.customTitle}>Only On Netflix</Text>
          <View style={{marginTop: 20}}>
            <FlatList
              data={onlyOnNetflix}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity style={myStyle.onlyOnNteflixItem}>
                    <Image
                      source={item}
                      style={{width: 160, height: 240, borderRadius: 10}}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={myStyle.customTitle}>Trending Now</Text>
          <View style={{marginTop: 20, marginBottom: 100}}>
            <FlatList
              data={trending}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity style={myStyle.onlyOnNteflixItem}>
                    <Image
                      source={item.image}
                      style={{width: 160, height: 240, borderRadius: 10}}
                    />
                    {item.isTop === true ? (
                      <View
                        style={{
                          width: 30,
                          height: 35,
                          backgroundColor: red,
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: '800',
                            fontSize: 8,
                          }}>
                          Top
                        </Text>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: '800',
                            fontSize: 14,
                          }}>
                          10
                        </Text>
                      </View>
                    ) : null}
                    {item.newEpisodes == true ? (
                      <View
                        style={{
                          width: '100%',
                          height: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'absolute',
                          bottom: 10,
                        }}>
                        <View
                          style={{
                            width: 120,
                            height: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: red,
                          }}>
                          <Text style={{color: '#fff'}}>New Episodes</Text>
                        </View>
                      </View>
                    ) : null}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
const myStyle = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  headerLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  rightHeader: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
  },
  rightHeaderIcon: {
    marginLeft: 15,
    width: 24,
    height: 24,
  },
  topView: {
    width: '100%',
    height: 400,
    position: 'absolute',

    top: 0,
  },
  categoryView: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 110,
  },
  categoryTab: {
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: 'white',
    fontSize: 18,
  },
  topViewBottomView: {
    position: 'absolute',
    bottom: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottom1: {
    width: '40%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom1Icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  bottom1Text: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  playButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 100,
    height: 40,
    borderRadius: 5,
  },
  playIcon: {
    width: 20,
    height: 20,
  },
  customTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
    marginLeft: 10,
    marginTop: 10,
  },
  secondView: {
    marginTop: 330,
  },
  onlyOnNteflixItem: {
    width: 160,
    height: 240,
    borderRadius: 10,
    marginLeft: 20,
  },
});
