import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const itemWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  safeArea: { flex: 1 },

  container: { paddingHorizontal: 20, paddingVertical: 20 },

  button: {
    width: "100%",
    padding: 10,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: { color: COLORS.light.white, fontSize: 16 },

  input: {
    width: "100%",
    paddingHorizontal: 10,
    height: 40,
    color: COLORS.light.black,
    borderRadius: 8,
  },

  inputCon: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "center",
    flexDirection: "row",
  },

  rowGap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: { alignItems: "center", justifyContent: "center", width: "100%" },

  smallText: { color: COLORS.light.white, fontSize: 14, fontWeight: "400" },

  mediumText: { fontSize: 18, fontWeight: "600", color: COLORS.light.white },

  mediumText2: { fontSize: 18, fontWeight: "600", color: COLORS.light.black },

  bigText: { fontSize: itemWidth * 0.055, fontWeight: "800", color: COLORS.light.white },

  bigText2: { fontSize: 24, fontWeight: "800", color: COLORS.light.primary },

  bigText3: { fontSize: 24, fontWeight: "600", color: COLORS.light.black },

  checkBox: {
    backgroundColor: "white",
    borderRadius: 1,
  },

  logoCon: {
    paddingTop: 100,
    paddingBottom: 50,
  },

  regCon: {
    paddingVertical: 10,
  },

  passwordCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 35,
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },

  signinImgCon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  searchCon: {
    right: 30,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  signinImg: {
    height: 23,
    width: 23,
    position: "absolute",
    zIndex: 1,
    left: 30,
  },

  signinLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  profilePic: {
    borderRadius: 25,
    height: 40,
    width: 40,
  },
  foodPic: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  foodContainer: {
    height: 120,
    width: 120,
    borderRadius: 100,
    borderColor: "#FFA500",
    borderWidth: 3,
    alignSelf: "center",
    justifyContent: "center",
  },

  menucardCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    justifyContent: "space-between",
    height: "auto",
  },
  
  foodMenu: {
    width: itemWidth * 0.44,
    height: itemHeight * 0.27,
    borderRadius: 20,
    borderColor: "#EEEEEE",
    borderWidth: 2,
    padding: 12,
    justifyContent: "center",
    marginBottom: 7,
    paddingBottom: 20,
    paddingTop: 20,
  },
  greenCon: {
    alignItems: "center",
    height: 165,
    width: 165,
    borderWidth: 10,
    borderColor: "#05C669",
    borderRadius: 90,
    justifyContent: "center",
    marginTop: 250,
    left: "25%",
  },

  moneyCon: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  numberCon: {
    height: "100%",
    width: 50,
    backgroundColor: "lightgray",
    borderRadius: 20,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  upperNav: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 15,
  },

  deliveryCon: {
    flexWrap: "wrap",
    width: 200,
    height: 50,
    flexDirection: "row",
  },

  checkoutCon: {
    height: 100,
    width: 400,
    backgroundColor: "rgba(245, 245, 245, 1)",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
    elevation: 5,
  },

  checkoutCon1: {
    height: "auto",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 20,
    elevation: 2,
    marginVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },

  checkoutCon2: {
    height: 70,
    width: 380,
    paddingHorizontal: 30,
    elevation: 5,
    marginVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingVertical: 15,
  },

  imageCon: {
    height: 100,
    width: 100,
    marginHorizontal: 115,
    marginTop: 50,
    borderRadius: 50,
    overflow: "hidden",
  },

  imageMain: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },

  profileTextCon: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
  },

  sidebarContainer: {
    flex: 1,
    backgroundColor: COLORS.light.primary,
    padding: 20,
  },

  passwordCase: {
    backgroundColor: "white",
    width: 200,
    height: 40,
    justifyContent: "center",
    paddingLeft: 25,
    marginLeft: -25,
    borderRadius: 10,
  },

  profletextCon: {
    flexDirection: "row",
    paddingTop: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },

  paymentCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },

  payConText: {
    backgroundColor: " rgba(245, 245, 245, 1)",
    marginBottom: 10,
  },

  sidepicCon: {
    height: 40,
    width: 40,
    borderRadius: 90,
    alignSelf: "center",
  },

  imageMain: {
    height: "100%",
    width: "100%",
    borderRadius: 90,
  },

  draw: {
    height: 1,
    backgroundColor: "white",
    marginVertical: 20,
  },

  sidebarCon: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  moneyNum: {
    alignItems: "center",
    gap: 10,
    paddingLeft: 45,
    // alignSelf: "center",
  

  },

  btnQtyCon: {
    // borderWidth: 1,
    // borderColor: "#FFA500",
    width: 30,
    height: 55,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  totalCon: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderRadius: 8,
    borderBlockColor: "#FFA500"
  },

  priceCon: {
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 8,
    borderBlockColor: "#FFA500",
    alignItems: "center",
    justifyContent: "center",
  },
});
