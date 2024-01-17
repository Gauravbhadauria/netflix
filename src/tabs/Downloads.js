import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {transform} from '@babel/core';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const Downloads = () => {
  const [isMoving, setIsMoving] = useState(false);
  const navigation = useNavigation();
  const [loaded, setLoaded] = useState(true);
  const [offset, SetOffset] = React.useState(0);
  const animation = useSharedValue({
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
  });
  const animationsstyle = useAnimatedStyle(() => {
    return {
      width: withTiming(animation.value.width, {
        duration: 1000,
      }),
      height: withTiming(animation.value.height, {
        duration: 1000,
      }),
      borderRadius: withTiming(animation.value.borderRadius, {
        duration: 1000,
      }),
    };
  });
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Animatable.Text
          animation="zoomInUp"
          style={{
            color: '#fff',
            fontSize: 26,
            fontWeight: '900',
            marginLeft: 15,
          }}>
          Downloads
        </Animatable.Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Image
              source={require('../images/broadcast.png')}
              style={{width: 26, height: 26}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../images/profile.png')}
              style={{
                width: 24,
                height: 24,

                marginLeft: 20,
                marginRight: 20,
                marginBottom: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <TouchableOpacity style={{marginLeft: 15}}>
            <Image
              source={require('../images/setting.png')}
              style={{width: 26, height: 26, tintColor: '#fff'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '800',
              marginLeft: 10,
            }}>
            Smart Downloads
          </Text>
        </View>
        <TouchableOpacity style={{marginRight: 20}}>
          <Image
            source={require('../images/pencil.png')}
            style={{width: 20, height: 20, tintColor: '#fff'}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          onScroll={event => {
            let currentOffset = event.nativeEvent.contentOffset.y;
            let direction = currentOffset > offset ? 'down' : 'up';
            SetOffset(currentOffset);
            if (direction === 'down') {
              setIsMoving(false);
              animation.value = {
                width: 120,
                height: 50,
                borderRadius: 20,
              };
            } else {
              animation.value = {
                width: 50,
                height: 50,
                borderRadius: 25,
              };
              setIsMoving(true);
            }
          }}
          data={[
            {name: 'Gray Man', image: require('../images/movie1.jpeg')},
            {
              name: 'World War Z',
              image: require('../images/movie7.jpeg'),
            },
            {
              name: 'World War Z',
              image: require('../images/movie7.jpeg'),
            },
            {
              name: 'World War Z',
              image: require('../images/movie7.jpeg'),
            },
            {
              name: 'World War Z',
              image: require('../images/movie7.jpeg'),
            },
            {
              name: 'World War Z',
              image: require('../images/movie7.jpeg'),
            },
            {
              name: 'World War Z',
              image: require('../images/movie7.jpeg'),
            },
            {
              name: 'World War Z',
              image: require('../images/movie7.jpeg'),
            },
            {
              name: 'World War Z',
              image: require('../images/movie7.jpeg'),
            },
          ]}
          renderItem={({item, index}) => {
            return (
              <Animatable.View
                animation={'fadeInUp'}
                duration={1000}
                delay={index * 300}
                style={[animationsstyle]}
                onPress={() => {
                  navigation.navigate('VideoDetail');
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{width: 130, height: 70}}>
                    <Image
                      source={item.image}
                      style={{width: 130, height: 70, resizeMode: 'cover'}}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        top: 0,
                        width: 130,
                        height: 70,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../images/video.png')}
                        style={{width: 50, height: 50}}
                      />
                    </View>
                    <View
                      style={{
                        width: 100,
                        height: 4,
                        backgroundColor: 'red',
                      }}></View>
                  </View>
                  <View style={{marginLeft: 20}}>
                    <Text style={{color: '#fff', fontSize: 18}}>
                      {item.name}
                    </Text>
                    <Text
                      style={{color: '#8e8e8e', fontSize: 14, marginTop: 4}}>
                      {'U/A 13+ | 565.1 MB'}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={{marginRight: 20}}>
                  <Image
                    source={require('../images/done.png')}
                    style={{width: 30, height: 30, tintColor: '#fff'}}
                  />
                </TouchableOpacity>
              </Animatable.View>
            );
          }}
        />
      </View>
      {loaded ? null : (
        <View style={{width: '100%'}}>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1]}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 100,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <ShimmerPlaceHolder
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                      }}
                      shimmerColors={[
                        '#564d4d',
                        '#8e8e8e',
                        '#564d4d',
                      ]}></ShimmerPlaceHolder>
                    <View style={{marginLeft: 10}}>
                      <ShimmerPlaceHolder
                        style={{
                          width: '80%',
                          height: 15,
                        }}
                        shimmerColors={[
                          '#564d4d',
                          '#8e8e8e',
                          '#564d4d',
                        ]}></ShimmerPlaceHolder>
                      <ShimmerPlaceHolder
                        style={{
                          width: '80%',
                          height: 15,
                          marginTop: 10,
                        }}
                        shimmerColors={[
                          '#564d4d',
                          '#8e8e8e',
                          '#564d4d',
                        ]}></ShimmerPlaceHolder>
                    </View>
                  </View>
                  <ShimmerPlaceHolder
                    style={{
                      width: 40,
                      height: 40,
                    }}
                    shimmerColors={[
                      '#564d4d',
                      '#8e8e8e',
                      '#564d4d',
                    ]}></ShimmerPlaceHolder>
                </View>
              );
            }}
          />
        </View>
      )}
      <Animated.View
        style={[
          {
            backgroundColor: '#fff',
            position: 'absolute',
            right: 20,
            bottom: 100,
          }
          
        ]}></Animated.View>
    </View>
  );
};

export default Downloads;
