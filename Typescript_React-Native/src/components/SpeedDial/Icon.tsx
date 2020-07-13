import React from "react";
import { Image, StyleSheet } from "react-native";

const img = require("../Icons/html.png");

const Icon = () => {
  return (
    <>
      <Image style={styles.iconStyle} source={img} />
    </>
  );
};

export default Icon;

const styles = StyleSheet.create({
  iconStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
