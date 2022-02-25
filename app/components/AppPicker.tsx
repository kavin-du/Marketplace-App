import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { defaultStyles } from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

type TextInputProps = {
  icon: any,
  placeholder: string,
  items: [any],
  [x: string]: any,
};
export default function AppPicker(props: TextInputProps) {

  const { icon, items, placeholder } = props; // sorting props

  const [showModal, setShowModal] = useState(false);
  console.log(items.forEach((i: any) => console.log(i.label)));

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setShowModal(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => console.log(item)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  }
})