import React from "react";
import LoginPage from "../screens/LoginPage";
import SigninPage from "../screens/SigninPage";
import SignupPage from "../screens/SignupPage";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SigninPage" component={SigninPage} />
      <Stack.Screen name="SignupPage" component={SignupPage} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
