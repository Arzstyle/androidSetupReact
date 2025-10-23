import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export const PromoBanner = () => {
  return (
    <TouchableOpacity style={styles.promoBanner}>
      <Text style={styles.promoText}>Plan Your{"\n"}Summer!</Text>
      <View style={styles.promoArrowCircle}>
        <Feather name="arrow-right" size={28} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  promoBanner: {
    backgroundColor: '#FF7043',
    borderRadius: 20,
    paddingVertical: 20,
    paddingLeft: 25,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promoText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  promoArrowCircle: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 45,
    height: 90,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
