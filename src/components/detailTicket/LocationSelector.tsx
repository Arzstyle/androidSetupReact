import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export const LocationSelector = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Current locations</Text>
      <TouchableOpacity style={styles.selector}>
        <Text style={styles.locationText}>Netherlands</Text>
        <Feather name="chevron-down" size={20} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  label: {
    color: '#888',
    fontSize: 14,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
});

