import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {red} from '../utils/Colors';
import {useNavigation, useRoute} from '@react-navigation/native';

const onlyOnNetflix = [
  require('../images/movie2.webp'),
  require('../images/movie3.jpeg'),
  require('../images/movie4.jpeg'),
  require('../images/movie6.webp'),
  require('../images/movie7.jpeg'),
  require('../images/movie8.jpeg'),
];
const VideoDetail = () => {
  const [isMoreClicked, setIsMoreClicked] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={{height: 250}}>
      
          <Image
            source={route.params.image}
            style={{width: '100%', height: '100%'}}
          />
       

        <View
          style={{
            position: 'absolute',
            right: 20,
            top: 40,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#564d4d',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../images/broadcast.png')}
              style={{width: 24, height: 24}}
            />
          </View>

          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#564d4d',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../images/close.png')}
              style={{width: 18, height: 18, tintColor: '#fff'}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
        <Image
          source={require('../images/logo.png')}
          style={{width: 30, height: 30, resizeMode: 'contain'}}
        />
        <Text style={{color: '#fff', letterSpacing: 4}}>FILM</Text>
      </View>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: '800',
          marginLeft: 5,
          marginTop: 5,
        }}>
        Dracula
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 5,
        }}>
        <Text style={{color: 'green'}}>98% match</Text>
        <Text style={{color: 'white', marginLeft: 10}}>2021</Text>
        <View
          style={{
            width: 80,
            height: 20,
            marginLeft: 10,
            backgroundColor: '#564d4d',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}>U/A 16+</Text>
        </View>
        <Text style={{color: '#fff', marginLeft: 10}}>2h 41m</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <View
          style={{
            width: 25,
            height: 30,
            backgroundColor: red,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 10, color: '#fff'}}>Top</Text>
          <Text style={{fontWeight: '800', color: '#fff'}}>10</Text>
        </View>
        <Text
          style={{
            color: '#fff',
            fontWeight: '700',
            fontSize: 18,
            marginLeft: 10,
          }}>
          #2 in Movies Today
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: '98%',
          height: 44,
          backgroundColor: '#fff',
          alignSelf: 'center',
          borderRadius: 4,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../images/play.png')}
          style={{width: 20, height: 20}}
        />
        <Text style={{fontSize: 18, marginLeft: 10, fontWeight: '600'}}>
          Play
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '98%',
          height: 44,
          backgroundColor: '#564d4d',
          alignSelf: 'center',
          borderRadius: 4,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../images/download.png')}
          style={{width: 20, height: 20, tintColor: '#fff'}}
        />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            fontWeight: '600',
            color: '#fff',
          }}>
          Download
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          width: '94%',
          alignSelf: 'center',
          color: '#fff',
          textAlign: 'justify',
          marginTop: 20,
        }}>
        {
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'
        }
      </Text>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/plus.png')}
            style={{width: 20, height: 20, tintColor: '#fff'}}
          />
          <Text style={{color: '#fff', marginTop: 5}}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <Image
            source={require('../images/like.png')}
            style={{width: 20, height: 20, tintColor: '#fff'}}
          />
          <Text style={{color: '#fff', marginTop: 5}}>Rate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <Image
            source={require('../images/send.png')}
            style={{width: 20, height: 20, tintColor: '#fff'}}
          />
          <Text style={{color: '#fff', marginTop: 5}}>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity
          style={{
            width: 140,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopWidth: isMoreClicked ? 2 : 0,
            borderColor: red,
            marginLeft: 20,
          }}
          onPress={() => {
            setIsMoreClicked(true);
          }}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: '700'}}>
            More Like This
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 140,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            borderTopWidth: isMoreClicked ? 0 : 2,
            borderColor: red,
          }}
          onPress={() => {
            setIsMoreClicked(false);
          }}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: '700'}}>
            Trailers & More
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          numColumns={3}
          data={onlyOnNetflix}
          renderItem={({item, index}) => {
            return (
              <Image
                source={item}
                style={{width: 120, borderRadius: 10, height: 120, margin: 10}}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default VideoDetail;
