import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const pricePerPerson = 10000;

// 1. Definisikan tipe untuk props yang akan diterima
type BookingFooterProps = {
  onBookNowPress: () => void;
};

// 2. Terima 'onBookNowPress' sebagai prop
const BookingFooter = ({ onBookNowPress }: BookingFooterProps) => {
  const [personCount, setPersonCount] = useState(1);

  const handleIncrement = () => {
    setPersonCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setPersonCount(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
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
      
      {/* 3. Gunakan 'onBookNowPress' di sini */}
      <TouchableOpacity style={styles.bookButton} onPress={onBookNowPress}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

// Ganti menjadi export default agar lebih konsisten
export default BookingFooter;

