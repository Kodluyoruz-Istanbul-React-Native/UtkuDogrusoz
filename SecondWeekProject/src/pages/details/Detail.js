/* eslint-disable prettier/prettier */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const Detail = ({route}) => {
  const {item} = route.params;
  console.log(item.title);
  return (
    <SafeAreaView>
      <View>
        <Text>{item.title}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Detail;
