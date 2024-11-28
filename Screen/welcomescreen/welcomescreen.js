
// screens/Welcome.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function WelcomeScreen({ navigation }) {
  const goToSignUp = () => {
    navigation.navigate('signup');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToSignUp}>
      <Text style={styles.text}>Tap anywhere to start!</Text>
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0548B3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
});

