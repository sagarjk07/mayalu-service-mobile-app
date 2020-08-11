import { StyleSheet, Platform } from 'react-native';

// import colors from '../../config/colors';
import defaultStyles from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: defaultStyles.colors.dark,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  }
});

export default styles;
