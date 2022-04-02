import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {

  // const [imageUris, setImageUris] = useState<string[]>([]);

  // const handleAdd = (uri: string) => {
  //   setImageUris([...imageUris, uri]);
  // }

  // const handleRemove = (uri: string) => {
  //   setImageUris(imageUris.filter(imageUri => imageUri !== uri));
  // }

  // return <Screen>
  //   <ImageInputList
  //     imageUris={imageUris}
  //     onAddImage={handleAdd}
  //     onRemoveImage={handleRemove} />
  // </Screen>;

  return <ListingEditScreen />;

}
