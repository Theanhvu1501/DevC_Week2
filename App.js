import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home/HomeScreen';
import Navigation from './Navigation/Navigation';


export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  number: {
    fontWeight: 'bold',
    fontSize: 35
  },
  title: {
    color: '#e0dede',
    fontSize: 18
  }

});
