import { View, Text, Pressable, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../redux/favoriteRedux";
import { addCart } from "../redux/cartRedux";

const MenuCard = ({ items, dataSet, setDataSet }) => {
  const { favorites } = useSelector((state) => state.favorites);
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [heartColor, setHeartColor] = useState("#EEEEEE");
  const [plusColor, setPlusColor] = useState("#EEEEEE");

  const handleAddFavorite = (favorite) => {
    dispatch(addFavorite(favorite));
  };

  const handleAddCart = (cart) => {
    dispatch(addCart(cart));
  };

  let favoriteIds = [];
  useEffect(() => {
    favorites?.forEach((fav) => favoriteIds.push(fav.id));

    favoriteIds.includes(items.id)
      ? setHeartColor("#D20062")
      : setHeartColor("#EEEEEE");
  }, [favorites]);

  let cartIds = [];
  useEffect(() => {
    cart?.forEach((car) => cartIds.push(car.id));

    cartIds.includes(items.id)
      ? setPlusColor("green")
      : setPlusColor("#EEEEEE");
  }, [cart]);

  return (
    <Pressable
      onPress={() => navigation.navigate("Details")}
      style={styles.foodMenu}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Pressable>
          <Ionicons name="radio-button-on-sharp" size={24} color="#FFA500" />
        </Pressable>
        <Pressable onPress={() => handleAddFavorite(items)}>
          <Ionicons name="heart" size={22} color={heartColor} />
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

        <Pressable onPress={() => handleAddCart(items)}>
          <FontAwesome name="plus-circle" size={24} color={plusColor} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default MenuCard;