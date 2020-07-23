import React from "react";
import { Image, StyleSheet } from "react-native";

const img = require("./img/youtube.png");

const youtube = () => {
  return (
    <>
      <Image style={styles.iconStyle} resizeMode="contain" source={img} />
    </>
  );
};

export default youtube;

const styles = StyleSheet.create({
  iconStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
