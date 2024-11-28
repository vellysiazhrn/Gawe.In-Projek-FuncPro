import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function JobApplicationsScreen() {
  const [activeTab, setActiveTab] = useState('Tawaran'); // Default tab

  // Contoh data untuk tawaran dan lamaran pelamar
  const offers = [
    { id: '1', title: 'Tawaran Pekerjaan 1', description: 'Deskripsi pekerjaan 1' },
    { id: '2', title: 'Tawaran Pekerjaan 2', description: 'Deskripsi pekerjaan 2' },
  ];

  const applications = [
    { id: '1', title: 'Lamaran 1', status: 'Diterima' },
    { id: '2', title: 'Lamaran 2', status: 'Diproses' },
  ];

  const renderOffers = () => (
    <FlatList
      data={offers}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      )}
    />
  );

  const renderApplications = () => (
    <FlatList
      data={applications}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardStatus}>Status: {item.status}</Text>
        </View>
      )}
    />
  );

  return (
    <View style={styles.container}>
      {/* Switch Tab */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Tawaran' && styles.activeTab]}
          onPress={() => setActiveTab('Tawaran')}
        >
          <Text style={[styles.tabText, activeTab === 'Tawaran' && styles.activeTabText]}>Tawaran</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Lamaran' && styles.activeTab]}
          onPress={() => setActiveTab('Lamaran')}
        >
          <Text style={[styles.tabText, activeTab === 'Lamaran' && styles.activeTabText]}>Lamaran</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {activeTab === 'Tawaran' ? renderOffers() : renderApplications()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  activeTab: {
    borderBottomColor: '#0548B3',
  },
  tabText: {
    fontSize: 16,
    color: '#888888',
  },
  activeTabText: {
    color: '#0548B3',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  cardStatus: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
});
