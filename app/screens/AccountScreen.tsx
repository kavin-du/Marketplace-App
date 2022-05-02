import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import { colors } from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../auth/useAuth';
import routes from '../navigation/routes';

const menuItems = [
  {
    title: 'my menu',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    },
    targetScreen: routes.MESSAGES, // change this to some other screen
  },
  {
    title: 'My messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    },
    targetScreen: routes.MESSAGES,
  },
];

export default function AccountScreen() {
  const navigation = useNavigation();

  const { user, logOut } = useAuth();


  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subtitle={user.email}
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
        onPress={logOut}
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