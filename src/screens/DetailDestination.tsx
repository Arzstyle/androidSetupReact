import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App'; 

import { DetailHeader } from '../components/detailPage/DetailHeader';
import { SectionHeader } from '../components/detailPage/SectionHeader';
import { ReviewCard } from '../components/detailPage/ReviewCard';
import { RecommendationCard } from '../components/detailPage/RecommendationCard';
// Perbaikan: Hapus tanda {} saat mengimpor BookingFooter
import BookingFooter from '../components/detailPage/BookingFooter';

type DetailDestinationProps = NativeStackScreenProps<RootStackParamList, 'DetailDestination'>;

const DetailDestination = ({ navigation }: DetailDestinationProps) => {

  const handleBookNowPress = () => {
    navigation.navigate('DetailTicket');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <DetailHeader onBackPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        <View style={styles.detailsArea}>
          <Text style={styles.countryText}>🇮🇩 Indonesia</Text>
          
          <SectionHeader title="Discover the Beauty of Labuan Bajo" />

          <ReviewCard />
          
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>

          <SectionHeader title="Recommendation in Bajo" />
          
          <RecommendationCard />
        </View>
      </ScrollView>

      <BookingFooter onBookNowPress={handleBookNowPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2E7',
  },
  detailsArea: {
    backgroundColor: '#F3F2E7',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    padding: 20,
  },
  countryText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
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
});

export default DetailDestination;

