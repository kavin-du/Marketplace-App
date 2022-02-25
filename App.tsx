import React from "react";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  const handlePress = () => console.log("button pressed");

  // return <WelcomeScreen />;
  // return <ListingScreen />
  return (
    <Screen>
      <AppPicker placeholder="Category" icon='apps'></AppPicker>
      <AppTextInput placeholder='Email' icon='email'/>
    </Screen>
  );

}
