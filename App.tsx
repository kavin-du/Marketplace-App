import React, { RefObject, useState } from "react";
import AppLoading from 'expo-app-loading';

import * as Notifications from 'expo-notifications';

import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
import Screen from "./app/components/Screen";
import AppButton from "./app/components/AppButton";
import { NotificationRequestInput } from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    };
  }
});

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
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );

}



// export default function App() {

  // const showNotification = async () => {
  //   const notficationReq: NotificationRequestInput = {
  //     identifier: "myiden",
  //     content: {
  //       title: 'Congratulations',
  //       body: 'this is the notific body',
  //     },
  //     trigger: null,
  
  //   };
//     Notifications.scheduleNotificationAsync(notficationReq);
//   }
  
//   return (
//     <Screen>
//       <AppButton title="Tap me" onPress={showNotification} />
//     </Screen>
//   );

// }
