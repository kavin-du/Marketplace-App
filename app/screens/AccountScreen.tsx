import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import { colors } from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  {
    title: 'my menu',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    },
    targetScreen: "Messages",
  },
];

export default function AccountScreen() {
  const navigation = useNavigation();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='kavindu'
          subtitle='kavindu@chamith.com'
          image={require('../assets/portrait.jpg')}
        />
      </View>

      <View style={styles.container}>
        <FlatList 
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => 
            <ListItem 
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen as string)}
            />
          }
        />
      </View>
      
      <ListItem 
        title='Log out'
        IconComponent={
          <Icon name='logout' backgroundColor='#ffe66d' />
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  }
})