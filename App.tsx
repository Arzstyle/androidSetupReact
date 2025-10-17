import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnDisplayScreen from './src/screens/onDisplay';
import HomePage from './src/screens/HomePage';
import DetailDestination from './src/screens/DetailDestination';

export type RootStackParamList = {
  OnDisplay: undefined;
  Home: undefined;
  DetailDestination: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnDisplay">
        <Stack.Screen 
          name="OnDisplay" 
          component={OnDisplayScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="DetailDestination"
          component={DetailDestination}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

