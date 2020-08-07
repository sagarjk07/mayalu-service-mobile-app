import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable'

import AppText from '../AppText';

import styles from './styles';
import colors from '../../config/colors';

function ListItem({ title, subtitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.light}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem;
