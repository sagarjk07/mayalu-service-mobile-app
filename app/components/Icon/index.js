import React from 'react';
import { View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

function Icon({ name, size = 40, backgroundColor = '#000', iconColor = '#fff' }) {
  return (
    <View style={[styles.iconContainer, { width: size, height: size, borderRadius: size / 5, backgroundColor: backgroundColor }]}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  )
}

export default Icon;
