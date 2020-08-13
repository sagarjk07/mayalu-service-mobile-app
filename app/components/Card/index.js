import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import AppText from '../AppText';

import styles from './styles';

function Card({ title, subtitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Card;
