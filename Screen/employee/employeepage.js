import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const EmployeePage = () => {
  // Data dummy loker
  const [loker, setLoker] = useState([
    { id: '1', posisi: 'Software Engineer', lokasi: 'Jakarta', perusahaan: 'TechCorp', gaji: 'Rp10.000.000 - Rp15.000.000' },
    { id: '2', posisi: 'UI/UX Designer', lokasi: 'Bandung', perusahaan: 'CreativeStudio', gaji: 'Rp8.000.000 - Rp12.000.000' },
    { id: '3', posisi: 'Data Analyst', lokasi: 'Yogyakarta', perusahaan: 'DataPro', gaji: 'Rp9.000.000 - Rp14.000.000' },
    { id: '4', posisi: 'Product Manager', lokasi: 'Jakarta', perusahaan: 'Innovate Inc.', gaji: 'Rp12.000.000 - Rp18.000.000' },
  ]);

  // Fungsi untuk merender setiap item dalam daftar
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{item.posisi}</Text>
      <Text style={styles.details}>Perusahaan: {item.perusahaan}</Text>
      <Text style={styles.details}>Lokasi: {item.lokasi}</Text>
      <Text style={styles.details}>Gaji: {item.gaji}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lowongan Kerja</Text>
      <FlatList
        data={loker}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

// Gaya untuk tampilan
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
});

export default EmployeePage;
