import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';

import Screen from '../components/Screen';

import colors from '../config/colors';

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;

function AboutUsScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/mayaluservice.jpg')} />
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingVertical: 10 }}>Service Charges/Moving Rate (minimum 2 hour)</Text>
        <Text style={{ fontSize: 14, paddingBottom: 10 }}>*1 man and van $60/hr</Text>
        <Text style={{ fontSize: 14, paddingBottom: 10 }}>*2 man and van $85/hr</Text>
        <Text style={{ fontSize: 14, paddingBottom: 10 }}>*Interstate removal $1 per km</Text>
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingVertical: 10 }}>Who are we?</Text>
        <Text style={{ fontSize: 14, paddingBottom: 10 }}>We are professional Removal company based on Sydney including interstate Removals . We do Buy and Sell Second hand Household stuff</Text>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 6
  },
  imageContainer: {
    width: imageWidth,
    height: imageHeight,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  screen: {
    backgroundColor: colors.light
  }
});

export default AboutUsScreen;
