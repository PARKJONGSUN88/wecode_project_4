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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> 난 배경이야! <br />
        <br /> 아이콘이 활성화가 안됬을 때는 배경이 클릭되야해 <br />
        <br /> 배경이 클릭되면 콘솔에 배경이라고 글씨가 써짐
      </Background>
      <Cover1>
        1번(rotate False, 아이콘간격 좁)
        <SpeedDail1 />
      </Cover1>
      <Cover2>
        2번(크기, 색상)
        <SpeedDail2 />
      </Cover2>
      <Cover3>
        3번(default모양)
        <SpeedDail3 />
      </Cover3>
      <Cover4>
        4번(rotate reverse, 아이콘 네모, 스위치 색 유지 False)
        <SpeedDail4 />
      </Cover4>
    </>
  );
};

export default SpeedDialPage;

const Background = styled.div`
  position: fixed;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  background-color: rgba(181, 181, 181, 0.3);
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
