import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from "../constants/StatusBar";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../widget/Input";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MenuCard from "../components/MenuCard";
import { useSelector } from "react-redux";

const menuData = [
  {
    id: 1,
    img: "https://www.verywellfit.com/thmb/BrdrHtuMT1hNWP8s0EZIZ36UrdY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/summermeals-150b10ac132446b1becac4a463ee6a25.jpg",
    meal: "Chicken Rice Brawl",
    price: 10.00,
  },
  {
    id: 2,
    img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/roast_chicken_for_one_41998_16x9.jpg",
    meal: "Grilled Chicken",
    price: 15.00,
  },
  {
    id: 3,
    img: "https://wtop.com/wp-content/uploads/2022/08/080422_mighty-Meals.jpg",
    meal: "Barbeque",
    price: 20.00,
  },
  {
    id: 4,
    img: "https://wtop.com/wp-content/uploads/2022/08/080422_mighty-Meals.jpg",
    meal: "Egusi",
    price: 30,
  },
  {
    id: 5,
    img: "https://wtop.com/wp-content/uploads/2022/08/080422_mighty-Meals.jpg",
    meal: "Egusi",
    price: 30,
  },
  {
    id: 6,
    img: "https://wtop.com/wp-content/uploads/2022/08/080422_mighty-Meals.jpg",
    meal: "Egusi",
    price: 30,
  },
  {
    id: 7,
    img: "https://wtop.com/wp-content/uploads/2022/08/080422_mighty-Meals.jpg",
    meal: "Egusi",
    price: 30,
  },
  {
    id: 8,
    img: "https://wtop.com/wp-content/uploads/2022/08/080422_mighty-Meals.jpg",
    meal: "Egusi",
    price: 30,
  },
];

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  

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
        <View style={styles.rowGap}>
          <Pressable onPress={() => navigation.navigate("Sidebar")}>
            <Image source={require("../assets/images/menu.png")} />
          </Pressable>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "",
            }}
          >
            <MaterialCommunityIcons
              name="map-marker-radius"
              size={14}
              color="#FFA500"
            />

            <Text>Lagos,Nigeria</Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={18}
              color="#FFA500"
            />
          </View>

          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.profilePic}
              source={require("../assets/images/unsplash_gqX0rPCmdiU.png")}
            />
          </Pressable>
        </View>

        <View style={styles.inputCon}>
          <Input
            backgroundColor={COLORS.light.white}
            borderColor={"black"}
            borderWidth={1}
            placeholder={"Search..."}
          />
          <View style={styles.searchCon}>
            <Ionicons name="search" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={[styles.bigText, { color: "black" }]}>
            Hello {currentUser.username}
          </Text>
          <Text>choose your delicious meal</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.menucardCon}>
            {menuData.map((item) => (
              <MenuCard
                key={item.id}
                items={item}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
