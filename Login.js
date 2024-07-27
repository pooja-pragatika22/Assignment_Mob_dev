import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedName = await AsyncStorage.getItem('userName');
      const storedPassword = await AsyncStorage.getItem('userPassword');

      if (storedName === name && storedPassword === password) {
        navigation.navigate('Drawer', { userName: name }); 
      } else {
        console.log('Login Error: Invalid username or password.');
      }
    } catch (error) {
      console.log('Error: Failed to retrieve user details.', error);
    }
  };

  return (
    <ImageBackground source={{ uri: 'https://t4.ftcdn.net/jpg/06/82/65/79/360_F_682657909_FvtTkzt0cHavPO1qbSZzRw89iRd30IKu.jpg' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          placeholder="Enter your username"
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
          <Button title="Login" onPress={handleLogin} color="black" />
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
  },
  buttonContainer: {
    backgroundColor: '#ff69b4',
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default Login;
