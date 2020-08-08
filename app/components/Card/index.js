import React from 'react';
import { View, Image } from 'react-native';

import AppText from '../AppText';

import styles from './styles';

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={image}
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  )
}

export default Card;
