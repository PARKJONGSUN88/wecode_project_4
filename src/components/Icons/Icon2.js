import React from "react";
import { DiApple } from "react-icons/di";
import { IconContext } from "react-icons";

const Icon2 = () => {
  return (
    <IconContext.Provider
      value={{
        size: "70%",
        color: "red",
        style: { cursor: "pointer" }
      }}
    >
      <DiApple />
    </IconContext.Provider>
  );
};

export default Icon2;
