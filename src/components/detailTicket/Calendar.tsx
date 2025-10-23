import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const dates = [
  { day: 'S', date: '22' },
  { day: 'M', date: '23' },
  { day: 'T', date: '24' },
  { day: 'W', date: '25' },
  { day: 'T', date: '26' },
  { day: 'F', date: '27' },
  { day: 'S', date: '28' },
];

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState('23');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.monthSelector}>
        <Text style={styles.monthText}>June, 2025</Text>
        <Feather name="chevron-down" size={18} color="#555" />
      </TouchableOpacity>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
        {dates.map((item) => (
          <TouchableOpacity
            key={item.date}
            style={[
              styles.dateItem,
              selectedDate === item.date && styles.dateItemActive,
            ]}
            onPress={() => setSelectedDate(item.date)}
          >
            <Text style={[styles.dateDay, selectedDate === item.date && styles.dateTextActive]}>{item.day}</Text>
            <Text style={[styles.dateNumber, selectedDate === item.date && styles.dateTextActive]}>{item.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5,
  },
  dateScroll: {
    marginTop: 15,
  },
  dateItem: {
    backgroundColor: '#EAE8D3',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginRight: 10,
    minWidth: 50,
  },
  dateItemActive: {
    backgroundColor: '#FF7043',
  },
  dateDay: {
    color: '#888',
    fontSize: 14,
  },
  dateNumber: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  dateTextActive: {
    color: 'white',
  },
});

