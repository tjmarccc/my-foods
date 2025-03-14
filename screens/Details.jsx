import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from "../constants/StatusBar";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const Details = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const handleCount = (sign) => {
    switch (sign) {
      case "+":
        setCount((prevState) => prevState + 1);
        break;

      case "-":
        if (count > 1) {
          setCount((prevState) => prevState - 1);
        }
        break;

      default:
        setCount(count);
        break;
    }
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: COLORS.light.white }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.white}
        barStyle={"dark-content"}
      />

      <View style={styles.container}>
        <Pressable style={styles.upperNav}>
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <AntDesign
            name="right"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Cart")}
          />
        </Pressable>

        <View style={{ paddingVertical: 20, width: "100%" }}>
          <Image
            source={require("../assets/images/chickenricebowl.png")}
            resizeMode="cover"
            style={{ width: "100%", borderRadius: 10 }}
          />
        </View>

        <Text style={{ paddingVertical: 10 }}>Chicken Rice Bowl </Text>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: 20,
          }}
        >
          <Text style={styles.bigText2}>$15.00</Text>
        </View>

        <Text style={styles.bigText3}>Recipie</Text>

        <Text style={{ paddingVertical: 10, fontSize: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, more...
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/images/map-pin.png")}
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={styles.mediumText2}>Location</Text>
            <Text>Somewhere in Lagos</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/images/stopwatch.png")}
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={styles.mediumText2}>Delivery time</Text>
            <Text>30 mins</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
