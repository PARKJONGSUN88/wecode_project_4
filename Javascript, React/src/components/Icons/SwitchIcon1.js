import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IconContext } from "react-icons";

const SwitchIcon1 = () => {
  return (
    <IconContext.Provider
      value={{
        size: "100%",
        color: "green",
        style: { cursor: "pointer" },
      }}
    >
      <IoIosAddCircle />
    </IconContext.Provider>
  );
};

export default SwitchIcon1;
