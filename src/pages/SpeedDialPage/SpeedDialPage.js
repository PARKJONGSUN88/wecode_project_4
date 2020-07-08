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
            UI 컴포넌트 // SpeedDial
            <br />
            <br />
            배경이 클릭될시 console을 확인해보세요!
            <br />
            UI 컴포넌트가 활성화되면 배경이 클릭되지 않습니다.
            <br />
            컴포넌트별 icon클릭 함수도 확인해보세요.
          </div>
        </div>
        <div className="sample1 sample">
          1번 UI // 적용Props
          <br />
          <br />
          iconGroupDirection: "right" / switchRotate: false /
          switchIconHoverColor: "green" / iconHoverColor: "green"
        </div>
        <div className="sample2 sample">
          2번 UI // 적용Props
          <br />
          <br />
          iconGroupDirection: "left" / iconWidth: 100 / iconHeight: 100 /
          switchIconHoverColor: "blue" / iconHoverColor: "red" /
          iconSpaceBetween: 100
        </div>
        <div className="sample3 sample">
          3번 UI // 적용Props
          <br />
          <br />
          적용된 props가 없는 ddefaultProps 상태입니다.
        </div>
        <div className="sample4 sample">
          4번 UI // 적용Props
          <br />
          <br />
          iconGroupDirection: "up" / iconWidth: 100 / iconHeight: 100 /
          switchIconHoverColor: "skyblue" / switchIconRotateAngle: 180 /
          iconHoverRadius: 1 / isToggleSwitchColorStay: false
        </div>
      </Background>
      <Contents>
        <div className="cover1 cover">
          <SpeedDail1 />
        </div>
        <div className="cover2 cover">
          <SpeedDail2 />
        </div>
        <div className="cover3 cover">
          <SpeedDail3 />
        </div>
        <div className="cover4 cover">
          <SpeedDail4 />
        </div>
      </Contents>
    </>
  );
};

export default SpeedDialPage;

const Background = styled.div`
  width: 100%;
  height: 200vh;
  background-color: rgba(181, 181, 181, 0.3);
  .center {
    position: fixed;
    top: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    & > div {
      background-color: blue;
      color: white;
      width: 400px;
      height: 150px;
    }
  }
  .sample {
    position: absolute;
    border: 1px solid gray;
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
`;

const Contents = styled.div`
  .cover {
    position: fixed;
  }
  .cover1 {
    top: 15%;
    left: 15%;
  }
  .cover2 {
    top: 15%;
    right: 15%;
  }
  .cover3 {
    bottom: 15%;
    left: 15%;
  }
  .cover4 {
    bottom: 15%;
    right: 15%;
  }
`;
