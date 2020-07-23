import * as React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import Piece from "./source/Piece";
import Pick from "./source/Pick";

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

interface WrapType {
  pieceWidth: number;
  pieceHeight: number;
  pieceCount: number;
  pieceStyle: string | null;
  direction: "up" | "down" | "left" | "right";
}

interface PieceWrapType {
  direction: "up" | "down" | "left" | "right";
}

const Rating: React.FC<RatingType> = ({
  pieceWidth = 25,
  pieceHeight = 50,
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
      IsEven={false}
    />
  ),
  pieceEven = (
    <Piece
      pieceWidth={pieceWidth}
      pieceHeight={pieceHeight}
      pieceIsHalf={pieceIsHalf}
      direction={direction}
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
    <Wrap
      pieceWidth={pieceWidth}
      pieceHeight={pieceHeight}
      pieceCount={pieceCount}
      pieceStyle={pieceStyle}
      direction={direction}
    >
      <PieceWrap direction={direction}>
        {pieceCountArray.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
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
            activeOpacity={1}
            onPress={() => clickHandler(index)}
          >
            {item}
          </TouchableOpacity>
        ))}
      </PieceWrap>
    </Wrap>
  );
};

export default Rating;

const Wrap = styled.View<WrapType>`
  position: relative;
  ${(props) => {
    if (props.direction === "down" || props.direction === "up") {
      return css`
        width: ${props.pieceWidth};
        height: ${props.pieceHeight * props.pieceCount};
      `;
    } else {
      return css`
        width: ${props.pieceWidth * props.pieceCount};
        height: ${props.pieceHeight};
      `;
    }
  }}
  ${(props) => {
    if (props.pieceStyle) {
      return css`
        ${props.pieceStyle}
      `;
    }
  }};
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
