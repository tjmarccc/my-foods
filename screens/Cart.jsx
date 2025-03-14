import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from "../constants/StatusBar";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import CartCards from "../components/CartCards";
import Button from "../widget/Button";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const [total, setTotal] = useState(0);

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: COLORS.light.white }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.white}
        barStyle={"dark-content"}
      />

      <View style={[styles.container, { flex: 1 }]}>
        <View style={[styles.rowGap, { marginBottom: 16 }]}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Image source={require("../assets/images/menu.png")} />
          </Pressable>

          <Text style={[styles.bigText, { color: "black" }]}>Cart</Text>
          <Image
            style={styles.profilePic}
            source={require("../assets/images/unsplash_gqX0rPCmdiU.png")}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 5,
              justifyContent: "space-between",
              height: "auto",
            }}
          >
            {cart?.map((items) => (
              <CartCards key={items.id} items={items} setTotal={setTotal} />
            ))}
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ width: "40%" }}>
            <Button
              buttonColor={COLORS.light.primary}
              textColor={COLORS.light.white}
              buttonText={`Total: $${total}`}
              onPress={() => {}}
            />
          </View>

          <View style={{ width: "60%" }}>
            <Button
              buttonColor={COLORS.light.primary}
              textColor={COLORS.light.white}
              buttonText={"Proceed to Checkout"}
              onPress={() => navigation.navigate("Checkout", { total: total })}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
