import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import FocusedStatusBar from "../constants/StatusBar";
import { Switch } from "react-native";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [Enabled, setEnabled] = useState(false);
  const [isEnable, setIsEnable] = useState(false);
  const [isEnable1, setIsEnable1] = useState(false);

  const { currentUser } = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ScrollView
      style={[styles.safeArea, { backgroundColor: COLORS.light.primary }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.primary}
        barStyle={"light-content"}
      />

      <View style={styles.container}>
        <View style={styles.imageCon}>
          <Image
            source={require("../assets/images/profilepicture.png")}
            style={styles.imageMain}
          />
        </View>

        <View style={styles.profileTextCon}>
          <Text style={styles.mediumText}>{currentUser.username}</Text>
          <Text style={styles.smallText}>USER CUSTOMER</Text>
        </View>

        <View style={styles.passwordCase}>
          <Text>Change Password</Text>
        </View>

        <View style={styles.profletextCon}>
          <Text style={styles.smallText}>Biometric Login</Text>
          <Switch
            trackColor={{ false: "#767577", true: COLORS.light.success }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            value={isEnabled}
            onValueChange={setIsEnabled}
          />
        </View>

        <View style={styles.profletextCon}>
          <Text style={styles.smallText}>Biometric Transactions</Text>
          <Switch
            trackColor={{ false: "#767577", true: COLORS.light.success }}
            thumbColor={Enabled ? "#f4f3f4" : "#f4f3f4"}
            value={Enabled}
            onValueChange={setEnabled}
          />
        </View>

        <View style={styles.profletextCon}>
          <Text style={styles.smallText}>Transaction Limit</Text>
          <Switch
            trackColor={{ false: "#767577", true: COLORS.light.success }}
            thumbColor={isEnable ? "#f4f3f4" : "#f4f3f4"}
            value={isEnable}
            onValueChange={setIsEnable}
          />
        </View>

        <View style={styles.profletextCon}>
          <Text style={styles.smallText}>Theme</Text>
          <Switch
            trackColor={{ false: "#767577", true: COLORS.light.success }}
            thumbColor={isEnable1 ? "#f4f3f4" : "#f4f3f4"}
            value={isEnable1}
            onValueChange={setIsEnable1}
            onPress={() => dispatch(toggleTheme())} 
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
