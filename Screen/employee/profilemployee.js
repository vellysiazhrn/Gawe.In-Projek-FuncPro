import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

const ProfileEmployee = ({ data }) => {
  const {
    namaLengkap,
    tempatTanggalLahir,
    nomorHP,
    email,
    linkedIn,
    instagram,
    pendidikanTerakhir,
    cvLink,
  } = data;

  const openLink = (url) => {
    if (url) {
      Linking.openURL(url).catch(() =>
        alert('Gagal membuka tautan, pastikan URL valid.')
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profil Karyawan</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nama Lengkap:</Text>
        <Text style={styles.text}>{namaLengkap}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Tempat, Tanggal Lahir:</Text>
        <Text style={styles.text}>{tempatTanggalLahir}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nomor HP:</Text>
        <Text style={styles.text}>{nomorHP}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>LinkedIn:</Text>
        <Text
          style={[styles.text, styles.link]}
          onPress={() => openLink(linkedIn)}
        >
          {linkedIn}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Instagram:</Text>
        <Text
          style={[styles.text, styles.link]}
          onPress={() => openLink(instagram)}
        >
          {instagram}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Pendidikan Terakhir:</Text>
        <Text style={styles.text}>{pendidikanTerakhir}</Text>
      </View>

      <TouchableOpacity style={styles.cvButton} onPress={() => openLink(cvLink)}>
        <Text style={styles.cvButtonText}>Lihat CV</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
  link: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
  cvButton: {
    backgroundColor: '#4caf50',
    padding: 12,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  cvButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileEmployee;
