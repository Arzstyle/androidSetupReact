import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface DestinationCardProps {
  item: {
    name: string;
    country: string;
    image: ImageSourcePropType;
    rating: string;
    price?: string; // Harga dibuat opsional
  };
  onPress: () => void;
}

export const DestinationCard = ({ item, onPress }: DestinationCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={item.image}
        style={styles.destinationCard}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={styles.cardOverlay}>
          <View style={styles.heartIconContainer}>
            <Feather name="heart" size={22} color="#333" />
          </View>
          <View style={styles.cardDetails}>
            <View>
              <Text style={styles.cardLocation}>{item.name}</Text>
              <Text style={styles.cardCountry}>📍 {item.country}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.cardRating}>⭐ {item.rating}</Text>
              {/* Hanya tampilkan harga jika ada */}
              {item.price && <Text style={styles.cardPrice}>{item.price}</Text>}
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
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
});
