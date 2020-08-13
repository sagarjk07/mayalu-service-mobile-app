import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Icon from '../Icon';
import AppText from '../AppText';

import styles from './styles';

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  )

}

export default CategoryPickerItem;
