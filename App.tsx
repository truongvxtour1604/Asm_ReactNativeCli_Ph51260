import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './components/Splash';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import BottomTabs from './components/BottomTabs';
import ProductDetail from './components/ProductDetail';
import HomeFragment from './fragments/HomeFragment';
import Product from './components/Product';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="HomeFragment" component={HomeFragment} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


