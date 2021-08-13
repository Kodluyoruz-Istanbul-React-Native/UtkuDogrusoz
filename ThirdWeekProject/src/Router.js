/* eslint-disable prettier/prettier */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/auth/Login/Login';
import Sign from './pages/auth/Sign/Sign';
import Home from './pages/home/Home';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignPage" component={Sign} />
      <Stack.Screen name="LoginPage" component={Login} />
    </Stack.Navigator>
  );
};

const Router = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthPage" component={AuthStack} />
        <Stack.Screen name="HomePage" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
