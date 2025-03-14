import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import YelloLoader from "../screens/YelloLoader";
import Success from "../screens/Success";
import ErrorRed from "../screens/ErrorRed";
import Favorite from "../screens/Favorite";
import Sidebar from "../screens/Sidebar";
import Details from "../screens/Details";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";
import Profile from "../screens/Profile";
import PaymentConfirmation from "../screens/PaymentConfirmation";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="YelloLoader" component={YelloLoader} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="ErrorRed" component={ErrorRed} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen
        name="Sidebar"
        component={Sidebar}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="PaymentConfirmation"
        component={PaymentConfirmation}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
