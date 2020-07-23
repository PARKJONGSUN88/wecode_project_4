import * as React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Rating from "../../components/Rating/Rating";

const RatingPage = () => {
  return (
    <Contents>
      <ViewCover>
        <Text>1. default 상태 / pieceStyle에 배경색 적용</Text>
        <Rating pieceStyle={"background-color:pink"} />
      </ViewCover>
      <ViewCover>
        <Text>
          2. pieceIsHalf "true"로 적용 / 사이즈 확대 / piece갯수 증가하여 적용
        </Text>
        <Rating
          pieceIsHalf={true}
          pieceWidth={25}
          pieceHeight={50}
          pieceCount={8}
          pieceStyle={"background-color:skyblue"}
        />
      </ViewCover>
      <ViewCover>
        <Text>3. direction을 "left"로 적용 / defaultPick갯수 조절</Text>
        <Rating
          pieceIsHalf={true}
          pieceCount={10}
          defaultPickCount={3}
          direction={"left"}
          pieceStyle={"background-color:pink"}
        />
      </ViewCover>
      <ViewCoverColumn>
        <Text>4. direction을 "down"로 적용</Text>
        <Rating
          direction={"down"}
          defaultPickCount={2}
          pieceCount={8}
          pieceWidth={50}
          pieceHeight={25}
          pieceStyle={"background-color:skyblue"}
        />
      </ViewCoverColumn>
    </Contents>
  );
};

export default RatingPage;

const Contents = styled.SafeAreaView`
  flex: 1;
`;

const ViewCover = styled.View`
  flex: 1;
  margin-top: 10;
  width: 100%;
`;

const ViewCoverColumn = styled.View`
  flex: 1;
  margin-top: 10;
  width: 100%;
  height: 200;
`;
