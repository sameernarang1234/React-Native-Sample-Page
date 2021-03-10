import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

interface Props {
  onPress: any;
}

const WindowsButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.buttonStyle}
    >
      <Image
        resizeMethod={"resize"}
        resizeMode={"contain"}
        source={require("../assets/windows.jpg")}
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
  buttonStyle: {
    marginTop: hp("2%")
  },
  imageStyle: {
    width: wp("10%"),
    height: hp("5%")
  }
});

export default WindowsButton;
