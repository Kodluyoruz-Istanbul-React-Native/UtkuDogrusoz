/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, FlatList, ActivityIndicator, Text} from 'react-native';
import fetchData from '../../hooks/fetchData';

const Posts = () => {
  const {loading, data, error} = fetchData(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const renderPosts = ({item}) => <Text> {item.title}</Text>;
  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderPosts} />
    </SafeAreaView>
  );
};

export default Posts;
