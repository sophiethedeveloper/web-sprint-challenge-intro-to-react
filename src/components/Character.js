// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
    background-color: #99f3eb;
    color: #000000;
    width: 200px;
    max-height: 300px;
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

const Character = props => {
    return (
        <CharacterCard>
            <h2>Character</h2>
            <CharacterImg alt="random character"/>
        </CharacterCard>
    )
}