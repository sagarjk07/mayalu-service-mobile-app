import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      {/* <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require('../assets/background.jpg')}
      > */}
      <View style={styles.background}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo-red.png')} />
          <Text style={styles.tagline}>{'Committed Towards Your Services'}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title={'Login'} onPress={() => navigation.navigate(routes.LOGIN)} />
          <AppButton title={'Register'} onPress={() => navigation.navigate(routes.REGISTER)} color={'secondary'} />
        </View>
      </View>
      {/* </ImageBackground> */}
    </Screen>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: '100%',
    height: 100
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  tagline: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 20
  }
})

export default WelcomeScreen;
