import {View, Text} from 'react-native';
import React from 'react';

const Child3 = ({name}) => {
  return (
    <View>
      <Text style={{color: '#fff',fontSize:30}}>{name}</Text>
    </View>
  );
};

export default Child3;
