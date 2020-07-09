import React from "react";
import SpeedDial from "../../components/SpeedDial/SpeedDial";
import Icon3 from "../../components/Icons/Icon3";
import Icon4 from "../../components/Icons/Icon4";
import Icon5 from "../../components/Icons/Icon5";
import Icon6 from "../../components/Icons/Icon6";

const SpeedDial4 = () => {
  const switchIcon = <Icon5 />;
  const iconList = [
    { url: "/3", icon: <Icon3 /> },
    { url: "/4", icon: <Icon4 /> },
    { url: "/5", icon: <Icon5 /> },
    { url: "/6", icon: <Icon6 /> },
  ];
  const iconClickHandler = (e) => {
    console.log(e, "4번 커스텀 함수");
  };
  const iconGroupDirection = "up";
  const iconWidth = 100;
  const iconHeight = 100;
  const switchIconHoverColor = "skyblue";
  const switchIconRotateAngle = 180;
  const iconHoverRadius = 1;
  const isToggleSwitchColorStay = false;

  return (
    <>
      <SpeedDial
        switchIcon={switchIcon}
        iconList={iconList}
        iconClickHandler={iconClickHandler}
        iconGroupDirection={iconGroupDirection}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        switchIconHoverColor={switchIconHoverColor}
        switchIconRotateAngle={switchIconRotateAngle}
        iconHoverRadius={iconHoverRadius}
        isToggleSwitchColorStay={isToggleSwitchColorStay}
      />
    </>
  );
};

export default SpeedDial4;
