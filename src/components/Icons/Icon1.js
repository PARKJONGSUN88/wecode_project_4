import React from "react";
import { DiAndroid } from "react-icons/di";
import { IconContext } from "react-icons";

const Icon1 = () => {
  return (
    <IconContext.Provider
      value={{
        size: "70%",
        color: "black",
        style: { cursor: "pointer" },
      }}
    >
      <DiAndroid />
    </IconContext.Provider>
  );
};

export default Icon1;
