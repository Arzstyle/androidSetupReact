import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

// Data ini bisa Anda ganti dengan props nanti
const ticketData = {
  from: 'NL',
  fromCity: 'Rotterdam',
  to: 'IDN',
  toCity: 'Labuan Bajo',
  departureTime: '5:30pm',
  departureDate: 'Mon, 23 Jun',
  arrivalTime: '3:30am',
  arrivalDate: 'Tue, 24 Jun',
  price: '$1.700',
};

export const TicketCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.airlineBadge}>
        <Text style={styles.airlineText}>AIRLINES</Text>
      </View>
      <View style={styles.flightInfo}>
        <View style={styles.location}>
          <Text style={styles.countryCode}>{ticketData.from}</Text>
          <Text style={styles.cityName}>{ticketData.fromCity}</Text>
        </View>
        <Feather name="airplane" size={24} color="#333" style={styles.planeIcon} />
        <View style={[styles.location, { alignItems: 'flex-end' }]}>
          <Text style={styles.countryCode}>{ticketData.to}</Text>
          <Text style={styles.cityName}>{ticketData.toCity}</Text>
        </View>
      </View>
      <View style={styles.timeInfo}>
        <View>
          <Text style={styles.time}>{ticketData.departureTime}</Text>
          <Text style={styles.date}>{ticketData.departureDate}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.time}>{ticketData.arrivalTime}</Text>
          <Text style={styles.date}>{ticketData.arrivalDate}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.airlineLogo}>
          <Feather name="home" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.price}>{ticketData.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  airlineBadge: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#FF7043',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  airlineText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    transform: [{ rotate: '-90deg' }],
  },
  flightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingLeft: 65,
  },
  location: {},
  countryCode: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  cityName: {
    color: '#888',
  },
  planeIcon: {
    marginHorizontal: 10,
    transform: [{ rotate: '45deg' }]
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 15,
    paddingLeft: 65,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    color: '#888',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 15,
    paddingLeft: 65,
  },
  airlineLogo: {
    backgroundColor: '#1A2E35',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

