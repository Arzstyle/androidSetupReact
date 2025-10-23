import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

// Menentukan jarak atas layar
const SAFE_AREA_PADDING_TOP = Platform.OS === 'android' ? StatusBar.currentHeight : 60;

export const TicketHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
        <Feather name="arrow-left" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>Tickets</Text>
      <TouchableOpacity style={styles.iconButton}>
        <Feather name="more-vertical" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: SAFE_AREA_PADDING_TOP,
    paddingBottom: 10,
    backgroundColor: '#F3F2E7',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  iconButton: {
    padding: 5,
  },
});

