import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeCart } from "../redux/cartRedux";

const CartCards = ({ items, setTotal }) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleRemoveCart = (cart) => {
    dispatch(removeCart(cart));
    setTotal((prev) => prev - price);
  };

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(items?.price);

  const handleQty = (sign) => {
    switch (sign) {
      case "+":
        setQty((previsIncreased) => previsIncreased + 1);
        setTotal((prev) => prev + items?.price);
        break;

      case "-":
        if (qty > 1) {
          setQty((previsDecreased) => previsDecreased - 1);
          setTotal((prev) => prev - items?.price);
        }

      default:
        break;
    }
  };

  useEffect(() => {
    setPrice(items?.price * qty);
  }, [qty]);

  useEffect(() => {
    setTotal((prev) => prev + items?.price);
  }, []);

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.foodMenu}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Ionicons
                name="radio-button-on-sharp"
                size={24}
                color="#FFA500"
              />
            </Pressable>

            <Pressable onPress={() => handleRemoveCart(items)}>
              <FontAwesome name="plus-circle" size={24} color={"green"} />
            </Pressable>
          </View>

          <View style={styles.foodContainer}>
            <Image style={styles.foodPic} source={{ uri: items.img }} />
          </View>

          <Text>{items.meal} </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.bigText, { color: "#FFA500" }]}>
              {items.price}{" "}
            </Text>
          </View>
        </View>

        <View style={styles.moneyNum}>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 20,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Pressable style={styles.btnQtyCon} onPress={() => handleQty("-")}>
              <AntDesign name="minuscircle" size={25} color="black" />
            </Pressable>
            <Text style={[styles.mediumText, { color: "#FFA500" }]}>{qty}</Text>
            <Pressable style={styles.btnQtyCon} onPress={() => handleQty("+")}>
              <FontAwesome name="plus-circle" size={30} color="black" />
            </Pressable>
          </View>
          <View style={styles.priceCon}>
            <Text
              style={[
                styles.mediumText,
                { color: "Black", textAlign: "center" },
              ]}
            >
              ${price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCards;
