//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import CarItem from './src/components/carItem';
import CarsList from './src/components/CarsList';
import Header from './src/components/Header';

// create a component
const MyComponent = () => {
  return (
    <View>
      <Header />
      <CarsList />
    </View>
  );
};

export default MyComponent;
