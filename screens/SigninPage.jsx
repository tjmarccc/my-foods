import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../constants/styles";
import Input from "../widget/Input";
import { COLORS } from "../constants/Colors";
import Button from "../widget/Button";
import LogoText from "../widget/LogoText";
import FocusedStatusBar from "../constants/StatusBar";
import CustomCheckbox from "../widget/Checkbox";
import { useNavigation } from "@react-navigation/native";
import { userLogin } from "../redux/userRedux";
import { useDispatch } from "react-redux";

const SigninPage = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const userData = {
    username,
    password,
  };

  const handleLogin = () => {
    if (username === "") {
      Alert.alert("Please enter your username to continue");
    } else if (password === "") {
      Alert.alert("Please enter your password to continue");
    } else {
      setIsLoading(true);

      setTimeout(() => {
        dispatch(userLogin(userData));
        setIsLoading(false);
      }, 3000);
    }
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
        <View style={styles.logoCon}>
          <LogoText />
        </View>

        <View style={styles.regCon}>
          <Text style={styles.smallText}>Username</Text>
          <View style={{ textColor: "black" }}>
            <Input
              backgroundColor={COLORS.light.white}
              onChangeText={(value) => setUserName(value.trim())}
            />
          </View>
        </View>
        <View style={styles.regCon}>
          <Text style={styles.smallText}>Password</Text>

          <Input
            backgroundColor={COLORS.light.white}
            onChangeText={(value) => setPassword(value.trim())}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.passwordCon}>
          <View style={{ flexDirection: "row" }}>
            <CustomCheckbox />
            <Text style={{ paddingHorizontal: 5, color: "white" }}>
              Remember me
            </Text>
          </View>
          <Text style={[styles.smallText, { color: COLORS.light.black }]}>
            Forgot Password?
          </Text>
        </View>

        <View
          style={{ paddingBottom: 30, width: "100%", alignItems: "center" }}
        >
          {isLoading ? (
            <ActivityIndicator color={"white"} size={"large"} />
          ) : (
            <Button
              buttonColor={COLORS.light.black}
              textColor={COLORS.light.white}
              buttonText={"Sign In"}
              onPress={handleLogin}
            />
          )}
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.line} />
          <View>
            <Text style={{ width: 50, textAlign: "center" }}>or</Text>
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.signinImgCon}>
          <Image
            source={require("../assets/images/google.png")}
            style={styles.signinImg}
            resizeMode="cover"
          />

          <Button
            buttonColor={COLORS.light.white}
            textColor={COLORS.light.black}
            buttonText={"Sign in with Google"}
            onPress={() => navigation.navigate("Home")}
          />
        </View>

        <View style={styles.signinImgCon}>
          <Image
            source={require("../assets/images/facebook.png")}
            style={styles.signinImg}
            resizeMode="cover"
            onPress={() => navigation.navigate("Home")}
          />

          <Button
            buttonColor={COLORS.light.white}
            textColor={COLORS.light.black}
            buttonText={"Sign in with Facebook"}
            onPress={() => navigation.navigate("Home")}
          />
        </View>

        <View style={styles.signinLink}>
          <Text style={{ color: COLORS.light.white }}>
            Don't have an account?
          </Text>
          <Pressable onPress={() => navigation.navigate("SignupPage")}>
            <Text style={{ color: COLORS.light.black }}> Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SigninPage;
