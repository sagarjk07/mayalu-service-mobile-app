import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import { Image } from 'react-native-expo-image-cache';
import AppText from '../AppText';

import styles from './styles';

function Card({ title, subtitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          tint={'light'}
          uri={imageUrl}
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
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
