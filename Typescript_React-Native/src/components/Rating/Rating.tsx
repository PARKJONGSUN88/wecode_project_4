import * as React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import Piece from "./Piece";
import Pick from "./Pick";

interface RatingType {
  pieceWidth?: number;
  pieceHeight?: number;
  pieceIsHalf?: boolean;
  direction?: "up" | "down" | "left" | "right";
  pieceCount?: number;
  defaultPickCount?: number;
  piece?: React.ReactElement;
  pieceEven?: React.ReactElement;
  pick?: React.ReactElement;
  pickEven?: React.ReactElement;
  pieceStyle?: string | null;
  pickStyle?: string | null;
  userFunc?: Function;
}

interface WarpType {
  pieceWidth: number;
  pieceHeight: number;
  pieceCount: number;
}

interface PieceWrapType {
  direction: "up" | "down" | "left" | "right";
}

const Rating: React.FC<RatingType> = ({
  pieceWidth = 50,
  pieceHeight = 100,
  pieceIsHalf = false,
  direction = "right",
  pieceStyle = null,
  pickStyle = null,
  pieceCount = 4,
  defaultPickCount = 1,
  userFunc = (click: any, pickedPieceIndex: any) =>
    console.log("click:", click, "index:", pickedPieceIndex),
  piece = (
    <Piece
      pieceWidth={pieceWidth}
      pieceHeight={pieceHeight}
      pieceIsHalf={pieceIsHalf}
      direction={direction}
      pieceStyle={pieceStyle}
      IsEven={false}
    />
  ),
  pieceEven = (
    <Piece
      pieceWidth={pieceWidth}
      pieceHeight={pieceHeight}
      pieceIsHalf={pieceIsHalf}
      direction={direction}
      pieceStyle={pieceStyle}
      IsEven={true}
    />
  ),
  pick = (
    <Pick
      pieceWidth={pieceWidth}
      pieceHeight={pieceHeight}
      pieceIsHalf={pieceIsHalf}
      direction={direction}
      pickStyle={pickStyle}
      IsEven={false}
    />
  ),
  pickEven = (
    <Pick
      pieceWidth={pieceWidth}
      pieceHeight={pieceHeight}
      pieceIsHalf={pieceIsHalf}
      direction={direction}
      pickStyle={pickStyle}
      IsEven={true}
    />
  ),
}) => {
  const [pickedPieceIndex, setPickedPieceIndex] = useState(
    defaultPickCount - 1
  );

  const pieceCountArray = [];
  for (let i = 0; i < pieceCount; i++) {
    if (i % 2 === 0) {
      pieceCountArray.push(piece);
    }
    if (i % 2 !== 0) {
      pieceCountArray.push(pieceEven);
    }
  }

  const pickCountArray = [];
  for (let i = 0; i < pickedPieceIndex + 1; i++) {
    if (i % 2 == 0) {
      pickCountArray.push(pick);
    }
    if (i % 2 !== 0) {
      pickCountArray.push(pickEven);
    }
  }

  const clickHandler = (click: React.SetStateAction<number>) => {
    setPickedPieceIndex(click);
    userFunc(click, pickedPieceIndex);
  };

  return (
    <Warp
      pieceWidth={pieceWidth}
      pieceHeight={pieceHeight}
      pieceCount={pieceCount}
    >
      <PieceWrap direction={direction}>
        {pieceCountArray.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => clickHandler(index)}
          >
            {item}
          </TouchableOpacity>
        ))}
      </PieceWrap>
      <PieceWrap direction={direction}>
        {pickCountArray.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => clickHandler(index)}
          >
            {item}
          </TouchableOpacity>
        ))}
      </PieceWrap>
    </Warp>
  );
};

export default Rating;

const Warp = styled.View<WarpType>`
  position: relative;
  width: ${(props) => props.pieceWidth * props.pieceCount};
  height: ${(props) => props.pieceHeight};
`;

const PieceWrap = styled.View<PieceWrapType>`
  position: absolute;
  display: flex;
  ${(props) => {
    if (props.direction === "right") {
      return css`
        left: 0;
        flex-direction: row;
      `;
    }
    if (props.direction === "left") {
      return css`
        right: 0;
        flex-direction: row-reverse;
      `;
    }
    if (props.direction === "down") {
      return css`
        top: 0;
        flex-direction: column;
      `;
    }
    if (props.direction === "up") {
      return css`
        bottom: 0;
        flex-direction: column-reverse;
      `;
    }
  }};
`;
