import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
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
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>}
          </View>
          <MaterialCommunityIcons name={'chevron-right'} size={25} color={colors.medium} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem;
