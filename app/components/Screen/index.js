import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar style="dark" />
      <View style={[styles.view, style]}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1
  }
});

export default Screen;
