import React, { useState } from 'react';
import { Text, TextInput, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../Screen';
import AppText from '../AppText';
import PickerItem from './PickerItem';

import styles from './styles';
import defaultStyles from '../../config/styles';

function AppPicker({ icon, placeholder, numberOfColumns = 1, width = '100%', items, selectedItem, onSelectItem, PickerItemComponent = PickerItem }) {
  const [modelVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
          {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}

          <MaterialCommunityIcons name={'chevron-down'} size={20} color={defaultStyles.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType='slide'>
        <Screen>
          <Button title={'Close'} onPress={() => setModalVisible(false)} />
          <FlatList
            numColumns={numberOfColumns}
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) =>
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            }
          />
        </Screen>
      </Modal>
    </>
  )
}

export default AppPicker;
