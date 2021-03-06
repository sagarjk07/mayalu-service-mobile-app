import { StyleSheet } from 'react-native';

import colors from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.white

  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  subtitle: {
    color: colors.medium
  },
  title: {
    fontWeight: '500',
  },

});

export default styles;
