import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import expoPushTokensApi from "../api/expoPushToken";

// Notifications.setNotificationHandler({
//   handleNotification: async () => {
//     return {
//       shouldShowAlert: true,
//       shouldPlaySound: true,
//       shouldSetBadge: true,
//     };
//   }
// });

const useNotifications = (notificationListener?: any) => {
  useEffect(() => {
    registerForPushNotifications();
    // in some places we dont need to do anything when receive a notification
    if(notificationListener) Notifications.addPushTokenListener(notificationListener);
  }, []); // call only once
  
  const registerForPushNotifications = async () => {
    try {
      // const permission = await Permisions.askAsync(Permisions.NOTIFICATIONS);
      const permission = await Notifications.requestPermissionsAsync()
      if(!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data); // no need to await, let it happen in background
    } catch (error) {
      console.log('Error getting a push token', error)
    }
  }
}

export default useNotifications;