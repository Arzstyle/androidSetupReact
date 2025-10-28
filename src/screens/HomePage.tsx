import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Platform,
  Text,
  ActivityIndicator,
  FlatList, // Kita gunakan FlatList untuk data dinamis
} from 'react-native';

// Impor tipe navigasi
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App'; // Sesuaikan path

// Impor semua komponen
import { HomeHeader } from '../components/homePage/HomeHeader';
import { PromoBanner } from '../components/homePage/PromoBanner';
import { SearchBar } from '../components/homePage/SearchBar';
import { SectionHeader } from '../components/homePage/SectionHeader';
import { DestinationCard } from '../components/homePage/DestinationCard';
import { NavbarBottom } from '../components/homePage/NavbarBottom';

// --- Impor dari file API baru kita ---
import { fetchDestinations, DestinationItem } from '../api/apiServices';
// ---

const SAFE_AREA_PADDING_TOP = Platform.OS === 'android' 
  ? (StatusBar.currentHeight ?? 0) + 10 
  : 60;

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomePage = ({ navigation }: HomePageProps) => {
  // State untuk menyimpan data dari API
  const [destinations, setDestinations] = useState<DestinationItem[]>([]);
  // State untuk loading
  const [isLoading, setIsLoading] = useState(true);
  // State untuk error
  const [error, setError] = useState<Error | null>(null);

  // useEffect akan berjalan saat komponen pertama kali dimuat
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true); // Mulai loading
        const data = await fetchDestinations(); // Panggil fungsi API
        setDestinations(data); // Simpan data ke state
        setError(null); // Bersihkan error jika sukses
      } catch (e: any) {
        setError(e); // Tangkap error jika gagal
      } finally {
        setIsLoading(false); // Selesai loading
      }
    };

    loadData();
  }, []); // Array kosong berarti "jalankan satu kali saat mount"

  const handleBookNowPress = () => {
    // Nanti kita bisa kirim ID item ke halaman detail
    navigation.navigate('DetailDestination');
  };

  // Fungsi untuk merender konten berdasarkan state
  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" color="#FF7043" style={{ marginTop: 20 }} />;
    }

    if (error) {
      return <Text style={styles.errorText}>Terjadi kesalahan: {error.message}</Text>;
    }

    return (
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DestinationCard
            item={item}
            onPress={handleBookNowPress}
          />
        )}
        showsVerticalScrollIndicator={false}
        // Pastikan FlatList tidak bisa di-scroll sendiri di dalam ScrollView
        scrollEnabled={false} 
      />
    );
  };

  return (
    <View style={styles.containerWrapper}>
      {/* ScrollView tetap diperlukan untuk header */ }
      <ScrollView stickyHeaderIndices={[0]} style={styles.scrollView}>
        {/* Kita buat header jadi "sticky" di atas */}
        <View style={styles.stickyHeader}>
          <HomeHeader />
          <PromoBanner />
          <SearchBar />
          <SectionHeader title="Popular Destination" />
        </View>
        
        <View style={styles.innerContainer}>
          {renderContent()}
        </View>
      </ScrollView>
      
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
  scrollView: {
    flex: 1,
  },
  stickyHeader: {
    backgroundColor: '#F3F2E7',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20, // Padding agar item terakhir tidak tertutup navbar
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomePage;

