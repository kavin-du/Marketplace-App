import React from "react";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  const handlePress = () => console.log("button pressed");

  // return <WelcomeScreen />;
  // return <ListingScreen />
  const categories: any = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Cameras', value: 3 },
  ];
  return (
    <Screen>
      <AppPicker items={categories} placeholder="Category" icon='apps'></AppPicker>
      <AppTextInput placeholder='Email' icon='email'/>
    </Screen>
  );

}
