import * as React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import SpeedDial from "../../components/SpeedDial/SpeedDial";
import Icon1 from "../../components/Icons/Icon1";
import Icon2 from "../../components/Icons/Icon2";

const SpeedDialPage = () => {
  return (
    <Contents>
      <ViewCover>
        <Text>default 상태 </Text>
        <SpeedDial />
      </ViewCover>
      <ViewCover>
        <Text>icon 사이즈 업 / 스위치 버튼 및 아이콘에 배경색 적용</Text>
        <SpeedDial
          iconWidth={100}
          iconHeight={100}
          switchButtonStyle={"background-color:pink;"}
          iconCoverStyle={"background-color:skyblue;"}
        />
      </ViewCover>
      <ViewCover>
        <Text>유저 커스텀 함수 적용 / 방향 "left" 설정</Text>
        <SpeedDial
          iconGroupDirection={"left"}
          userFunc={(e: any) => alert(e)}
          iconCoverStyle={"background-color:skyblue;"}
        />
      </ViewCover>
      <ViewCover>
        <Text>유저 커스텀 image적용 / 방향 "down" 설정</Text>
        <SpeedDial
          iconGroupDirection={"down"}
          switchIcon={<Icon1 />}
          iconList={[
            { url: "하이1", icon: <Icon2 /> },
            { url: "하이2", icon: <Icon2 /> },
            { url: "하이3", icon: <Icon2 /> },
          ]}
        />
      </ViewCover>
    </Contents>
  );
};

export default SpeedDialPage;

const Contents = styled.View`
  flex: 1;
`;

const ViewCover = styled.View`
  margin-bottom: 50;
  width: 100%;
`;
