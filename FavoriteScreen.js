
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, ImageBackground } from 'react-native';
import { useFavorite } from '../FavoriteContext';
import Card from './Card';

const FavoriteScreen = ({ navigation }) => {
  const { favorites, removeFavorite } = useFavorite();
  const [message, setMessage] = React.useState('');

  const handleRemoveFavorite = (id) => {
    removeFavorite(id);
  };

  const handleLogout = () => {
    navigation.navigate('GettingStarted');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://wallpaperset.com/w/full/6/f/1/143211.jpg' }}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Favorite Items</Text>
        {favorites.length === 0 && (
          <Text style={styles.message}>OOPS! NO ITEMS YET!!</Text>
        )}
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Card product={item} />
              <Button
                title="Remove from Favorites"
                onPress={() => handleRemoveFavorite(item.id)}
              />
            </View>
          )}
        />
        <Button title="Log Out" onPress={handleLogout} />
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 40,
    marginBottom: 20,
    color: 'white',
  },
  message: {
    fontSize: 20,
    color: 'yellow',
    marginBottom: 20,
  },
});

export default FavoriteScreen;
