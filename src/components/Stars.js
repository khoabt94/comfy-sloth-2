import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, i) => {
    if (stars > i + 1) return <BsStarFill />;
    if (stars > i + 0.5) return <BsStarHalf />;
    return <BsStar />;
  });

  return (
    <Wrapper>
      <div className="stars">
        <span>{tempStars}</span>
      </div>
      <div className="reviews">({reviews} customer reviews)</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
