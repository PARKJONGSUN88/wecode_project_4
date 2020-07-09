import React from "react";
import styled from "styled-components";
import SpeedDial from "../../components/SpeedDial/SpeedDial";
import SwitchIcon1 from "../../components/Icons/SwitchIcon1";
import SwitchIcon2 from "../../components/Icons/SwitchIcon2";
import Icon1 from "../../components/Icons/Icon1";
import Icon2 from "../../components/Icons/Icon2";
import Icon3 from "../../components/Icons/Icon3";
import Icon4 from "../../components/Icons/Icon4";
import Icon5 from "../../components/Icons/Icon5";
import Icon6 from "../../components/Icons/Icon6";

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
          <SpeedDial
            switchIcon={<SwitchIcon2 />}
            iconList={[
              { url: "/1", icon: <Icon1 /> },
              { url: "/2", icon: <Icon2 /> },
              { url: "/3", icon: <Icon3 /> },
            ]}
            iconGroupDirection={"right"}
            switchIconHoverColor={"green"}
            iconHoverColor={"green"}
            isSwitchIconRotate={false}
          />
        </div>
        <div className="cover2 cover">
          <SpeedDial
            switchIcon={<SwitchIcon1 />}
            iconList={[
              { url: "/1", icon: <Icon1 /> },
              { url: "/2", icon: <Icon2 /> },
            ]}
            iconClickHandler={() => {
              console.log("2번 컴포넌트 작동중입니다");
            }}
            iconGroupDirection={"left"}
            switchIconHoverColor={"blue"}
            iconHoverColor={"red"}
            iconWidth={100}
            iconHeight={100}
            iconSpaceBetween={100}
          />
        </div>
        <div className="cover3 cover">
          <SpeedDial />
        </div>
        <div className="cover4 cover">
          <SpeedDial
            switchIcon={<Icon5 />}
            iconList={[
              { url: "/3", icon: <Icon3 /> },
              { url: "/4", icon: <Icon4 /> },
              { url: "/5", icon: <Icon5 /> },
              { url: "/6", icon: <Icon6 /> },
            ]}
            iconClickHandler={(e) => {
              console.log(e, "4번 커스텀 함수");
            }}
            iconGroupDirection={"up"}
            iconWidth={100}
            iconHeight={100}
            switchIconHoverColor={"skyblue"}
            switchIconRotateAngle={180}
            iconHoverRadius={1}
            isToggleSwitchColorStay={false}
          />
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
    height: 95vh;
    display: flex;
    justify-content: center;
    & > div {
      width: 400px;
      height: 150px;
      border: 1px solid gray;
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
