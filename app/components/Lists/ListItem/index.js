import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable'

import AppText from '../../AppText';

import styles from './styles';
import colors from '../../../config/colors';

function ListItem({ title, subtitle, image, onPress, renderRightActions, IconComponent }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.light}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem;
