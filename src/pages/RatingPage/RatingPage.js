import React from "react";
import styled from "styled-components";
import Rating from "../../components/Rating/Rating";
import Icon1 from "../../components/Icons/Icon1";
import Icon2 from "../../components/Icons/Icon2";
import Icon5 from "../../components/Icons/Icon5";

const RatingPage = () => {
  return (
    <Contents>
      <div className="cover">
        <Rating />
      </div>
      <div className="cover">
        <Rating
          pieceStyle={"border: 1px solid black; background-color:skyblue;"}
          pickStyle={"background-color:blue;"}
        />
      </div>
      <div className="cover">
        <Rating
          piece={<Icon1 color={"skyblue"} />}
          pick={<Icon1 color={"blue"} />}
        />
      </div>
      <div className="cover">
        <Rating
          piece={<Icon2 color={"pink"} />}
          pick={<Icon2 color={"red"} />}
          pieceCount={8}
          pieceIsHalf={true}
          pieceStyle={"border: 1px solid black; background-color:skyblue;"}
          pickStyle={"border: 1px solid black; background-color:skyblue;"}
        />
      </div>
      <div className="cover">
        <Rating
          piece={<Icon2 color={"pink"} />}
          pick={<Icon2 color={"red"} />}
          pieceIsHalf={true}
          pickStyle={"background-color:skyblue;"}
        />
      </div>
      <div className="cover">
        <Rating
          piece={<Icon5 color={"skyblue"} />}
          pick={<Icon5 color={"blue"} />}
          pieceCount={10}
          pieceIsHalf={true}
          pieceStyle={"background-color:gray;"}
        />
      </div>
      <div className="cover">
        <Rating
          piece={<Icon5 color={"skyblue"} />}
          pick={<Icon5 color={"blue"} />}
          defaultPickCount={4}
          pieceCount={10}
          pieceIsHalf={true}
          pieceStyle={"background-color:gray;"}
        />
      </div>
      <div className="cover">
        <Rating
          piece={<Icon5 color={"white"} />}
          pick={<Icon5 color={"blue"} />}
          pieceCount={10}
          pieceIsHalf={true}
          isHover={true}
          pieceStyle={"background-color:gray;"}
        />
      </div>
      <div className="cover">
        <Rating
          piece={<Icon5 color={"white"} />}
          pick={<Icon5 color={"blue"} />}
          hover={<Icon5 color={"blue"} />}
          pieceCount={10}
          pieceIsHalf={true}
          isHover={true}
          pieceStyle={"background-color:gray;"}
        />
      </div>
      <div className="cover">
        <Rating
          piece={<Icon5 color={"white"} />}
          pick={<Icon5 color={"blue"} />}
          hover={<Icon5 color={"skyblue"} />}
          pieceCount={10}
          pieceIsHalf={true}
          isHover={true}
          pieceStyle={"background-color:gray;"}
          hoverStyle={"transform:scale(1.2);"}
        />
      </div>
      <div className="cover">
        <Rating
          piece={<Icon1 color={"pink"} />}
          pick={<Icon1 />}
          pieceHeight={200}
          pieceWidth={100}
          pieceIsHalf={true}
          pickStyle={"background-color:skyblue;"}
        />
      </div>
      <div className="cover">
        <Rating
          piece={<Icon2 color={"pink"} />}
          pick={<Icon2 color={"red"} />}
          direction={"left"}
          pieceIsHalf={true}
          pickStyle={"background-color:skyblue;"}
        />
      </div>
      <div className="down">
        <Rating
          pieceStyle={"border: 1px solid black; background-color:skyblue;"}
          pickStyle={"background-color:blue;"}
          direction={"up"}
          pieceHeight={50}
          pieceWidth={200}
        />
      </div>
    </Contents>
  );
};

export default RatingPage;

const Contents = styled.div`
  .cover {
    margin: 100px 30px;
  }
  .down {
    margin: 300px 30px;
  }
`;
