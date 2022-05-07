import React from 'react';
import styled from 'styled-components';

import { FaPlay } from 'react-icons/fa';

const Button = styled.button`
  * {
    background-color: var(--green);
    padding: 1rem;
    border-radius: 4rem;
    font-size: 3.4rem;
    color: white;
  }
`;

function PlayButton(props) {
  return (
    <Button onClick={props.onClick}>
      <FaPlay></FaPlay>
    </Button>
  );
}

export default PlayButton;
