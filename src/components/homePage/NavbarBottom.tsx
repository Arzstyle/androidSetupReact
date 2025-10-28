import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App'; // Sesuaikan path jika App.tsx ada di root
import Ionicons from 'react-native-vector-icons/Ionicons'; // 1. Impor Ionicons

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const NavbarBottom = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home" style={styles.navbarIconActive} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate('DetailTicket')}
      >
        <Ionicons name="grid" style={styles.navbarIconInactive} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton}>
        <Ionicons name="person" style={styles.navbarIconInactive} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A2E35',
    height: 70,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarIconActive: {
    fontSize: 28,
    color: 'white', 
  },
  navbarIconInactive: {
    fontSize: 24,
    color: '#7D8A93', 
  },
});

