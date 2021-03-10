import * as React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import CustomButton from "./Components/CustomButton";
import GoogleButton from "./Components/GoogleButton";
import FacebookButton from "./Components/FacebookButton";
import WindowsButton from "./Components/WindowsButton";
import TwitterButton from "./Components/TwitterButton";
import WhatsappButton from "./Components/WhatsappButton";

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <View style={styles.viewStyle}>
          <View style={styles.headerInnerViewStyle}>
            <Image
              resizeMethod={"resize"}
              resizeMode={"contain"}
              source={require("./assets/icon.jpg")}
              style={styles.iconStyle}
            />
            <Text style={styles.headerTextStyle}>Sign Up</Text>
          </View>
        </View>
        <View style={styles.formViewStyle}>
          <Text>Please register your lesson</Text>
          <Text>account here</Text>
          <TextInput
            placeholder={"Email *"}
            value={""}
            style={styles.textInputStyle}
          />
          <TextInput
            placeholder={"Password *"}
            value={""}
            style={styles.textInputStyle}
          />
          <TextInput
            placeholder={"Confirm Password *"}
            value={""}
            style={styles.textInputStyle}
          />
          <CustomButton
            onPress={() => {}}
            title={"Sign up"}
          />
          <View style={styles.orViewStyle}>
            <View style={styles.lineStyle}>

            </View>
            <Text>  or  </Text>
            <View style={styles.lineStyle}>

            </View>
          </View>
          <View style={styles.headerInnerViewStyle}>
            <GoogleButton
              onPress={() => {}}
            />
            <FacebookButton
              onPress={() => {}}
            />
            <WindowsButton
              onPress={() => {}}
            />
            <TwitterButton
              onPress={() => {}}
            />
            <WhatsappButton
              onPress={() => {}}
            />
          </View>
          <View style={styles.footerViewStyle}>
            <Text style={styles.footerTextStyle}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.touchStyle}
            >
              <Text style={styles.buttonTextStyle}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create ({
  safeAreaViewStyle: {
    flex: 1,
    alignItems: "center"
  },
  viewStyle: {
    width: wp("100%"),
    height: hp("30%"),
    borderBottomLeftRadius: wp("10%"),
    borderBottomRightRadius: wp("10%"),
    backgroundColor: "#400099",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTextStyle: {
    color: "white",
    fontSize: hp("5%")
  },
  headerInnerViewStyle: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  iconStyle: {
    width: wp("13%"),
    height: hp("7%")
  },
  formViewStyle: {
    width: wp("80%"),
    height: hp("68%"),
    backgroundColor: "white",
    position: "absolute",
    marginTop: hp("20%"),
    alignItems: "center",
    justifyContent: "center"
  },
  textInputStyle: {
    width: wp("70%"),
    borderWidth: 1,
    fontSize: hp("3%"),
    marginTop: hp("2%")
  },
  orViewStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: hp("2%")
  },
  lineStyle: {
    borderBottomWidth: 1,
    width: wp("20%"),
    height: hp("1%")
  },
  footerViewStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: hp("1%")
  },
  footerTextStyle: {
    color: "blue"
  },
  touchStyle: {
    marginLeft: wp("2%")
  },
  buttonTextStyle: {
    color: "blue",
    textDecorationLine: "underline",
    fontWeight: "bold"
  }
});

export default App;
