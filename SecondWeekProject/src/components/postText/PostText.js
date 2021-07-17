/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './PostText.styles';

const PostText = ({item, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.text_style}>
        <Text> {item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostText;
