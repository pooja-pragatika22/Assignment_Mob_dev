
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, SafeAreaView, FlatList, Switch } from 'react-native';
import Card from './Card';
import { useFavorite } from '../FavoriteContext';

const initial = 'https://img.freepik.com/free-photo/blush-lilac-makeup-brushes-straw-hat-are-located-isolated-pink_197531-10745.jpg';
const alternative = 'https://img.freepik.com/free-photo/white-makeup-brushes-with-compact-powder-roses-colored-backdrop_23-2148129431.jpg';

const products = [
  {
    category: 'Makeup',
    data: [
      { id: 1, name: 'ULTRA GLOW MAKEUP COMBO', description: 'The ultimate glow for your beauty routine', imageUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-06/240610-beauty-awards-2024-face-makeup-winners-vl-social-74fb90.jpg', price: '$20', rating: 4.5 },
      { id: 2, name: 'LAKME MAKEUP KIT', description: 'Your perfect beauty partner', imageUrl: 'https://www.jagranimages.com/images/newimg/04072023/04_07_2023-best_lakme_products__23461161.jpg', price: '$30', rating: 4.7 },
      { id: 3, name: 'SUGAR COSMETICS MAKEUP KIT', description: 'Organic and vibrant beauty', imageUrl: 'https://d1f34ajap1v5tm.cloudfront.net/image/-Nu8SbFk5SUGAR%20Vineeta%27s%20Favourite%20Makeup%20Kit.jpg', price: '$40', rating: 4.8 }
    ]
  },
  {
    category: 'Skincare',
    data: [
      { id: 4, name: 'HYDRATING FACE CREAM', description: 'Deep hydration for glowing skin', imageUrl: 'https://www.tealandterra.com/cdn/shop/products/2_998b6e62-4454-4c0c-a67d-89df74ea0679_1024x1024.jpg?v=1624995706', price: '$25', rating: 4.6 },
      { id: 5, name: 'REVITALIZING SERUM', description: 'Restore and rejuvenate your skin', imageUrl: 'https://www.kimirica.shop/cdn/shop/files/SkinRejuvenatingSerum_Listing_November-2023-07.jpg', price: '$35', rating: 4.8 }
    ]
  },
  {
    category: 'Mini Travel Kits',
    data: [
      { id: 6, name: 'TRAVEL MAKEUP KIT', description: 'Compact beauty on the go', imageUrl: 'https://image.made-in-china.com/2f0j00OdzlfHsarwpZ/Makeup-Train-Case-Large-Cosmetic-Case-Professional-Portable-Makeup-Brush-Holder-Organizer-Bag-Travel-Storage-Case-with-Adjustable-Dividers.webp', price: '$15', rating: 4.4 },
      { id: 7, name: 'SKINCARE ESSENTIALS TRAVEL KIT', description: 'Your skincare essentials, anywhere', imageUrl: 'https://www.thenaturalwash.com/cdn/shop/files/PouchcomboGotoKit.jpg?v=1696670584', price: '$20', rating: 4.5 },
    ]
  },
  {
    category: 'Bestsellings',
    data: [
      { id: 8, name: 'LUXURY FACE CREAM', description: 'Indulge in luxury for your skin', imageUrl: 'https://winnowskincare.com/cdn/shop/products/Winnow-CBD-Shop-Face-Cream-Product-Packaging_8d7b9b86-ae37-427f-a738-ca005b600b46.jpg?v=1643384031', price: '$50', rating: 4.9 },
      { id: 9, name: 'PREMIUM MAKEUP SET', description: 'Top-tier makeup for all occasions', imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/kic17rk0-0/makeup-kit/1/m/d/premium-makeup-kits-rr144-our-beauty-original-imafy57fbtwjzhbq.jpeg?q=20&crop=false', price: '$60', rating: 4.8 },
    ]
  },
];


const ProductPage = ({ navigation, route }) => {
  const [switched, setSwitched] = useState(false);
  const { addFavorite } = useFavorite();
  const { onLogout, userName } = route.params || {};

  const toggleSwitched = () => {
    setSwitched((previousState) => !previousState);
  };

  const backgroundImage = switched ? alternative : initial;

  const handleFavoritesPress = () => {
    navigation.navigate('Favorites');
  };

  const handleAddToFavorites = (product) => {
    addFavorite(product);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigation.navigate('GettingStarted');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{ uri: backgroundImage }} style={styles.imageBackground}>
        <View style={styles.topBar}>
          <Button title="Favorites" onPress={handleFavoritesPress} />
          <Text style={styles.text}>Welcome, {userName}!</Text>
          <Switch
            value={switched}
            onValueChange={toggleSwitched}
            style={styles.switch}
          />
        </View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.category}
          renderItem={({ item }) => (
            <View style={styles.categoryContainer}>
              <Text style={styles.category}>{item.category}</Text>
              <FlatList
                data={item.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Card product={item} onAddToFavorites={handleAddToFavorites} />}
              />
            </View>
          )}
        />
        <View style={styles.logoutButtonContainer}>
          <Button title="Log Out" onPress={handleLogout} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  switch: {
    marginRight: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  categoryContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  category: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  logoutButtonContainer: {
    position: 'absolute',
    bottom: 20,
  },
});

export default ProductPage;
