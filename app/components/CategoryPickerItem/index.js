import React from 'react';
import { View } from 'react-native';

import Icon from '../Icon';

import styles from './styles';
import AppText from '../AppText';

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  )

}

export default CategoryPickerItem;
