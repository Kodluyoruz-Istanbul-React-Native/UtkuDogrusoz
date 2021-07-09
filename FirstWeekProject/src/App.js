import React from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import json_data from '../json-data.json';
import MessageCard from './components/card/messageCard';

function App() {
  const renderMessages = ({item}) => <MessageCard message={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={json_data}
          renderItem={renderMessages}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {borderWidth: 1, borderColor: '#e0e0e0'},
});
