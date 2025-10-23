import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export const RecommendationCard = () => {
  return (
    <TouchableOpacity style={styles.recommendationCard}>
      <Image
        source={require('../../assets/bg-italia.png')} // Ganti dengan gambar phinisi
        style={styles.recommendationImage}
      />
      <View style={styles.recommendationDetails}>
        <Text style={styles.recommendationTitle}>Phinisi Luxury Private Trip</Text>
        <Text style={styles.recommendationSubtitle}>🛥️ Complimentary pick-up</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recommendationCard: {
    flexDirection: 'row',
    backgroundColor: '#1A2E35',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  recommendationImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  recommendationDetails: {
    flex: 1,
  },
  recommendationTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  recommendationSubtitle: {
    color: '#ccc',
    marginTop: 5,
  },
});
