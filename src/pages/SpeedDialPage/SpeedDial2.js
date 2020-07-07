import React from "react";
import SpeedDial from "../../components/SpeedDial/SpeedDial";
import SwitchIcon1 from "../../components/Icons/SwitchIcon1";
import Icon1 from "../../components/Icons/Icon1";
import Icon2 from "../../components/Icons/Icon2";
import Icon3 from "../../components/Icons/Icon3";
import Icon4 from "../../components/Icons/Icon4";
import Icon5 from "../../components/Icons/Icon5";

const SpeedDial2 = () => {
  const switchIcon = <SwitchIcon1 />;
  const iconList = [
    { url: "/1", icon: <Icon1 /> },
    { url: "/2", icon: <Icon2 /> },
    { url: "/3", icon: <Icon3 /> },
    { url: "/4", icon: <Icon4 /> },
    { url: "/5", icon: <Icon5 /> },
  ];
  const iconClickHandler = (e) => {
    console.log("2번 컴포넌트 작동중입니다");
  };
  const iconGroupDirection = "left";
  const switchIconHoverColor = "blue";
  const iconHoverColor = "red";
  const iconSpaceBetween = 100;
  const iconWidth = 100;
  const iconHeight = 100;

  return (
    <>
      <SpeedDial
        switchIcon={switchIcon}
        iconList={iconList}
        iconClickHandler={iconClickHandler}
        iconGroupDirection={iconGroupDirection}
        switchIconHoverColor={switchIconHoverColor}
        iconHoverColor={iconHoverColor}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        iconSpaceBetween={iconSpaceBetween}
      />
    </>
  );
};

export default SpeedDial2;
