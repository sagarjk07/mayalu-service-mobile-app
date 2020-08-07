import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' size={35} color={'white'} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ListItemDeleteAction;
