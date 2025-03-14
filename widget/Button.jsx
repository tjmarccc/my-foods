import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "../constants/styles";

const Button = ({ buttonColor, textColor, buttonText, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor: buttonColor }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default Button;
