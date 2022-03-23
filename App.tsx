import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {

  const [imageUri, setImageUri] = useState('');


  // need to get users component
  // class components have componentDidMount, but 
  // function components do not have this, 
  // so we use useEffect with only once execution

  const requestPermission = async () => {
    // can pass multiple permissions
    // const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION_FOREGROUND);
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permissions to access the library');
  }


  // empty array means no dependants, only once executes
  useEffect(() => {
    requestPermission();
  }, []);


  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);

    } catch (error) {
      console.log('Error reading an image', error);
    }
  }

  return <Screen>
    <ImageInput
      imageUri={imageUri}
      onChangeImage={(uri) => setImageUri(uri)} />
  </Screen>;

}
