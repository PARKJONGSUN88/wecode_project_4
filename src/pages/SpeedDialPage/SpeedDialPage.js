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
  .center {
    position: fixed;
    top: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    & > div {
      width: 400px;
      height: 150px;
    }
  }
`;

const Contents = styled.div`
  .cover {
    position: fixed;
  }
  .cover1 {
    top: 25%;
    left: 5%;
  }
  .cover2 {
    top: 40%;
    left: 50%;
  }
  .cover3 {
    top: 60%;
    left: 20%;
  }
  .cover4 {
    top: 80%;
    left: 80%;
  }
`;
