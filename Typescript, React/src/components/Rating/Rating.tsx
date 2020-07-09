import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

interface RatingType {
  piece?: string | number | React.ReactElement;
  pick?: string | number | React.ReactElement;
  pieceCount?: number;
  defaultPickCount?: number;
  pieceIsHalf?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  pieceHeight?: number;
  pieceWidth?: number;
  pieceStyle?: string | null;
  pickStyle?: string | null;
  userFunc?: Function;
  isHover?: boolean;
  hover?: string | number | React.ReactElement;
  hoverStyle?: string | null;
}

interface WarpType {
  pieceHeight: number;
  pieceWidth: number;
  pieceCount: number;
}

interface PieceWrapType {
  direction: 'up' | 'down' | 'left' | 'right';
  pieceHeight: number;
  pieceWidth: number;
  pieceIsHalf: boolean;
  pieceStyle?: string | null;
  pickStyle?: string | null;
  hoverStyle?: string | null;
}

const Rating: React.FC<RatingType> = ({
  piece = 'piece',
  pick = 'pick',
  pieceCount = 4,
  defaultPickCount = 1,
  pieceIsHalf = false,
  direction = 'right',
  pieceHeight = 100,
  pieceWidth = 50,
  pieceStyle = null,
  pickStyle = null,
  userFunc = (click: any, pickedPieceIndex: any) =>
    console.log('click:', click, 'index:', pickedPieceIndex),
  isHover = false,
  hover = 'hover',
  hoverStyle = null,
}) => {
  const [pickedPieceIndex, setPickedPieceIndex] = useState(
    defaultPickCount - 1,
  );
  const [hoverPieceIndex, setHoverPieceIndex] = useState(-1);

  const pieceCountArray = [];
  for (let i = 0; i < pieceCount; i++) {
    pieceCountArray.push(piece);
  }

  const pickCountArray = [];
  for (let i = 0; i < pickedPieceIndex + 1; i++) {
    pickCountArray.push(pick);
  }

  const hoverCountArray = [];
  if (isHover) {
    for (let i = 0; i < hoverPieceIndex + 1; i++) {
      hoverCountArray.push(hover);
    }
  }

  const clickHandler = (click: React.SetStateAction<number>) => {
    setPickedPieceIndex(click);
    setHoverPieceIndex(-1);
    userFunc(click, pickedPieceIndex);
  };

  return (
    <Warp
      pieceCount={pieceCount}
      pieceHeight={pieceHeight}
      pieceWidth={pieceWidth}
      onMouseLeave={() => setHoverPieceIndex(-1)}
    >
      <PieceWrap
        direction={direction}
        pieceIsHalf={pieceIsHalf}
        pieceHeight={pieceHeight}
        pieceWidth={pieceWidth}
        pieceStyle={pieceStyle}
      >
        {pieceCountArray.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverPieceIndex(index)}
            onClick={() => clickHandler(index)}
          >
            <div>{item}</div>
          </div>
        ))}
      </PieceWrap>
      <PieceWrap
        direction={direction}
        pieceIsHalf={pieceIsHalf}
        pieceHeight={pieceHeight}
        pieceWidth={pieceWidth}
        pickStyle={pickStyle}
      >
        {pickCountArray.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverPieceIndex(index)}
            onClick={() => clickHandler(index)}
          >
            <div>{item}</div>
          </div>
        ))}
      </PieceWrap>
      <PieceWrap
        direction={direction}
        pieceIsHalf={pieceIsHalf}
        pieceHeight={pieceHeight}
        pieceWidth={pieceWidth}
        hoverStyle={hoverStyle}
      >
        {hoverCountArray.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverPieceIndex(index)}
            onClick={() => clickHandler(index)}
          >
            <div>{item}</div>
          </div>
        ))}
      </PieceWrap>
    </Warp>
  );
};

export default Rating;

const Warp = styled.div<WarpType>`
  position: relative;
  height: ${(props) => props.pieceHeight}px;
  width: ${(props) => props.pieceWidth * props.pieceCount}px;
`;

const PieceWrap = styled.div<PieceWrapType>`
  position: absolute;
  left: ${(props) => props.direction === 'right' && 0}px;
  right: ${(props) => props.direction === 'left' && 0}px;
  top: ${(props) => props.direction === 'down' && 0}px;
  bottom: ${(props) => props.direction === 'up' && 0}px;
  display: flex;
  flex-direction: ${(props) => props.direction === 'right' && 'row'};
  flex-direction: ${(props) => props.direction === 'left' && 'row-reverse'};
  flex-direction: ${(props) => props.direction === 'down' && 'column'};
  flex-direction: ${(props) => props.direction === 'up' && 'column-reverse'};
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
  }};
  & > div {
    overflow: hidden;
    height: ${(props) => props.pieceHeight}px;
    width: ${(props) => props.pieceWidth}px;
    ${(props) => {
      if (props.hoverStyle !== null) {
        return css`
          ${props.hoverStyle}
        `;
      }
    }};
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
          if (props.direction === 'left') return 'translateX(-50%) scale(2)';
          if (props.direction === 'right') return 'translateX(50%) scale(2)';
          if (props.direction === 'down') return 'translateY(50%) scale(2)';
          if (props.direction === 'up') return 'translateY(-50%) scale(2)';
        }
      }};
    }
  }
  & > div:nth-child(even) {
    & > div {
      transform: ${(props) => {
        if (props.pieceIsHalf) {
          if (props.direction === 'left') return 'translateX(50%) scale(2)';
          if (props.direction === 'right') return 'translateX(-50%) scale(2)';
          if (props.direction === 'down') return 'translateY(-50%) scale(2)';
          if (props.direction === 'up') return 'translateY(50%) scale(2)';
        }
      }};
    }
  }
`;
