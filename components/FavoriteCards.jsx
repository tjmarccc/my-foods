import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoriteRedux";

const FavoriteCards = ({ items }) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleRemoveFavorite = (favorite) => {
    dispatch(removeFavorite(favorite));
  };

  return (
    <View style={styles.foodMenu}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Ionicons name="radio-button-on-sharp" size={24} color="#FFA500" />
        </Pressable>

        <Pressable onPress={() => handleRemoveFavorite(items)}>
          <Ionicons name="heart" size={22} color={"#D20062"} />
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
  );
};

export default FavoriteCards;
