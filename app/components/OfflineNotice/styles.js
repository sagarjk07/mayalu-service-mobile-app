import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    top: Constants.statusBarHeight
  },
  text: {
    color: colors.white
  }
});

export default styles;
