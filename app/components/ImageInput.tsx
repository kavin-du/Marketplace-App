import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../config/colors';

export default function ImageInput({ imageUri, onChangeImage }: { imageUri?: string, onChangeImage: (val: string) => void }) {
  
  useEffect(() => {
    requestPermission()
  }, []); // empty array means no dependants, call only once

  const requestPermission = async () => {
    // can pass multiple permissions
    // const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION_FOREGROUND);
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permissions to access the library');
  }

  const handlePress = () => {
    if(!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      { text: 'Yes', onPress: () => onChangeImage('') },
      { text: 'No' },
    ]);
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if(!result.cancelled) onChangeImage(result.uri);

    } catch (error) {
      console.log('Error reading an image', error);
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ?
          <Image source={{ uri: imageUri }} style={styles.image} />
          : <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />
        }
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  image: {
    height: '100%', // to fill the container
    width: '100%', // to fill the container
  }
});