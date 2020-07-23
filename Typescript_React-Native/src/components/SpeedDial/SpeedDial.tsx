import * as React from "react";
import { useState } from "react";
import styled, { css } from "styled-components/native";
import SwitchIcon from "./source/SwitchButton";
import Icon from "./source/Icon";

interface SpeedDialType {
  iconWidth?: number;
  iconHeight?: number;
  iconGroupDirection?: "left" | "right" | "up" | "down";
  iconSpaceBetween?: number;
  switchIcon?: React.ReactElement;
  iconList?: Array<IconListType>;
  userFunc?: Function;
  switchButtonStyle?: string | null;
  iconGroupStyle?: string | null;
  iconCoverStyle?: string | null;
}

interface IconListType {
  url: string;
  icon: React.ReactElement;
}

interface SwitchButtonCoverType {
  iconWidth: number;
  iconHeight: number;
  iconGroupDirection: "left" | "right" | "up" | "down";
  switchButtonStyle: string | null;
}

interface IconGroupType {
  iconWidth: number;
  iconHeight: number;
  iconGroupDirection: "left" | "right" | "up" | "down";
  iconGroupStyle: string | null;
}

interface IconCoverType {
  isToggle: boolean;
  iconWidth: number;
  iconHeight: number;
  iconGroupDirection: "left" | "right" | "up" | "down";
  iconSpaceBetween: number;
  iconCoverStyle: string | null;
}

const Contents = styled.View`
  position: relative;
`;

const SwitchButtonCover = styled.TouchableOpacity<SwitchButtonCoverType>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.iconWidth};
  height: ${(props) => props.iconHeight};
  ${(props) => {
    if (props.iconGroupDirection === "up") {
      return css`
        bottom: 0;
      `;
    }
    if (props.iconGroupDirection === "down") {
      return css`
        top: 0;
      `;
    }
    if (props.iconGroupDirection === "left") {
      return css`
        right: 0;
      `;
    }
    if (props.iconGroupDirection === "right") {
      return css`
        left: 0;
      `;
    }
  }}
  ${(props) => {
    if (props.switchButtonStyle !== null) {
      return css`
        ${props.switchButtonStyle}
      `;
    }
  }}
`;


const IconGroup = styled.View<IconGroupType>`
  position: absolute;
  ${(props) => {
    if (props.iconGroupDirection === "up") {
      return css`
        bottom: ${props.iconHeight};
      `;
    }
    if (props.iconGroupDirection === "down") {
      return css`
        top: ${props.iconHeight};
      `;
    }
    if (props.iconGroupDirection === "left") {
      return css`
        right: ${props.iconWidth};
      `;
    }
    if (props.iconGroupDirection === "right") {
      return css`
        left: ${props.iconWidth};
      `;
    }
  }}
  display: flex;
  ${(props) => {
    if (props.iconGroupDirection === "up") {
      return css`
        flex-direction: column-reverse;
      `;
    }
    if (props.iconGroupDirection === "down") {
      return css`
        flex-direction: column;
      `;
    }
    if (props.iconGroupDirection === "left") {
      return css`
        flex-direction: row-reverse;
      `;
    }
    if (props.iconGroupDirection === "right") {
      return css`
        flex-direction: row;
      `;
    }
  }}
  ${(props) => {
    if (props.iconGroupStyle !== null) {
      return css`
        ${props.iconGroupStyle}
      `;
    }
  }}
`;

const IconCover = styled.TouchableOpacity<IconCoverType>`
  display: ${(props) => (props.isToggle ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: ${(props) => props.iconWidth};
  height: ${(props) => props.iconHeight};
  ${(props) => {
    if (props.iconSpaceBetween !== null) {
      if (props.iconGroupDirection === "up") {
        return css`
          margin-bottom: ${props.iconSpaceBetween};
        `;
      }
      if (props.iconGroupDirection === "down") {
        return css`
          margin-top: ${props.iconSpaceBetween};
        `;
      }
      if (props.iconGroupDirection === "left") {
        return css`
          margin-right: ${props.iconSpaceBetween};
        `;
      }
      if (props.iconGroupDirection === "right") {
        return css`
          margin-left: ${props.iconSpaceBetween};
        `;
      }
    }
  }}
  ${(props) => {
    if (props.iconCoverStyle !== null) {
      return css`
        ${props.iconCoverStyle}
      `;
    }
  }}
`;

const SpeedDial: React.FC<SpeedDialType> = ({
  iconWidth = 50,
  iconHeight = 50,
  iconGroupDirection = "right",
  iconSpaceBetween = 20,
  switchIcon = <SwitchIcon />,
  iconList = [
    { url: "/url1", icon: <Icon /> },
    { url: "/url2", icon: <Icon /> },
  ],
  userFunc = (e: any) => console.log(e),
  switchButtonStyle = null,
  iconGroupStyle = null,
  iconCoverStyle = null,
}) => {
  const [isToggle, setIsToggle] = useState(false);

  const iconClickHandler = (e: any) => {
    userFunc(iconList[e].url);
    setIsToggle(false);
  };

  return (
    <Contents>
      <SwitchButtonCover
        iconGroupDirection={iconGroupDirection}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        switchButtonStyle={switchButtonStyle}
        activeOpacity={1}
        onPress={() => setIsToggle(!isToggle)}
      >
        {switchIcon}
      </SwitchButtonCover>
      <IconGroup
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        iconGroupDirection={iconGroupDirection}
        iconGroupStyle={iconGroupStyle}
      >
        {iconList.map((item, index) => (
          <IconCover
            isToggle={isToggle}
            iconWidth={iconWidth}
            iconHeight={iconHeight}
            iconGroupDirection={iconGroupDirection}
            iconSpaceBetween={iconSpaceBetween}
            iconCoverStyle={iconCoverStyle}
            key={index}
            activeOpacity={1}
            onPress={() => iconClickHandler(index)}
          >
            {item.icon}
          </IconCover>
        ))}
      </IconGroup>
    </Contents>
  );
};

export default SpeedDial;
