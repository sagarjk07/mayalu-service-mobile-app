import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    position: 'absolute',
    zIndex: 1,
    opacity: 0.8
  }
});

export default styles;
