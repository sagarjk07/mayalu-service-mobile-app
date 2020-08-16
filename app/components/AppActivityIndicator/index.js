import React from 'react';
import { View } from 'react-native';

import LottieView from 'lottie-react-native';

import styles from './styles';

function AppActivityIndicator({ visiable = false }) {
  if (!visiable) return null;
  return (
    <View style={styles.overlay}>
      <LottieView autoPlay loop source={require('../../assets/lottieAnimation/loader.json')} />
    </View>
  )
}

export default AppActivityIndicator;
