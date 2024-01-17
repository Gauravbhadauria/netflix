import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  MotiView,
  MotiImage,
  useAnimationState,
  useDynamicAnimation,
} from 'moti';

const New = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);

  const animation = useDynamicAnimation(() => {
    return {
      width: 200,
      height: 60,
      borderRadius: 30,
    };
  });

  const animationState = useAnimationState({
    from: {
      opacity: 0,
      scale: 0.9,
    },
    to: {
      opacity: 1,
      scale: 1,
    },
    active: {
      scale: 1.1,
      opacity: 1,
    },
    nonactive: {
      scale: 0.5,
      opacity: 0.5,
    },
  });

  const onPress = () => {
    if (clicked == true) {
      setClicked(false);
      animationState.transitionTo('active');
    } else {
      setClicked(true);
      animationState.transitionTo('nonactive');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <TouchableOpacity
        onPress={() => {
          console.log(animation.current);
          if (clicked == false) {
            setClicked(true);
            animation.animateTo({width: 60, height: 60, borderRadius: 30});
          } else {
            setClicked(false);
            animation.animateTo({width: 200, height: 60, borderRadius: 30});
          }
        }}>
        <MotiView
          state={animation}
          style={{
            width: 30,
            height: 30,
            backgroundColor: '#9933ff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {clicked ? (
            <ActivityIndicator size={'large'} color={'#fff'} />
          ) : (
            <Text style={{fontSize: 20, fontWeight: '800', color: '#fff'}}>
              Login
            </Text>
          )}
        </MotiView>
        
      </TouchableOpacity> */}
      {/* <MotiView
        from={{
          scale: 0.1,
          opacity: 0.5,
          rotate: '0deg',
          transform: [{translateX: 0}],
        }}
        animate={{
          scale: 1,
          opacity: 1,
          transform: [{translateX: 100}],
          rotate: '360deg',
        }}
        transition={{
          loop: true,
          type: 'timing',
          duration: 1500,
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          backgroundColor: '#fff',
        }}></MotiView> */}
      <TouchableOpacity
        onPress={() => {
          if (clicked == true) {
            setClicked(false);
            animation.animateTo({width: 200, height: 60, borderRadius: 30});
          } else {
            setClicked(true);
            animation.animateTo({width: 60, height: 60, borderRadius: 30});
          }
        }}>
        <MotiView
          state={animation}
          transition={{type: 'spring'}}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'purple',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {clicked ? (
            <ActivityIndicator size={'large'} color="#fff" />
          ) : (
            <Text style={{color: '#fff', fontSize: 20, fontWeight: '800'}}>
              Login
            </Text>
          )}
        </MotiView>
      </TouchableOpacity>
      {/* <View style={{marginTop: 20}}>
        <FlatList
          data={[1, 1, 1, 1, 1]}
          renderItem={({item, index}) => {
            return (
              <MotiView
                from={{scale: 0.5}}
                animate={{scale: 1}}
                style={{
                  width: 200,
                  height: 50,
                  backgroundColor: '#fff',
                  marginTop: 10,
                }}
              />
            );
          }}
        />
      </View> */}
    </View>
  );
};

export default New;

//New==> Child1==> child2 ==> Child 3
