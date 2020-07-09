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
        <h1>Speed Dial Page입니다.</h1>
        <div className="center">
          <div>
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
          <h3>- 컴포넌트 방향 및 색상이 적용 /</h3>
          <h3>실행버튼의 회전이 비활성화</h3>
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
          <h3>- 버튼 및 아이콘 크기 조절(up) /</h3>
          <h3>사용자 커스텀 함수 적용 /</h3>
          <h3>아이콘간 간격 조절(up)</h3>
          <SpeedDial
            switchIcon={<SwitchIcon1 />}
            iconList={[
              { url: "/1", icon: <Icon1 /> },
              { url: "/2", icon: <Icon2 /> },
            ]}
            userFunc={() => {
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
          <h3>- default 상태</h3>
          <SpeedDial />
        </div>
        <div className="cover4 cover">
          <SpeedDial
            switchIcon={<Icon5 />}
            iconList={[
              { url: "/1", icon: <Icon3 /> },
              { url: "/2", icon: <Icon4 /> },
              { url: "/3", icon: <Icon5 /> },
              { url: "/4", icon: <Icon6 /> },
            ]}
            userFunc={(e) => {
              console.log(e, "4번 커스텀 함수");
            }}
            iconGroupDirection={"down"}
            iconWidth={100}
            iconHeight={100}
            switchIconHoverColor={"skyblue"}
            switchIconRotateAngle={180}
            iconHoverRadius={1}
            isToggleSwitchColorStay={false}
          />
          <h3>- 아이콘의 배경 네모 적용 /</h3>
          <h3>실행버튼 hover될때만 스타일 적용 /</h3>
          <h3>실행버튼 회전방향 및 속도 조절</h3>
        </div>
      </Contents>
    </>
  );
};

export default SpeedDialPage;

const Background = styled.div`
  .center {
    width: 100%;
    height: 90vh;
    display: flex;
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
    top: 60%;
    left: 5%;
  }
  .cover2 {
    top: 40%;
    left: 30%;
  }
  .cover3 {
    top: 25%;
    left: 5%;
  }
  .cover4 {
    top: 5%;
    left: 50%;
  }
`;
