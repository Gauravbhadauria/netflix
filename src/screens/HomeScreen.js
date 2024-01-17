import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Home from '../tabs/Home';
import New from '../tabs/New';
import Fast from '../tabs/Fast';
import Search from '../tabs/Search';
import Downloads from '../tabs/Downloads';

const HomeScreen = () => {
  const [selectedBottomItem, setSelectedBottomItem] = useState(0);
  return (
    <View style={myStyle.container}>
      {selectedBottomItem == 0 ? (
        <Home />
      ) : selectedBottomItem == 1 ? (
        <New />
      ) : selectedBottomItem == 2 ? (
        <Fast />
      ) : selectedBottomItem == 3 ? (
        <Search />
      ) : (
        <Downloads />
      )}
      <View style={myStyle.bottomNavigation}>
        <TouchableOpacity
          style={myStyle.bottomNavigationCard}
          onPress={() => {
            setSelectedBottomItem(0);
          }}>
          <Image
            source={
              selectedBottomItem == 0
                ? require('../images/home_white.png')
                : require('../images/home_line.png')
            }
            style={myStyle.bottomNavigationCardImage}
          />
          <Text
            style={[
              myStyle.bottomNavigationCardText,
              {color: selectedBottomItem == 0 ? 'white' : 'gray'},
            ]}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyle.bottomNavigationCard}
          onPress={() => {
            setSelectedBottomItem(1);
          }}>
          <Image
            source={
              selectedBottomItem == 1
                ? require('../images/new_white.png')
                : require('../images/new_line.png')
            }
            style={myStyle.bottomNavigationCardImage}
          />
          <Text
            style={[
              myStyle.bottomNavigationCardText,
              {color: selectedBottomItem == 1 ? 'white' : 'gray'},
            ]}>
            New & Hot
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyle.bottomNavigationCard}
          onPress={() => {
            setSelectedBottomItem(2);
          }}>
          <Image
            source={
              selectedBottomItem == 2
                ? require('../images/fast_white.png')
                : require('../images/fast_line.png')
            }
            style={myStyle.bottomNavigationCardImage}
          />
          <Text
            style={[
              myStyle.bottomNavigationCardText,
              {color: selectedBottomItem == 2 ? 'white' : 'gray'},
            ]}>
            Fast Laugh
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyle.bottomNavigationCard}
          onPress={() => {
            setSelectedBottomItem(3);
          }}>
          <Image
            source={
              selectedBottomItem == 3
                ? require('../images/search_white.png')
                : require('../images/search_line.png')
            }
            style={myStyle.bottomNavigationCardImage}
          />
          <Text
            style={[
              myStyle.bottomNavigationCardText,
              {color: selectedBottomItem == 3 ? 'white' : 'gray'},
            ]}>
            Search
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyle.bottomNavigationCard}
          onPress={() => {
            setSelectedBottomItem(4);
          }}>
          <Image
            source={
              selectedBottomItem == 4
                ? require('../images/download_white.png')
                : require('../images/download_line.png')
            }
            style={myStyle.bottomNavigationCardImage}
          />
          <Text
            style={[
              myStyle.bottomNavigationCardText,
              {color: selectedBottomItem == 4 ? 'white' : 'gray'},
            ]}>
            Downloads
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    height: 100,
    bottom: 0,
    backgroundColor: 'black',
  },
  bottomNavigationCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  bottomNavigationCardImage: {
    width: 30,
    height: 30,
  },
  bottomNavigationCardText: {
    color: 'gray',
    marginTop: 5,
  },
});
