import React, { useState } from "react";
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser]  = useState();
  const[isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user:any = await authStorage.getUser();
    if(user) setUser(user);
  }

  // useEffect(() => {
  //   restoreUser();
  // }, []); // call only once

  if(!isReady) {
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={(e) => console.log(e)} />;
  }

  // context passed down to component tree
  // context only for small object that doesn't change much
  // otherwise use redux
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );

}
