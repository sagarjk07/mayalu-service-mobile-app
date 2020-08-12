import React, { useEffect } from 'react';
import { View, Image, TouchableWithoutFeedback, Alert } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    // const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)

    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      Alert.alert('You need to enable permission to access the library');
    }
  }

  const handlePress = () => {
    if (!imageUri) selectImage();
    else Alert.alert(
      'Delete',
      'Are you sure you want to delete this image?',
      [
        {
          text: 'Yes',
          onPress: () => onChangeImage(null)
        },
        {
          text: 'No'
        }
      ]
    )
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log('error reading an image');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name={'camera'} size={40} color={colors.medium} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ImageInput
