import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {black} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';


const Splash = () => {
  const navigation = useNavigation();

  const X = useSharedValue(10);
  const boxValue = useSharedValue(0);
  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: e => {
      if (e.translationX < 0) {
        X.value = -e.translationX;
      } else {
        X.value = e.translationX;
      }
    },
    onEnd: () => {
      if (X.value < 150) {
        X.value = withSpring(10);
      } else {
        X.value = withSpring(240);
      }
    },
  });
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SelectUser');
    }, 3000);
  }, []);
  const InterpolateXInput = [0, 150];
  const AnimatedStyles = {
    swipeStyle: useAnimatedStyle(() => {
      return {transform: [{translateX: X.value}]};
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.8, 0],
          Extrapolate.CLAMP,
        ),
        transform: [
          {
            translateX: interpolate(X.value, InterpolateXInput, [
              0,
              150,
              Extrapolate.CLAMP,
            ]),
          },
        ],
      };
    }),
  };

  // const buttonAnimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{translateY: boxValue.value}],
  //   };
  // });
  return (
    <View style={myStyle.container}>
      <Image
        source={require('../gif/netflix.gif')}
        style={{width: 200, height: 200}}
      />
      {/* <View
        style={{
          width: 300,
          height: 60,
          borderRadius: 10,
          backgroundColor: '#ffbf80',
          justifyContent: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <PanGestureHandler onGestureEvent={animatedGestureHandler}>
          <Animated.View
            style={[
              {
                width: 50,
                height: 50,
                backgroundColor: '#ff8000',
                borderRadius: 10,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                left: 0,
              },
              AnimatedStyles.swipeStyle,
            ]}>
            <Image
              source={require('../images/right.png')}
              style={{width: 30, height: 30, tintColor: '#fff'}}
            />
          </Animated.View>
        </PanGestureHandler>
        <Animated.Text style={[AnimatedStyles.swipeText]}>
          {' >> Right Swipe to order >>'}
        </Animated.Text>
      </View> */}
      
    </View>
  );
};

export default Splash;
const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
