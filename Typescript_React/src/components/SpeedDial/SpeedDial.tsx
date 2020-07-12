import * as React from 'react';
import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface SpeedDialType {
  switchIcon?: string | number | React.ReactElement;
  iconList?: Array<IconListType>;
  userFunc?: Function;
  iconGroupDirection?: 'left' | 'right' | 'up' | 'down';
  iconWidth?: number;
  iconHeight?: number;
  iconSpaceBetween?: number;
  toggleSpeed?: number;
  isSwitchIconHoverColor?: boolean;
  switchIconHoverColor?: string;
  switchIconHoverRadius?: number;
  isSwitchIconRotate?: boolean;
  switchIconRotateAngle?: number;
  switchIconRotateSpeed?: number;
  isIconHoverColor?: boolean;
  iconHoverColor?: string;
  iconHoverRadius?: number;
  isToggleSwitchColorStay?: boolean;
}

interface IconListType {
  url: string;
  icon: string | number | React.ReactElement;
}

interface ContentsType {
  iconGroupDirection: 'left' | 'right' | 'up' | 'down';
}

interface SwitchButtonCoverType {
  isToggle: boolean;
  iconWidth: number;
  iconHeight: number;
  isToggleSwitchColorStay: boolean;
  isSwitchIconHoverColor: boolean;
  switchIconHoverColor: string;
  iconHoverIndex: number;
  isSwitchIconRotate: boolean;
  switchIconHoverRadius: number;
  switchIconRotateAngle: number;
  switchIconRotateSpeed: number;
}

interface IconGroupWrapType {
  isToggle: boolean;
  length: number;
  iconGroupDirection: 'left' | 'right' | 'up' | 'down';
  iconWidth: number;
  iconHeight: number;
  iconSpaceBetween: number;
  toggleSpeed: number;
  isIconHoverColor: boolean;
  iconHoverIndex: number;
  iconHoverColor: string;
  iconHoverRadius: number;
}

interface IconCoverType {
  isToggle: boolean;
  iconGroupDirection: 'left' | 'right' | 'up' | 'down';
  iconWidth: number;
  iconHeight: number;
  iconSpaceBetween: number;
  toggleSpeed: number;
  index: number;
  length: number;
}

const SpeedDial: React.FC<SpeedDialType> = ({
  switchIcon = 'button',
  iconList = [
    { url: '/url1', icon: 'icon1' },
    { url: '/url2', icon: 'icon2' },
  ],
  userFunc = (e: any) => console.log(e),
  iconGroupDirection = 'left',
  iconWidth = 50,
  iconHeight = 50,
  iconSpaceBetween = 20,
  toggleSpeed = 200,
  isSwitchIconHoverColor = true,
  switchIconHoverColor = 'gray',
  switchIconHoverRadius = 100,
  isSwitchIconRotate = true,
  switchIconRotateAngle = -45,
  switchIconRotateSpeed = 200,
  isIconHoverColor = true,
  iconHoverColor = 'gray',
  iconHoverRadius = 100,
  isToggleSwitchColorStay = true,
}) => {
  const [isToggle, setIsToggle] = useState(false);
  const [iconHoverIndex, setIconHoverIndex] = useState(-1);

  const iconClickHandler = (e: any) => {
    userFunc(iconList[e].url);
    setIsToggle(false);
  };

  return (
    <Contents
      iconGroupDirection={iconGroupDirection}
      onMouseLeave={() => setIsToggle(false)}
    >
      <SwitchButtonCover
        isToggle={isToggle}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        isSwitchIconRotate={isSwitchIconRotate}
        switchIconRotateAngle={switchIconRotateAngle}
        switchIconRotateSpeed={switchIconRotateSpeed}
        switchIconHoverColor={switchIconHoverColor}
        isSwitchIconHoverColor={isSwitchIconHoverColor}
        switchIconHoverRadius={switchIconHoverRadius}
        iconHoverIndex={iconHoverIndex}
        isToggleSwitchColorStay={isToggleSwitchColorStay}
        onMouseEnter={() => setIsToggle(true)}
        onClick={() => setIsToggle(!isToggle)}
      >
        {switchIcon}
      </SwitchButtonCover>
      <IconGroupWrap
        isToggle={isToggle}
        iconGroupDirection={iconGroupDirection}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        length={iconList.length}
        iconSpaceBetween={iconSpaceBetween}
        toggleSpeed={toggleSpeed}
        isIconHoverColor={isIconHoverColor}
        iconHoverIndex={iconHoverIndex}
        onMouseLeave={() => setIconHoverIndex(-1)}
        iconHoverColor={iconHoverColor}
        iconHoverRadius={iconHoverRadius}
      >
        {iconList.map((item, index) => (
          <IconCover
            iconGroupDirection={iconGroupDirection}
            isToggle={isToggle}
            key={index}
            index={index}
            length={iconList.length}
            toggleSpeed={toggleSpeed}
            iconWidth={iconWidth}
            iconHeight={iconHeight}
            iconSpaceBetween={iconSpaceBetween}
            onMouseEnter={() => setIconHoverIndex(index)}
            onClick={() => iconClickHandler(index)}
          >
            {item.icon}
          </IconCover>
        ))}
      </IconGroupWrap>
    </Contents>
  );
};

export default SpeedDial;

const Contents = styled.div<ContentsType>`
  display: flex;
  flex-direction: ${(props) =>
    props.iconGroupDirection === 'up' && 'column-reverse'};
  flex-direction: ${(props) => props.iconGroupDirection === 'down' && 'column'};
  flex-direction: ${(props) =>
    props.iconGroupDirection === 'left' && 'row-reverse'};
  flex-direction: ${(props) => props.iconGroupDirection === 'right' && 'row'};
`;

const SwitchButtonCover = styled.div<SwitchButtonCoverType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.iconWidth}px;
  height: ${(props) => props.iconHeight}px;
  background-color: ${(props) =>
    props.isToggleSwitchColorStay
      ? props.isToggle &&
        props.isSwitchIconHoverColor &&
        props.switchIconHoverColor
      : props.iconHoverIndex === -1 &&
        props.isToggle &&
        props.isSwitchIconHoverColor &&
        props.switchIconHoverColor};
  border-radius: ${(props) => props.switchIconHoverRadius}px;
  ${(props) => {
    if (props.isToggle && props.isSwitchIconRotate) {
      return css`
        animation: ${onRotate(props.switchIconRotateAngle)}
          ${props.switchIconRotateSpeed}ms forwards;
      `;
    } else {
      return css`
        animation: ${offRotate(props.switchIconRotateAngle)}
          ${props.switchIconRotateSpeed}ms forwards;
      `;
    }
  }}
`;

const onRotate = (e: any) => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(${e}deg);
  }
`;

const offRotate = (e: any) => keyframes`
  0% {
    transform: rotate(${e}deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const IconGroupWrap = styled.div<IconGroupWrapType>`
  position: absolute;
  bottom: ${(props) => props.iconGroupDirection === 'up' && props.iconHeight}px;
  top: ${(props) => props.iconGroupDirection === 'down' && props.iconHeight}px;
  right: ${(props) => props.iconGroupDirection === 'left' && props.iconWidth}px;
  left: ${(props) => props.iconGroupDirection === 'right' && props.iconWidth}px;
  max-height: ${(props) =>
    props.isToggle
      ? (props.iconHeight + props.iconSpaceBetween) * props.length
      : 0}px;
  transition: ${(props) => (props.isToggle ? 'max-height' : 'max-height')};
  transition-delay: ${(props) =>
    props.isToggle === false && props.length * props.toggleSpeed}ms;
  display: flex;
  flex-direction: ${(props) =>
    props.iconGroupDirection === 'up' && 'column-reverse'};
  flex-direction: ${(props) => props.iconGroupDirection === 'down' && 'column'};
  flex-direction: ${(props) =>
    props.iconGroupDirection === 'left' && 'row-reverse'};
  flex-direction: ${(props) => props.iconGroupDirection === 'right' && 'row'};
  &
    > div:nth-child(${(props) =>
        props.isIconHoverColor && props.iconHoverIndex + 1}) {
    background-color: ${(props) => props.iconHoverColor};
    border-radius: ${(props) => props.iconHoverRadius}px;
  }
`;

const IconCover = styled.div<IconCoverType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.iconWidth}px;
  height: ${(props) => props.iconHeight}px;
  margin-bottom: ${(props) =>
    props.iconGroupDirection === 'up' && props.iconSpaceBetween}px;
  margin-top: ${(props) =>
    props.iconGroupDirection === 'down' && props.iconSpaceBetween}px;
  margin-right: ${(props) =>
    props.iconGroupDirection === 'left' && props.iconSpaceBetween}px;
  margin-left: ${(props) =>
    props.iconGroupDirection === 'right' && props.iconSpaceBetween}px;
  animation: ${(props) => (props.isToggle ? 'onScale' : 'offScale')}
    ${(props) =>
      props.isToggle
        ? (props.index + 1) * props.toggleSpeed
        : (props.length - props.index) * props.toggleSpeed}ms
    forwards;
  @keyframes onScale {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes offScale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
