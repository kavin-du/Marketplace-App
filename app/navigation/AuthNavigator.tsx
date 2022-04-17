import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import routes from './routes';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
    <Stack.Screen name={routes.REGISTER} component={LoginScreen} />
  </Stack.Navigator>
);


export default AuthNavigator;