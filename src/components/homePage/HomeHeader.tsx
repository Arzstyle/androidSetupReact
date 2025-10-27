import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.greetingText}>Hi, Akbar</Text>
      </View>
      <View style={styles.weatherContainer}>
        {/* Ganti Ikon Feather dengan Emoji */}
        <Text style={styles.weatherIcon}>☀️</Text>
        <Text style={styles.weatherText}> 24° C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    fontSize: 24,
  },
  weatherText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
  },
});

