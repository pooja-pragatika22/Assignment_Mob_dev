import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
  if (!name || !password) {
    console.log('Please enter both name and password.');
    return;
  }
  try {
    await AsyncStorage.setItem('userName', name);
    await AsyncStorage.setItem('userPassword', password);
    navigation.navigate('Login');
  } catch (error) {
    console.log('Error: Failed to store user details.', error);
  }
};
  return (
    <ImageBackground
      source={{ uri: 'https://assets.cntraveller.in/photos/64475681c810805ead8e34aa/16:9/w_1024%2Cc_limit/GettyImages-1305078018.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Signup</Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            color="#ff69b4"
            onPress={handleSignup}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 18,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
});

export default Signup;
