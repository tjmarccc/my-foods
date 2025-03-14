import { View, Text, Image, Pressable, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FocusedStatusBar from "../constants/StatusBar";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import Success from "./Success";

const YelloLoader = ({ route }) => {
  const { status } = route.params;

  const navigation = useNavigation();
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    rotateAnimation.start();
  }, [rotation]);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    setTimeout(() => {
      if (status === "success") {
        navigation.navigate("Success");
      } else if (status === "failed") {
        navigation.navigate("ErrorRed");
      }
    }, 5000);
  }, []);

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: COLORS.light.white }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.white}
        barStyle={"dark-content"}
      />

      <View style={[styles.container, { height: "100%" }]}>
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={22} color="black" />
          </Pressable>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "65%",
          }}
        >
          <Animated.View
            style={{ transform: [{ rotate }], width: 196, height: 196 }}
          >
            <Image
              style={{ height: "100%", width: "100%" }}
              source={require("../assets/images/Component 1.png")}
            />
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default YelloLoader;
