import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Icon2 = () => {
  return (
    <>
      <Image style={styles.iconStyle} source={require("./html.png")} />
    </>
  );
};

export default Icon2;

const styles = StyleSheet.create({
  iconStyle: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
});
