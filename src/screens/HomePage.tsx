import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  StatusBar
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App'; // Sesuaikan path jika perlu

const categories = ['Beach', 'Mountain', 'Forest', 'Desert'];

const SAFE_AREA_PADDING_TOP = Platform.OS === 'android' 
  ? (StatusBar.currentHeight ?? 0) + 10 
  : 60;

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomePage = ({ navigation }: HomePageProps) => {
  const [selectedCategory, setSelectedCategory] = useState('Beach');

  return (
    <View style={styles.containerWrapper}>
      <ScrollView>
        <View style={styles.innerContainer}>

          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.greetingText}>Hi, Akbar</Text>
            </View>
            <View style={styles.weatherContainer}>
              <Feather name="sun" size={24} color="#333" />
              <Text style={styles.weatherText}> 24° C</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.promoBanner}>
            <Text style={styles.promoText}>Plan Your{"\n"}Summer!</Text>
            <View style={styles.promoArrowCircle}>
              <Feather name="arrow-right" size={28} color="white" />
            </View>
          </TouchableOpacity>

          <View style={styles.searchSection}>
            <View style={styles.searchInputContainer}>
              <Feather name="search" size={20} color="#888" />
              <TextInput
                placeholder="Search destination..."
                style={styles.searchInput}
                placeholderTextColor="#999"
              />
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Feather name="sliders" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Destination</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.categoryButton,
                    selectedCategory === category && styles.categoryButtonActive,
                  ]}
                  onPress={() => setSelectedCategory(category)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === category && styles.categoryTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          
          <TouchableOpacity onPress={() => navigation.navigate('DetailDestination')}>
            <ImageBackground
              source={require('../assets/bg-labuan.png')}
              style={styles.destinationCard}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.cardOverlay}>
                <View style={styles.heartIconContainer}>
                  <Feather name="heart" size={22} color="#333" />
                </View>
                <View style={styles.cardDetails}>
                  <View>
                    <Text style={styles.cardLocation}>Labuan Bajo</Text>
                    <Text style={styles.cardCountry}>📍 Indonesia</Text>
                  </View>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.cardRating}>⭐ 5.0</Text>
                    <Text style={styles.cardPrice}>$4.000</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('DetailDestination')}>
            <ImageBackground
              source={require('../assets/bg-italia.png')}
              style={styles.destinationCard}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.cardOverlay}>
                <View style={styles.heartIconContainer}>
                  <Feather name="heart" size={22} color="#333" />
                </View>
                <View style={styles.cardDetails}>
                  <View>
                    <Text style={styles.cardLocation}>Venice</Text>
                    <Text style={styles.cardCountry}>📍 Italia</Text>
                  </View>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.cardRating}>⭐ 4.7</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>

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
    paddingBottom: 90,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
  },
  promoBanner: {
    backgroundColor: '#FF7043',
    borderRadius: 20,
    paddingVertical: 20,
    paddingLeft: 25,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promoText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  promoArrowCircle: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 45,
    height: 90,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    marginTop: 20,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EAE8D3',
    borderRadius: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    paddingVertical: 12,
    color: '#000',
  },
  filterButton: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 15,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: '600',
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryButton: {
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#EAE8D3',
    borderRadius: 20,
  },
  categoryButtonActive: {
    backgroundColor: '#FF7043',
  },
  categoryText: {
    color: '#333',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
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
    alignItems: 'flex-end'
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
  }
});

export default HomePage;

