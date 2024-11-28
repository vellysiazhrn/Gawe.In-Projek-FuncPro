import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('employee'); // Default role is 'employee'

  const handleSubmit = async () => {
    // Validasi email dan password
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Semua kolom harus diisi');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password dan konfirmasi password tidak cocok');
      return;
    }

    try {
      // Buat akun dengan Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Simpan data user ke Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: role,
        createdAt: new Date(),
      });

      Alert.alert('Berhasil', `Akun dengan email ${email} berhasil dibuat sebagai ${role}`);
      navigation.navigate('signin'); // Pindah ke halaman login
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="Masukkan Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Input Password */}
      <TextInput
        style={styles.input}
        placeholder="Masukkan Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Konfirmasi Password */}
      <TextInput
        style={styles.input}
        placeholder="Konfirmasi Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Pemilihan Role */}
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, role === 'employee' && styles.selectedRole]}
          onPress={() => setRole('employee')}
        >
          <Text style={styles.roleText}>Employee</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, role === 'employer' && styles.selectedRole]}
          onPress={() => setRole('employer')}
        >
          <Text style={styles.roleText}>Employer</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <Button title="Sign Up" onPress={handleSubmit} />

      {/* Link to Login */}
      <View style={styles.loginContainer}>
        <Text>Sudah punya akun? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signin')}>
          <Text style={styles.loginLink}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#0548B3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  roleButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  selectedRole: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  roleText: {
    fontSize: 16,
    color: '#333',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  loginLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default SignUp;
