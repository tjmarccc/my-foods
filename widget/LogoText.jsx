import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../constants/styles";

const LogoText = () => {
  return (
    <View style={styles.logo}>
      <Image source={require("../assets/images/myfoods.png")} />
    </View>
  );
};

export default LogoText;
