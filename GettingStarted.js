import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const GettingStarted = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/fc/c5/0b/fcc50b8722c14262aa2a28fa0e14bd20.jpg' }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.companyName}>Dreamline</Text>
        <Text style={styles.text}>
          Beauty is about being comfortable in your own skin
        </Text>
        <View style={styles.buttonContainer}>
        <Button title="Get Started" onPress={() => navigation.navigate('Signup')} />
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  companyName: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'yellow',
    textShadowRadius: 10,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: 'yellow',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default GettingStarted;