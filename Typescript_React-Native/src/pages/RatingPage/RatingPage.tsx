import * as React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Rating from "../../components/Rating/Rating";

const RatingPage = () => {
  return (
    <Contents>
      <ViewCover>
        <Text>default 상태 / pieceStyle에 배경색 적용</Text>
        <Rating pieceStyle={"background-color:pink"} />
      </ViewCover>
      <ViewCover>
        <Text>
          pieceIsHalf "true"로 적용 / 사이즈 확대 / piece갯수 증가하여 적용
        </Text>
        <Rating
          pieceIsHalf={true}
          pieceWidth={100}
          pieceHeight={200}
          pieceCount={8}
          pieceStyle={"background-color:skyblue"}
        />
      </ViewCover>
      <ViewCover>
        <Text>direction을 "left"로 적용 / defaultPick갯수 조절</Text>
        <Rating
          pieceIsHalf={true}
          pieceCount={10}
          defaultPickCount={3}
          direction={"left"}
          pieceStyle={"background-color:pink"}
        />
      </ViewCover>
      <ViewCoverColumn>
        <Text>direction을 "down"로 적용</Text>
        <Rating
          direction={"down"}
          defaultPickCount={2}
          pieceWidth={100}
          pieceHeight={50}
          pieceStyle={"background-color:skyblue"}
        />
        <Text>direction을 "up로 적용</Text>
        <Rating
          direction={"up"}
          pieceWidth={100}
          pieceHeight={50}
          pieceStyle={"background-color:skyblue"}
        />
      </ViewCoverColumn>
    </Contents>
  );
};

export default RatingPage;

const Contents = styled.View`
  flex: 1;
`;

const ViewCover = styled.View`
  margin-bottom: 10;
  width: 100%;
`;

const ViewCoverColumn = styled.View`
  height: 200;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 10;
  width: 100%;
`;
