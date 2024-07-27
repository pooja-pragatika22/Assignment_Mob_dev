import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GettingStarted from './components/GettingStarted';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';
import ProductPage from './components/ProductPage';
import FavoriteScreen from './components/FavoriteScreen';
import { FavoriteProvider } from './FavoriteContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Welcome') {
            iconName = 'home';
          } else if (route.name === 'Favorites') {
            iconName = 'heart';
          } else if (route.name === 'ProductPage') {
            iconName = 'cart';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
      <Tab.Screen name="ProductPage" component={ProductPage} />
    </Tab.Navigator>
  );
};

const LogoutScreen = ({ navigation }) => {
  React.useEffect(() => {
    navigation.navigate('GettingStarted');
  }, [navigation]);

  return null;
};

const DrawerNavigator = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'darkred',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerIcon: ({ color, size }) => (
          <Ionicons name="menu" size={size} color={color} />
        ),
      }}
    >
      <Drawer.Screen
        name="Tabs"
        component={TabNavigator}
        listeners={{
          drawerPress: (e) => {
            e.preventDefault();
            navigation.navigate('Welcome');
          },
        }}
        options={{ title: 'Welcome' }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{ title: 'Logout' }}
      />
      
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'darkred',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen
            name="GettingStarted"
            component={GettingStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
};

export default App;
