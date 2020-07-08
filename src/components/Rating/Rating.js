import React, { useState } from "react";
import styled, { css } from "styled-components";

const Rating = (props) => {
  const [pickedPieceIndex, setPickedPieceIndex] = useState(0);

  const pieceCount = [];
  for (let i = 0; i < props.pieceCount; i++) {
    pieceCount.push(props.piece);
  }

  const pickCount = [];
  for (let i = 0; i < pickedPieceIndex + 1; i++) {
    pickCount.push(props.pick);
  }

  const clickHandler = (click) => {
    setPickedPieceIndex(click);
    props.clickHandler(click, pickedPieceIndex);
  };

  return (
    <Warp
      pieceCount={props.pieceCount}
      pieceHeight={props.pieceHeight}
      pieceWidth={props.pieceWidth}
    >
      <PieceWrap
        direction={props.direction}
        pieceIsHalf={props.pieceIsHalf}
        pieceHeight={props.pieceHeight}
        pieceWidth={props.pieceWidth}
        pieceStyle={props.pieceStyle}
      >
        {pieceCount.map((item, index) => (
          <div key={index} onClick={() => clickHandler(index)}>
            <div>{item}</div>
          </div>
        ))}
      </PieceWrap>
      <PieceWrap
        direction={props.direction}
        pieceIsHalf={props.pieceIsHalf}
        pieceHeight={props.pieceHeight}
        pieceWidth={props.pieceWidth}
        pickStyle={props.pickStyle}
      >
        {pickCount.map((item, index) => (
          <div p key={index} onClick={() => clickHandler(index)}>
            <div>{item}</div>
          </div>
        ))}
      </PieceWrap>
    </Warp>
  );
};

export default Rating;

Rating.defaultProps = {
  piece: "piece",
  pick: "pick",
  pieceCount: 4,
  pieceIsHalf: false,
  direction: "right",
  pieceHeight: 100,
  pieceWidth: 50,
  pieceStyle: null,
  pickStyle: null,
  clickHandler: (click, index) => console.log("click:", click, "index:", index),
};

const Warp = styled.div`
  position: relative;
  height: ${(props) => props.pieceHeight}px;
  width: ${(props) => props.pieceWidth * props.pieceCount}px;
`;

const PieceWrap = styled.div`
  position: absolute;
  left: ${(props) => props.direction === "right" && 0}px;
  right: ${(props) => props.direction === "left" && 0}px;
  top: ${(props) => props.direction === "down" && 0}px;
  bottom: ${(props) => props.direction === "up" && 0}px;
  display: flex;
  flex-direction: ${(props) => props.direction === "right" && "row"};
  flex-direction: ${(props) => props.direction === "left" && "row-reverse"};
  flex-direction: ${(props) => props.direction === "down" && "column"};
  flex-direction: ${(props) => props.direction === "up" && "column-reverse"};
  & > div {
    overflow: hidden;
    height: ${(props) => props.pieceHeight}px;
    width: ${(props) => props.pieceWidth}px;
    & > div {
      height: 100%;
      width: 100%;
      pointer-events: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & > div:nth-child(odd) {
    & > div {
      transform: ${(props) => {
        if (props.pieceIsHalf) {
          if (props.direction === "left") return "translateX(-50%) scale(2)";
          if (props.direction === "right") return "translateX(50%) scale(2)";
          if (props.direction === "down") return "translateY(50%) scale(2)";
          if (props.direction === "up") return "translateY(-50%) scale(2)";
        }
      }};
    }
  }
  & > div:nth-child(even) {
    & > div {
      transform: ${(props) => {
        if (props.pieceIsHalf) {
          if (props.direction === "left") return "translateX(50%) scale(2)";
          if (props.direction === "right") return "translateX(-50%) scale(2)";
          if (props.direction === "down") return "translateY(-50%) scale(2)";
          if (props.direction === "up") return "translateY(50%) scale(2)";
        }
      }};
    }
  }
  ${(props) => {
    if (props.pieceStyle !== null) {
      return css`
        ${props.pieceStyle}
      `;
    }
  }};
  ${(props) => {
    if (props.pickStyle !== null) {
      return css`
        ${props.pickStyle}
      `;
    }
  }}
`;
