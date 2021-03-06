// Write your Character component here
import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  from {background-color: #99f3eb;}
  to {background-color: royalblue;}

`;

const CharacterCard = styled.div`
  background-color: #99f3eb;
  animation: ${kf} 8s;
  color: #000000;
  width: 200px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CharacterImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale;
  flex-shrink: 2;
`;

const Character = (props) => {
  const { name, image, species } = props;

  return (
    <CharacterCard>
      <h2>{name}</h2>
      <CharacterImg alt="random character" src={image} />
      <h3>{species}</h3>
    </CharacterCard>
  );
};

export default Character;
