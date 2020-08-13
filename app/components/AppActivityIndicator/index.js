import React from 'react';
import LottieView from 'lottie-react-native';

function AppActivityIndicator({ visiable = false }) {
  if (!visiable) return null;
  return (
    <LottieView autoPlay loop source={require('../../assets/lottieAnimation/loader.json')} />
  )
}

export default AppActivityIndicator;
