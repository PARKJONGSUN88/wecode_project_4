import React from "react";
import { DiPython } from "react-icons/di";
import { IconContext } from "react-icons";

const Icon5 = () => {
  return (
    <IconContext.Provider
      value={{
        size: "70%",
        color: "blue",
        style: { cursor: "pointer" }
      }}
    >
      <DiPython />
    </IconContext.Provider>
  );
};

export default Icon5;
