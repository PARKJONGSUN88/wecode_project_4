import React from "react";
import { Image, StyleSheet } from "react-native";

const img = require("./star2.png");

const Icon2 = () => {
  return (
    <>
      <Image style={styles.iconStyle} source={img} />
    </>
  );
};

export default Icon2;

const styles = StyleSheet.create({
  iconStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
