import React from "react";
import SpeedDial from "../../components/SpeedDial/SpeedDial";
import SwitchIcon2 from "../../components/Icons/SwitchIcon2";
import Icon1 from "../../components/Icons/Icon1";
import Icon2 from "../../components/Icons/Icon2";
import Icon3 from "../../components/Icons/Icon3";

const SpeedDial1 = () => {
  const switchIcon = <SwitchIcon2 />;
  const iconList = [
    { url: "/1", icon: <Icon1 /> },
    { url: "/2", icon: <Icon2 /> },
    { url: "/3", icon: <Icon3 /> },
  ];
  const iconGroupDirection = "up";
  const switchIconHoverColor = "green";
  const iconHoverColor = "green";
  const isSwitchIconRotate = false;

  return (
    <>
      <SpeedDial
        switchIcon={switchIcon}
        iconList={iconList}
        iconGroupDirection={iconGroupDirection}
        switchIconHoverColor={switchIconHoverColor}
        iconHoverColor={iconHoverColor}
        isSwitchIconRotate={isSwitchIconRotate}
      />
    </>
  );
};

export default SpeedDial1;
