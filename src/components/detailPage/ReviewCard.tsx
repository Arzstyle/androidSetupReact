import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const ReviewCard = () => {
  return (
    <View style={styles.reviewCard}>
      <Image
        source={{ uri: 'https://placehold.co/50x50/EAE8D3/000?text=R' }}
        style={styles.avatar}
      />
      <View style={styles.reviewContent}>
        <Text style={styles.reviewAuthor}>By Rifqi starboy</Text>
        <Text style={styles.reviewText}>Wow amazing yahh, best experience in my life very very worth it I like it!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  reviewContent: {
    flex: 1,
  },
  reviewAuthor: {
    fontWeight: 'bold',
    color: '#333',
  },
  reviewText: {
    color: '#555',
    marginTop: 5,
  },
});
