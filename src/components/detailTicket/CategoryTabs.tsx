import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const categories = ['Hotel', 'Aircraft', 'Villa', 'Attraction'];

export const CategoryTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState('Aircraft');

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.tab,
              selectedCategory === category && styles.tabActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.tabText,
                selectedCategory === category && styles.tabTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 20,
  },
  tab: {
    backgroundColor: '#EAE8D3',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginRight: 10,
  },
  tabActive: {
    backgroundColor: '#FF7043',
  },
  tabText: {
    color: '#333',
    fontWeight: '500',
  },
  tabTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
});

