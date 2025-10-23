import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface DetailHeaderProps {
  onBackPress: () => void;
}

export const DetailHeader = ({ onBackPress }: DetailHeaderProps) => {
  return (
    <ImageBackground
      source={require('../../assets/bg-labuan.png')} // Sesuaikan path jika perlu
      style={styles.headerImage}
    >
      <View style={styles.headerOverlay}>
        <TouchableOpacity onPress={onBackPress} style={styles.headerIcon}>
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
          From crystal-clear waters to breathtaking sunsets, Labuan Bajo is calling!
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
    paddingBottom: 60,
    backgroundColor: 'rgba(0,0,0,0.2)',
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
});
