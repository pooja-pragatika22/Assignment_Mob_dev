import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const Welcome = ({ route, navigation }) => {
  const { userName } = route.params || {};
  const backgroundImageUri = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/beauty-background%2C-flower-beauty-%2C-beauty-wom-design-template-d2dbe64609bfa1086cbe8f6c85155e2b_screen.jpg';

  return (
    <ImageBackground
      source={{ uri: backgroundImageUri }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Welcome To DREAMLINE!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductPage')}>
          <Text style={styles.buttonText}>Go to Product Page</Text>
        </TouchableOpacity>
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
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 40,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#ff69b4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Welcome;
