import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FocusedStatusBar from "../constants/StatusBar";
import { styles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import ErrorRed from "./ErrorRed";
import { COLORS } from "../constants/Colors";
import Button from "../widget/Button";

const Success = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: COLORS.light.white }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.white}
        barStyle={"dark-content"}
      />

      <View style={styles.container}>
        <View style={styles.greenCon}>
          <Octicons name="check-circle-fill" size={110} color="#05C669" />
        </View>

        <View
          style={{
            marginTop: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={[styles.smallText, { color: "black" }]}>
            Your order has been confirmed.
          </Text>
        </View>

        <View style={{ marginTop: 120 }}>
          <Button
            buttonColor={COLORS.light.lightGreen}
            textColor={COLORS.light.white}
            buttonText={"Continue"}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Success;
