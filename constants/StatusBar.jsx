import { StatusBar } from "react-native";
import React from "react";

const FocusedStatusBar = (props) => {
  return (
    <StatusBar backgroundColor={"white"} barStyle={"dark-content"} {...props} />
  );
};

export default FocusedStatusBar;
