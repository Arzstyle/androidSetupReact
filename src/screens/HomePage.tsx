import React from 'react';
import { View, StyleSheet, ScrollView, Platform, StatusBar } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App'; 

// Mengimpor setiap komponen 
import { HomeHeader } from '../components/homePage/HomeHeader';
import { PromoBanner } from '../components/homePage/PromoBanner';
import { SearchBar } from '../components/homePage/SearchBar';
import { SectionHeader } from '../components/homePage/SectionHeader';
import { CategoryList } from '../components/homePage/CategoryList';
import { DestinationCard } from '../components/homePage/DestinationCard';

const popularDestinations = [
  {
    id: '1',
    name: 'Labuan Bajo',
    country: 'Indonesia',
    image: require('../assets/bg-labuan.png'), 
    rating: '5.0',
    price: '$4.000',
  },
  {
    id: '2',
    name: 'Venice',
    country: 'Italia',
    image: require('../assets/bg-italia.png'),
    rating: '4.7',
  },
];

const SAFE_AREA_PADDING_TOP = Platform.OS === 'android' 
  ? (StatusBar.currentHeight ?? 0) + 10 
  : 60;

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomePage = ({ navigation }: HomePageProps) => {
  return (
    <View style={styles.containerWrapper}>
      <ScrollView>
        <View style={styles.innerContainer}>
          
          <HomeHeader />
          <PromoBanner />
          <SearchBar />
          <SectionHeader title="Popular Destination" />
          <CategoryList />

          {popularDestinations.map((item) => (
            <DestinationCard
              key={item.id}
              item={item}
              onPress={() => {
                navigation.navigate('DetailDestination');
              }}
            />
          ))}

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#F3F2E7',
    paddingTop: SAFE_AREA_PADDING_TOP,
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 90, // Ruang untuk tab navigator di bawah
  },
});

export default HomePage;

