import { useEffect } from 'react';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import navigation from '../navigation/rootNavigation';
import pushTokenApi from '../api/pushTokens';

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();
    if (notificationListener)
      Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotification = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const pushToken = await Notifications.getExpoPushTokenAsync();
      pushTokenApi.register(pushToken);
    } catch (error) {
      console.log('Error getting a push token', error);
    }
  }

}
