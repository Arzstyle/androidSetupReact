import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SectionHeaderProps {
  title: string;
}

// Komponen header yang disederhanakan untuk halaman detail
export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <Text style={styles.sectionTitle}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A2E35',
    marginTop: 20,
    marginBottom: 15,
  },
});
