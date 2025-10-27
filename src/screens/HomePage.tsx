import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Platform
} from 'react-native';

// Impor tipe navigasi
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App'; // Sesuaikan path

// Impor semua komponen yang sudah dipecah secara individual
import { HomeHeader } from '../components/homePage/HomeHeader';
import { PromoBanner } from '../components/homePage/PromoBanner';
import { SearchBar } from '../components/homePage/SearchBar';
import { SectionHeader } from '../components/homePage/SectionHeader';
import { DestinationCard } from '../components/homePage/DestinationCard';
// Impor NavbarBottom
import { NavbarBottom } from '../components/homePage/NavbarBottom';

const SAFE_AREA_PADDING_TOP = Platform.OS === 'android' 
  ? (StatusBar.currentHeight ?? 0) + 10 
  : 60;

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomePage = ({ navigation }: HomePageProps) => {

  const handleBookNowPress = () => {
    navigation.navigate('DetailDestination');
  };

  // Data 'item' untuk DestinationCard
  const labuanBajoItem = {
    image: require('../assets/bg-labuan.png'),
    name: "Labuan Bajo",
    country: "Indonesia",
    rating: "5.0",
    price: "$4.000"
  };

  const veniceItem = {
    image: require('../assets/bg-italia.png'),
    name: "Venice",
    country: "Italia",
    rating: "4.7",
    price: undefined
  };

  return (
    <View style={styles.containerWrapper}>
      <ScrollView>
        <View style={styles.innerContainer}>
          
          <HomeHeader />
          <PromoBanner />
          <SearchBar />
          <SectionHeader title="Popular Destination" />

          <DestinationCard
            item={labuanBajoItem}
            onPress={handleBookNowPress}
          />
          <DestinationCard
            item={veniceItem}
            onPress={handleBookNowPress}
          />

        </View>
      </ScrollView>
      
      {/* NavbarBottom diletakkan di sini, di luar ScrollView */}
      <NavbarBottom />
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
    // Padding agar item terakhir tidak tertutup navbar
    paddingBottom: 20, 
  },
});

export default HomePage;

