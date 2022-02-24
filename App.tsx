import React from "react";
import {
  StyleSheet, Text, Image, View, StatusBar,
  TouchableHighlight,
  Button,
  Alert,
  SafeAreaView,
  Platform,
  TextInput,

} from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const handlePress = () => console.log("button pressed");

  // return <WelcomeScreen />;
  // return <ListingScreen />
  return (
    <Screen>
      <AppTextInput icon='email'/>
      {/* <TextInput /> */}
    </Screen>
  );

}

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
