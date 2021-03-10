import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

interface Props {
  onPress: any;
  title: string;
}

const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.buttonStyle}
    >
      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "orange",
    width: wp("40%"),
    height: hp("6%"),
    borderRadius: wp("6%"),
    marginTop: hp("2%")
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: hp("4%")
  }
});

export default CustomButton;
