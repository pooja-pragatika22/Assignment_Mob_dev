import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useFavorite } from '../FavoriteContext';

const Card = ({ product }) => {
  const { addFavorite } = useFavorite();
  const [message, setMessage] = useState('');

  const handleAddFavorite = (product) => {
    addFavorite(product);
    setMessage('Added to Favorites');
  };

  if (!product || !product.imageUrl || !product.name || !product.price) {
    return (
      <View style={styles.card}>
        <Text style={styles.error}>Invalid product data</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Button title="Add to Favorites" onPress={() => handleAddFavorite(product)} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  message: {
    fontSize: 14,
    color: 'green',
    marginTop: 10,
  },
  error: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
  },
});

export default Card;
