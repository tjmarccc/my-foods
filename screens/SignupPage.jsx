import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import FocusedStatusBar from "../constants/StatusBar";
import LogoText from "../widget/LogoText";
import Input from "../widget/Input";
import CustomCheckbox from "../widget/Checkbox";
import Button from "../widget/Button";

const SignupPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: COLORS.light.primary }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.primary}
        barStyle={"light-content"}
      />

      <View style={styles.container}>
        <View style={{ paddingTop: 100, paddingBottom: 30 }}>
          <LogoText />
        </View>

        <View>
          <Text style={styles.mediumText}>Create Account</Text>
          <Text style={styles.smallText}>Sign up to continue</Text>
        </View>

        <View style={{ paddingTop: 20, paddingBottom: 10 }}>
          <Text style={styles.smallText}>Email</Text>
          <Input backgroundColor={COLORS.light.white} />
        </View>

        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.smallText}>Phone Number</Text>
          <Input backgroundColor={COLORS.light.white} />
        </View>

        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.smallText}>Password</Text>
          <Input backgroundColor={COLORS.light.white} />
        </View>

        <View style={{ flexDirection: "row", paddingBottom: 10 }}>
          <CustomCheckbox />
          <Text
            style={{ paddingLeft: 5, color: COLORS.light.white, fontSize: 13 }}
          >
            must not be more than 8 characters
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <CustomCheckbox />
          <Text
            style={{ paddingLeft: 5, color: COLORS.light.white, fontSize: 13 }}
          >
            must contain numbers,letters and special characters
          </Text>
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text style={styles.smallText}>
            By registering below you agree to our terms and conditions
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <Button
            buttonColor={COLORS.light.black}
            textColor={COLORS.light.white}
            buttonText={"Register"}
            onPress={() => navigation.navigate("SigninPage")}
          />
        </View>

        <View style={styles.signinLink}>
          <Text style={{ color: COLORS.light.white }}>Already a member?</Text>
          <Pressable onPress={() => navigation.navigate("SigninPage")}>
            <Text style={{ color: COLORS.light.black }}> Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;
