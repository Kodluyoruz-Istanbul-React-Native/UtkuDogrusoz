/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, FlatList, ActivityIndicator, Text} from 'react-native';
import fetchData from '../../hooks/fetchData';
import PostText from '../../components/postText';

const Posts = props => {
  const {loading, data, error} = fetchData(
    'https://jsonplaceholder.typicode.com/posts',
  );

  function navigateOtherPage(item) {
    props.navigation.navigate('DetailPage',{item});
  }

  const renderPosts = ({item}) => (
    <PostText item={item} onSelect={() => navigateOtherPage(item)} />
  );
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
