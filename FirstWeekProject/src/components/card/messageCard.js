/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './messageCard.styles';

const MessageCard = props => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.column_container}>
          <Text style={styles.message}>{props.message.message}</Text>
          <View style={styles.username_container}>
            <Text>{props.message.userName}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MessageCard;
