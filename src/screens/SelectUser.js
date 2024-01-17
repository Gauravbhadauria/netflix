import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {black, darkGray, white} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';
const SelectUser = () => {
  const navigation = useNavigation();
  return (
    <View style={myStyle.container}>
      <View style={myStyle.header}>
        <Text style={myStyle.title}>Who is Watching ?</Text>
        <Text
          style={[myStyle.title, {position: 'absolute', right: 20, top: 18}]}>
          Edit
        </Text>
      </View>

      <View style={myStyle.profiles}>
        <TouchableOpacity
          style={myStyle.profileCard}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <Image
            source={require('../images/profile.png')}
            style={myStyle.profileImage}
          />
          <Text style={myStyle.profileText}>Gaurav</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyle.profileCard}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <Image
            source={require('../images/user2.png')}
            style={myStyle.profileImage}
          />
          <Text style={myStyle.profileText}>Friend</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={myStyle.addProfileCard}>
        <Image
          source={require('../images/plus.png')}
          style={myStyle.addProfile}
        />
      </TouchableOpacity>
      <Text style={myStyle.addProfileText}>Add Profile</Text>
    </View>
  );
};

export default SelectUser;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    height: 60,
  },
  title: {
    color: white,
    fontSize: 20,
  },
  profiles: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  profileText: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  profileCard: {
    width: 120,
    height: 120,
    marginLeft: 30,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '80%',
    height: '80%',
    borderRadius: 6,
  },
  addProfileCard: {
    width: 120,
    height: 120,
    marginTop: 50,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: darkGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addProfile: {
    width: '40%',
    height: '40%',
    borderRadius: 6,
    tintColor: 'white',
  },
  addProfileText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 18,
  },
});
