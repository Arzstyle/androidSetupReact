import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export const SearchBar = () => {
  return (
    <View style={styles.searchSection}>
      <View style={styles.searchInputContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          placeholder="Search destination..."
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterIcon}>📊</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    marginTop: 20,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EAE8D3',
    borderRadius: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 18,
    color: '#888',
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    paddingVertical: 12,
    color: '#000',
  },
  filterButton: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 15,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 24,
    color: 'white',
  },
});

