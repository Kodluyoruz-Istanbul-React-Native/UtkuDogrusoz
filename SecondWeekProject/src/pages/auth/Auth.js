/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';

const Auth = (props) => {
  const [text, onChangeText] = React.useState('');
  function navigateOtherPage() {
      props.navigation.navigate('PostsPage');
  }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        onPress={navigateOtherPage}
        title="Liste Sayfasına git"
        color="#841584"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Auth;
