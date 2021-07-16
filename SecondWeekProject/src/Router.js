import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Auth from './pages/auth';
import Posts from './pages/posts';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthPage" component={Auth} />
        <Stack.Screen name="PostsPage" component={Posts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
