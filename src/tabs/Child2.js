import {View, Text} from 'react-native';
import React from 'react';
import Child3 from './Child3';

const Child2 = ({name}) => {
  return (
    <View>
      <Child3 name={name}/>
    </View>
  );
};

export default Child2;
