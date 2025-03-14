import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from "../constants/StatusBar";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoriteCards from "../components/FavoriteCards";
import { useSelector } from "react-redux";

const Favorite = () => {
  const { favorites } = useSelector((state) => state.favorites);

  // console.log(favorites);

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

          <Text style={[styles.bigText, { color: "black" }]}>Favorites</Text>
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
            {favorites?.map((items) => (
              <FavoriteCards key={items.id} items={items} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Favorite;
