import React from "react";
import { Image, StyleSheet } from "react-native";

const img = require("./star1.png");

const Icon1 = () => {
  return (
    <>
      <Image style={styles.iconStyle} source={img} />
    </>
  );
};

export default Icon1;

const styles = StyleSheet.create({
  iconStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
