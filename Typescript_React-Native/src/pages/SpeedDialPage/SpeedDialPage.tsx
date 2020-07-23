import * as React from "react";
import { Text } from "react-native";
import styled, { css } from "styled-components/native";
import SpeedDial from "../../components/SpeedDial/SpeedDial";
import Menu from "../../components/Icons/menu";
import Facebook from "../../components/Icons/facebook";
import Instagram from "../../components/Icons/instagram";
import Twitter from "../../components/Icons/twitter";
import Youtube from "../../components/Icons/youtube";

const SpeedDialPage = () => {
  return (
    <Contents>
      <ViewCover side={"start"}>
        <Text>1. default 상태 </Text>
        <SpeedDial />
      </ViewCover>
      <ViewCover side={"start"}>
        <Text>
          2. icon 사이즈 업 / 유저 커스텀 함수 적용 / 아이콘에 배경색 적용
        </Text>
        <SpeedDial
          iconWidth={100}
          iconHeight={100}
          switchButtonStyle={"background-color:pink;"}
          userFunc={(e: any) => alert(e)}
        />
      </ViewCover>
      <ViewCover side={"end"}>
        <Text>3. 유저 커스텀 image 적용 / 방향 "left" 설정</Text>
        <SpeedDial
          iconGroupDirection={"left"}
          switchIcon={<Menu />}
          iconWidth={25}
          iconHeight={25}
          iconList={[
            { url: "/facebook", icon: <Facebook /> },
            { url: "/instagram", icon: <Instagram /> },
            { url: "/twitter", icon: <Twitter /> },
            { url: "/youtube", icon: <Youtube /> },
          ]}
        />
      </ViewCover>
      <ViewCover side={"end"}>
        <Text>4. 유저 커스텀 image적용 / 방향 "up" 설정</Text>
        <SpeedDial
          iconGroupDirection={"up"}
          switchIcon={<Menu />}
          iconList={[
            { url: "/facebook", icon: <Facebook /> },
            { url: "/instagram", icon: <Instagram /> },
            { url: "/twitter", icon: <Twitter /> },
            { url: "/youtube", icon: <Youtube /> },
          ]}
          userFunc={(e: any) => alert(e)}
        />
      </ViewCover>
    </Contents>
  );
};

export default SpeedDialPage;

const Contents = styled.SafeAreaView`
  flex: 1;
`;

const ViewCover = styled.View<ViewCoverType>`
  flex: 1;
  margin-bottom: 20;
  width: 100%;
  ${(props) => {
    if (props.side === "start") {
      return css`
        align-items: flex-start;
      `;
    }
    if (props.side === "center") {
      return css`
        align-items: center;
      `;
    }
    if (props.side === "end") {
      return css`
        align-items: flex-end;
      `;
    }
  }}
`;

interface ViewCoverType {
  side: "start" | "center" | "end";
}
