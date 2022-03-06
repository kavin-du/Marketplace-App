import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { defaultStyles } from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

type PickerProps = {
  icon: any,
  items: [any],
  onSelectedItem: (x:any) => void,
  placeholder: string,
  selectedItem: any,
  width?: any,
};
export default function AppPicker(props: PickerProps) {

  const { icon, items, onSelectedItem, placeholder, selectedItem, width='100%' } = props; // sorting props

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={[styles.container, {width}]}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
          {selectedItem ? 
            (<AppText style={styles.text}>{selectedItem.label}</AppText>) : 
            (<AppText style={styles.placeholder}>{placeholder}</AppText>)
          }
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
                onPress={() => {
                  setShowModal(false);
                  onSelectedItem(item)
                }}
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
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1, // take the available free space
  },
  text: {
    flex: 1,
  }
})