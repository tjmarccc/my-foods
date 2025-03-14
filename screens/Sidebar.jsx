import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import FocusedStatusBar from "../constants/StatusBar";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";

const Sidebar = () => {
  const navigation = useNavigation();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: COLORS.light.primary }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.primary}
        barStyle={"light-content"}
      />
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <View style={styles.sidepicCon}>
            <Image
              source={require("../assets/images/profilepicture.png")}
              style={styles.imageMain}
              resizeMethod="contain"
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.mediumText}>{currentUser.username}</Text>
            <Text style={styles.smallText}>User Customer</Text>
          </View>
        </View>

        <View style={styles.draw}></View>

        <Pressable
          style={styles.sidebarCon}
          onPress={() => navigation.navigate("Home")}
        >
          <Foundation name="home" size={20} color="white" />
          <Text style={[styles.smallText, { paddingHorizontal: 20 }]}>
            Home
          </Text>
        </Pressable>

        <Pressable
          style={styles.sidebarCon}
          onPress={() => navigation.navigate("Profile")}
        >
          <Entypo name="user" size={20} color="white" />
          <Text style={[styles.smallText, { paddingHorizontal: 15 }]}>
            Profile
          </Text>
        </Pressable>

        <Pressable
          style={styles.sidebarCon}
          onPress={() => navigation.navigate("Favorite")}
        >
          <MaterialIcons name="favorite" size={20} color="white" />
          <Text style={[styles.smallText, { paddingHorizontal: 15 }]}>
            Favorites
          </Text>
        </Pressable>

        <Pressable
          style={styles.sidebarCon}
          onPress={() => navigation.navigate("Cart")}
        >
          <AntDesign name="shoppingcart" size={20} color="white" />
          <Text style={[styles.smallText, { paddingHorizontal: 15 }]}>
            Cart
          </Text>
        </Pressable>

        <Pressable
          style={styles.sidebarCon}
          onPress={() => {}}>
          <Ionicons name="notifications" size={20} color="white" />
          <Text style={[styles.smallText, { paddingHorizontal: 15 }]}>
            Notfications
          </Text>
        </Pressable>

        <View style={styles.draw}></View>

        <Pressable
          style={styles.sidebarCon}
          onPress={() => {
            handleChosen();
          }}
        >
          <AntDesign name="tag" size={20} color="white" />
          <Text style={[styles.smallText, { paddingHorizontal: 15 }]}>
            Promotions
          </Text>
        </Pressable>

        <Pressable
          style={styles.sidebarCon}
          onPress={() => {}}>
          <Ionicons name="settings" size={20} color="white" />
          <Text style={[styles.smallText, { paddingHorizontal: 15 }]}>
            Settings
          </Text>
        </Pressable>

        <Pressable
          style={styles.sidebarCon}
          onPress={() => {}}>
          <FontAwesome5 name="headphones" size={20} color="white" />
          <Text style={[styles.smallText, { paddingHorizontal: 15 }]}>
            Help
          </Text>
        </Pressable>

        <View style={styles.draw}></View>

        <Pressable style={styles.sidebarCon} onPress={handleLogout}>
          <Entypo name="log-out" size={20} color="white" />
          <Text style={[styles.smallText, { paddingHorizontal: 15 }]}>
            Logout
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Sidebar;
