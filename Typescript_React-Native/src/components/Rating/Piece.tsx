import * as React from "react";
import { Image, StyleSheet } from "react-native";
import styled, { css } from "styled-components/native";

const img = require("../Icons/star1.png");

interface PieceType {
  pieceWidth?: number;
  pieceHeight?: number;
  pieceIsHalf?: boolean;
  direction?: "up" | "down" | "left" | "right";
  pieceStyle?: string | null;
  IsEven?: boolean;
}

interface CoverWrapType {
  pieceWidth: number;
  pieceHeight: number;
}

interface ImgCoverType {
  pieceWidth: number;
  pieceHeight: number;
  pieceIsHalf: boolean;
  direction: "up" | "down" | "left" | "right";
  pieceStyle: string | null;
  IsEven: boolean;
}

const Piece: React.FC<PieceType> = ({
  pieceWidth = 50,
  pieceHeight = 100,
  pieceIsHalf = false,
  direction = "right",
  pieceStyle = null,
  IsEven = false,
}) => {
  return (
    <CoverWrap pieceWidth={pieceWidth} pieceHeight={pieceHeight}>
      <ImgCover
        pieceWidth={pieceWidth}
        pieceHeight={pieceHeight}
        pieceIsHalf={pieceIsHalf}
        direction={direction}
        pieceStyle={pieceStyle}
        IsEven={IsEven}
      >
        <Image style={styles.iconStyle} resizeMode="contain" source={img} />
      </ImgCover>
    </CoverWrap>
  );
};

export default Piece;

const CoverWrap = styled.View<CoverWrapType>`
  width: ${(props) => props.pieceWidth};
  height: ${(props) => props.pieceHeight};
  overflow: hidden;
`;

const ImgCover = styled.View<ImgCoverType>`
  width: ${(props) => props.pieceWidth};
  height: ${(props) => props.pieceHeight};
  ${(props) => {
    if (props.pieceIsHalf) {
      if (props.direction === "right") {
        if (props.IsEven) {
          return css`
            transform: scale(2) translateX(${props.pieceWidth / -2}px);
          `;
        } else {
          return css`
            transform: scale(2) translateX(${props.pieceWidth / 2}px);
          `;
        }
      }
      if (props.direction === "left") {
        if (props.IsEven) {
          return css`
            transform: scale(2) translateX(${props.pieceWidth / 2}px);
          `;
        } else {
          return css`
            transform: scale(2) translateX(${props.pieceWidth / -2}px);
          `;
        }
      }
      if (props.direction === "down") {
        if (props.IsEven) {
          return css`
            transform: scale(2) translateY(${props.pieceHeight / -2}px);
          `;
        } else {
          return css`
            transform: scale(2) translateY(${props.pieceHeight / 2}px);
          `;
        }
      }
      if (props.direction === "up") {
        if (props.IsEven) {
          return css`
            transform: scale(2) translateY(${props.pieceHeight / 2}px);
          `;
        } else {
          return css`
            transform: scale(2) translateY(${props.pieceHeight / -2}px);
          `;
        }
      }
    }
  }}
  ${(props) => {
    if (props.pieceStyle) {
      return css`
        ${props.pieceStyle}
      `;
    }
  }}
`;

const styles = StyleSheet.create({
  iconStyle: {
    width: "100%",
    height: "100%",
  },
});
