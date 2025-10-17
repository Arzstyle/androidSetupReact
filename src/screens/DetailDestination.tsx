import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
  Image
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App'; // Pastikan path ini benar

type DetailDestinationProps = NativeStackScreenProps<RootStackParamList, 'DetailDestination'>;

const DetailDestination = ({ navigation }: DetailDestinationProps) => {
  const [personCount, setPersonCount] = useState(1);
  const pricePerPerson = 10000;

  const handleIncrement = () => {
    setPersonCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setPersonCount(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <ImageBackground
          source={require('../assets/bg-labuan.png')}
          style={styles.headerImage}
        >
          <View style={styles.headerOverlay}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIcon}>
              <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.weatherContainer}>
              <Feather name="sun" size={20} color="white" />
              <Text style={styles.weatherText}>24° C</Text>
            </View>
          </View>
          <View style={styles.titleContent}>
            <View style={styles.ratingBadge}>
              <Feather name="star" size={14} color="white" />
              <Text style={styles.ratingText}>5.0</Text>
            </View>
            <Text style={styles.destinationTitle}>Labuan Bajo</Text>
            <Text style={styles.destinationSubtitle}>
              From crystal-clear waters to breathtaking sunsets, Labuan Bajo is calling! Explore hidden islands, swim with manta rays, and create memories that last a lifetime.
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.detailsArea}>
          <Text style={styles.countryText}>🇮🇩 Indonesia</Text>
          <Text style={styles.sectionTitle}>Discover the Beauty of Labuan Bajo</Text>

          <View style={styles.reviewCard}>
            <Image
              source={{ uri: 'https://placehold.co/50x50/EAE8D3/000?text=R' }}
              style={styles.avatar}
            />
            <View style={styles.reviewContent}>
              <Text style={styles.reviewAuthor}>By Rifqi starboy</Text>
              <Text style={styles.reviewText}>Wow amazing yahh, best experience in my life very very worth it I like it! Very good very well</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Recommendation in Bajo</Text>
          <TouchableOpacity style={styles.recommendationCard}>
            <Image
              source={require('../assets/bg-italia.png')} // Ganti dengan gambar phinisi
              style={styles.recommendationImage}
            />
            <View style={styles.recommendationDetails}>
              <Text style={styles.recommendationTitle}>Phinisi Luxury Private Trip</Text>
              <Text style={styles.recommendationSubtitle}>🛥️ Complimentary pick-up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.stepper}>
          <TouchableOpacity onPress={handleIncrement} style={styles.stepperButton}>
            <Feather name="plus" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.stepperValue}>{personCount}</Text>
          <TouchableOpacity onPress={handleDecrement} style={styles.stepperButton}>
            <Feather name="minus" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmountLabel}>Total Amount</Text>
          <Text style={styles.totalAmountValue}>${(pricePerPerson * personCount).toLocaleString()}</Text>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2E7',
  },
  headerImage: {
    height: 450,
    justifyContent: 'space-between',
  },
  headerOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 60,
  },
  headerIcon: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 8,
    borderRadius: 20,
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  weatherText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  titleContent: {
    paddingHorizontal: 20,
    paddingBottom: 60, // Memberi ruang untuk content area di bawahnya
    backgroundColor: 'rgba(0,0,0,0.2)', // Gradient effect
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  ratingText: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  destinationTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  destinationSubtitle: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    lineHeight: 20,
  },
  detailsArea: {
    backgroundColor: '#F3F2E7',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -30,
    padding: 20,
  },
  countryText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A2E35',
    marginTop: 20,
    marginBottom: 15,
  },
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
  viewAllButton: {
    backgroundColor: '#EAE8D3',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 15,
  },
  viewAllText: {
    color: '#333',
    fontWeight: 'bold',
  },
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
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(26, 46, 53, 0.9)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 30 : 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  stepperButton: {
    padding: 8,
  },
  stepperValue: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  totalAmountContainer: {
    alignItems: 'center',
  },
  totalAmountLabel: {
    color: '#ccc',
    fontSize: 12,
  },
  totalAmountValue: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: '#FF7043',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DetailDestination;

