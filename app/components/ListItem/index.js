import React from 'react';
import { View, Image } from 'react-native';

import AppText from '../AppText';

import styles from './styles';

function ListItem({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={image}
      />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  )
}

export default ListItem;
