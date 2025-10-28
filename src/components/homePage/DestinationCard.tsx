import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

// 1. Definisikan tipe data untuk 'item'
// Perbaikan: 'image' sekarang adalah 'string'
type DestinationItem = {
  id: string; // Tambahkan id jika belum ada
  name: string;
  country: string;
  image: string; // Ini adalah URL string dari API
  rating: string;
  price?: string;
};

// Tentukan tipe untuk props komponen
type DestinationCardProps = {
  item: DestinationItem;
  onPress: () => void;
};

export const DestinationCard = ({ item, onPress }: DestinationCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        // 2. Gunakan { uri: item.image } untuk memuat gambar dari URL
        source={{ uri: item.image }}
        style={styles.destinationCard}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={styles.cardOverlay}>
          <View style={styles.heartIconContainer}>
            <Text style={styles.heartIcon}>❤️</Text>
          </View>
          <View style={styles.cardDetails}>
            <View>
              <Text style={styles.cardLocation}>{item.name}</Text>
              <Text style={styles.cardCountry}>📍 {item.country}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.cardRating}>⭐ {item.rating}</Text>
              {item.price && (
                <Text style={styles.cardPrice}>{item.price}</Text>
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  destinationCard: {
    height: 250,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  cardOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'space-between',
  },
  heartIconContainer: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    fontSize: 20,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardLocation: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  cardCountry: {
    fontSize: 14,
    color: 'white',
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  cardRating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
});

