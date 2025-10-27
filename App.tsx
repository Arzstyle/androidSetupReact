import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Impor semua layar utama
import OnDisplayScreen from './src/screens/onDisplay';
import HomePage from './src/screens/HomePage';
import DetailDestination from './src/screens/DetailDestination';
import DetailTicket from './src/screens/DetailTicket';

// Tipe navigasi Anda kembali sederhana
export type RootStackParamList = {
  OnDisplay: undefined;
  Home: undefined;
  DetailDestination: undefined;
  DetailTicket: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="OnDisplay"
        screenOptions={{ headerShown: false }}
      >
        {/* Alur Anda tetap sama: OnDisplay -> Home */}
        <Stack.Screen 
          name="OnDisplay" 
          component={OnDisplayScreen} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
        />
        <Stack.Screen 
          name="DetailDestination"
          component={DetailDestination}
        />
        <Stack.Screen 
          name="DetailTicket"
          component={DetailTicket}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

