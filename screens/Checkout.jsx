import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import FocusedStatusBar from "../constants/StatusBar";
import { AntDesign } from "@expo/vector-icons";
import Button from "../widget/Button";

const Checkout = ({route}) => {
  const navigation = useNavigation();

  const {total} = route.params

  console.log(total)

  return (
    <ScrollView
      style={[styles.safeArea, { backgroundColor: COLORS.light.white }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.white}
        barStyle={"dark-content"}
      />
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name="left"
            size={20}
            color="black"
            onPress={() => navigation.navigate("Cart")}
          />
          <Text style={{ paddingHorizontal: 20, color: "gray" }}>CHECKOUT</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
        <Image source={require("../assets/images/goodmark.png")} />
        <Text style={{ color: "gray", paddingHorizontal: 10 }}>
          BOOKING ORDER
        </Text>
      </View>

      <View style={styles.checkoutCon}>
        <Text style={{ fontWeight: "700", paddingBottom: 10 }}>
          Congratulations!
        </Text>
        <Text>Your order has been successfully booked.</Text>
        <Text>Order ID: CZ-8674AR</Text>
      </View>

      <View style={styles.checkoutCon1}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ paddingHorizontal: 5, fontWeight: "600" }}>
            1. ADDRESS DETAILS
          </Text>
          <Text style={{ color: COLORS.light.primary, fontWeight: "600" }}>
            CHANGE
          </Text>
        </View>

        <View style={{ paddingHorizontal: 25 }}>
          <Text style={{ paddingBottom: 5, fontWeight: "600" }}>
            Princewill Czar
          </Text>
          <Text>Ikeja, Lagos</Text>
          <Text>+2348056500662</Text>
        </View>
      </View>

      <View style={styles.checkoutCon1}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ paddingHorizontal: 5, fontWeight: "600" }}>
            2. DELIVERY METHOD
          </Text>
          <Text style={{ color: COLORS.light.primary, fontWeight: "600" }}>
            CHANGE
          </Text>
        </View>

        <View style={{ paddingHorizontal: 25 }}>
          <Text style={{ paddingBottom: 5, fontWeight: "600" }}>
            Door Delivery
          </Text>
          <Text>Ikeja, Lagos</Text>
          <Text>+2348056500662</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
        <Image source={require("../assets/images/goodmark.png")} />
        <Text>PAYMENT SUMMARY</Text>
      </View>

      <View style={styles.checkoutCon1}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "600" }}>SUBTOTAL</Text>
          <Text style={{ color: COLORS.light.primary, fontWeight: "600" }}>
            ${total}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 30,
          }}
        >
          <Text style={{ fontWeight: "600" }}>TOTAL</Text>
          <Text style={{ color: COLORS.light.black, fontWeight: "600" }}>
          ${total}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
        <Image source={require("../assets/images/goodmark.png")} />
        <Text>PAY WITH WALLET CREDIT</Text>
      </View>

      <View style={styles.checkoutCon1}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "600" }}>SUBTOTAL</Text>
          <Text style={{ color: COLORS.light.primary, fontWeight: "600" }}>
            NGN 300, 000.00
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text>Available amount</Text>
          <Text>NGN 170, 000.00</Text>
        </View>
      </View>
      <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
        <Button
          buttonColor={COLORS.light.primary}
          textColor={COLORS.light.white}
          buttonText={"PROCEED"}
          onPress={() => navigation.navigate("PaymentConfirmation")}
        />
      </View>
    </ScrollView>
  );
};

export default Checkout;
