import React from 'react';
import { Image, StyleSheet, View, StatusBar } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' size={30} color='white' />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' size={30} color='white' />
      </View>
      <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 20,
    left: 20
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  image: {
    height: '100%',
    width: '100%'
  }
})

export default ViewImageScreen;
