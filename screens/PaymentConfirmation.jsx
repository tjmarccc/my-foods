import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useEffect } from "react";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import FocusedStatusBar from "../constants/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import Button from "../widget/Button";

const PaymentConfirmation = () => {
  const [selected, setSelected] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("success");

  const handleSelected = (value) => {
    setSelected(value);
  };

  const navigation = useNavigation();

  useEffect(() => {
    if (selected === 1 || selected === 2) {
      setPaymentStatus("success");
    } else if (selected === 3) {
      setPaymentStatus("failed");
    }
  }, [selected]);

  return (
    <ScrollView
      style={[styles.safeArea, { backgroundColor: COLORS.light.white }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.white}
        barStyle={"light-content"}
      />

      <View style={styles.container}>
        <View style={{ flexDirection: "row", paddingBottom: 20 }}>
          <AntDesign
            name="left"
            size={20}
            color="black"
            onPress={() => navigation.navigate("Checkout")}
          />
          <Text style={{ paddingHorizontal: 20, color: "gray" }}>
            PAYMENT OPTIONS
          </Text>
        </View>

        <Text style={{ color: COLORS.light.primary }}>
          SELECT PAYMENT METHOD
        </Text>

        <Pressable
          onPress={() => handleSelected(1)}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Fontisto
              name={selected === 1 ? "radio-btn-active" : "radio-btn-passive"}
              size={20}
              color={selected === 1 ? COLORS.light.primary : COLORS.light.black}
            />
            <Text style={{ paddingHorizontal: 15 }}>Quickteller</Text>
          </View>

          <AntDesign name="down" size={20} color="black" />
        </Pressable>

        <View style={styles.line}></View>

        <Pressable style={styles.paymentCon} onPress={() => handleSelected(2)}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 5,
            }}
          >
            <Fontisto
              name={selected === 2 ? "radio-btn-active" : "radio-btn-passive"}
              size={24}
              color={selected === 2 ? COLORS.light.primary : COLORS.light.black}
            />

            <Text style={{ paddingHorizontal: 15 }}>Credit/Debit card</Text>
          </View>

          <AntDesign name="up" size={20} color="black" />
        </Pressable>

        <View style={styles.payConText}>
          <Text style={{ paddingVertical: 5 }}>Card Holder</Text>
          <Text style={{ paddingVertical: 5 }}>PRINCEWILL CZAR</Text>
        </View>

        <View style={styles.payConText}>
          <Text style={{ paddingVertical: 5 }}>Card Number</Text>
          <Text style={{ paddingVertical: 5 }}>0805 6500 6626 5838</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={[styles.payConText, { width: 170 }]}>
            <Text>Expiry Date</Text>
            <Text>DD/MM/YYYY</Text>
          </View>

          <View style={[styles.payConText, { width: 120 }]}>
            <Text>CVC</Text>
            <Text>***</Text>
          </View>
        </View>

        <View style={styles.line}></View>

        <Pressable
          onPress={() => handleSelected(3)}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Fontisto
              name={selected === 3 ? "radio-btn-active" : "radio-btn-passive"}
              size={24}
              color={selected === 3 ? COLORS.light.primary : COLORS.light.black}
            />
            <Text style={{ paddingHorizontal: 10 }}>Not Banking</Text>
          </View>

          <AntDesign name="down" size={20} color="black" />
        </Pressable>

        <View style={{ paddingVertical: 70 }}>
          <Button
            buttonColor={COLORS.light.primary}
            textColor={COLORS.light.white}
            buttonText={"SEND FOR CONFIRMATION"}
            onPress={() =>
              navigation.navigate("YelloLoader", { status: paymentStatus })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentConfirmation;
