import React from "react";
import styled from "styled-components";
import SpeedDail1 from "./SpeedDial1";
import SpeedDail2 from "./SpeedDial2";
import SpeedDail3 from "./SpeedDial3";
import SpeedDail4 from "./SpeedDial4";

const SpeedDialPage = () => {
  return (
    <>
      <Background onClick={() => console.log("배경")}>
        <div className="center">
          <div>
            UI 컴포넌트 적용된 sample입니다.
            <br />
            배경이 클릭될시 console을 확인해보세요!
            <br />
            UI 컴포넌트가 활성화되면 배경이 클릭되지 않습니다.
            <br />
            컴포넌트별 icon클릭 함수도 확인해보세요.
          </div>
        </div>
        <div className="sample1 ui">
          1번 UI // 적용Props
          <br />
          <br />
          iconGroupDirection: "right" / switchRotate: false /
          switchIconHoverColor: "green" / iconHoverColor: "green"
        </div>
        <div className="sample2 ui">
          2번 UI // 적용Props
          <br />
          <br />
          iconGroupDirection: "left" / iconWidth: 100 / iconHeight: 100 /
          switchIconHoverColor: "blue" / iconHoverColor: "red" /
          iconSpaceBetween: 100
        </div>
        <div className="sample3 ui">
          3번 UI // 적용Props
          <br />
          <br />
          적용된 props가 없는 ddefaultProps 상태입니다.
        </div>
        <div className="sample4 ui">
          4번 UI // 적용Props
          <br />
          <br />
          iconGroupDirection: "up" / iconWidth: 100 / iconHeight: 100 /
          switchIconHoverColor: "skyblue" / switchIconRotateAngle: 180 /
          iconHoverRadius: 1 / isToggleSwitchColorStay: false
        </div>
      </Background>
      <Cover1>
        <SpeedDail1 />
      </Cover1>
      <Cover2>
        <SpeedDail2 />
      </Cover2>
      <Cover3>
        <SpeedDail3 />
      </Cover3>
      <Cover4>
        <SpeedDail4 />
      </Cover4>
    </>
  );
};

export default SpeedDialPage;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(181, 181, 181, 0.3);
  .ui {
    position: absolute;
    background-color: black;
    color: yellow;
    width: 400px;
    height: 150px;
  }
  .sample1 {
    top: 25%;
    left: 5%;
  }
  .sample2 {
    top: 25%;
    right: 5%;
  }
  .sample3 {
    bottom: 25%;
    left: 5%;
  }
  .sample4 {
    bottom: 25%;
    right: 5%;
  }
  .center {
    position: fixed;
    top: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    & > div {
      background-color: black;
      color: yellow;
      width: 400px;
      height: 100px;
    }
  }
`;

const Cover1 = styled.div`
  position: fixed;
  top: 15%;
  left: 15%;
`;

const Cover2 = styled.div`
  position: fixed;
  top: 15%;
  right: 15%;
`;
const Cover3 = styled.div`
  position: fixed;
  bottom: 15%;
  left: 15%;
`;
const Cover4 = styled.div`
  position: fixed;
  bottom: 15%;
  right: 15%;
`;
