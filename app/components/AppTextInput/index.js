import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
// import colors from '../../config/colors';
import defaultStyles from '../../config/styles';

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
      <TextInput {...otherProps} style={defaultStyles.text} />
    </View>
  )
}

export default AppTextInput;
