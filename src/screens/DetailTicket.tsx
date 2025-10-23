import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TicketHeader } from '../components/detailTicket/TicketHeader';
import { LocationSelector } from '../components/detailTicket/LocationSelector';
import { CategoryTabs } from '../components/detailTicket/CategoryTabs';
import { Calendar } from '../components/detailTicket/Calendar';
import { TicketCard } from '../components/detailTicket/TicketCard';

const DetailTicket = () => {
  return (
    <View style={styles.container}>
      <TicketHeader />
      <ScrollView>
        <LocationSelector />
        <CategoryTabs />
        <Calendar />
        
        <View style={styles.ticketListContainer}>
          <Text style={styles.ticketCount}>4 Tickets Found</Text>
          <TicketCard />
          <View style={{ height: 15 }} /> 
          <TicketCard />
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2E7',
  },
  ticketListContainer: {
    padding: 20,
    marginTop: 10,
  },
  ticketCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
});

export default DetailTicket;

