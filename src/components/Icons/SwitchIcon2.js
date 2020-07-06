import React from "react";
import { IoIosHand } from "react-icons/io";
import { IconContext } from "react-icons";

const SwitchIcon2 = () => {
  return (
    <IconContext.Provider
      value={{
        size: "100%",
        color: "pink",
        style: { cursor: "pointer" },
      }}
    >
      <IoIosHand />
    </IconContext.Provider>
  );
};

export default SwitchIcon2;
