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
      {/* Tombol Home (Aktif) */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate('Home')}
      >
        {/* 2. Ganti <Text> dengan <Ionicons> */}
        <Ionicons name="home" style={styles.navbarIconActive} />
      </TouchableOpacity>

      {/* Tombol Tiket (Inaktif) */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate('DetailTicket')}
      >
        {/* 3. Ganti <Text> dengan <Ionicons> */}
        <Ionicons name="grid" style={styles.navbarIconInactive} />
      </TouchableOpacity>

      {/* Tombol Profile (Inaktif) */}
      <TouchableOpacity style={styles.tabButton}>
        {/* 4. Ganti <Text> dengan <Ionicons> */}
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
    backgroundColor: '#1A2E35', // Warna gelap
    height: 70,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarIconActive: {
    fontSize: 28,
    color: 'white', // Ikon aktif putih
  },
  navbarIconInactive: {
    fontSize: 24,
    color: '#7D8A93', // Ikon inaktif abu-abu
  },
});

