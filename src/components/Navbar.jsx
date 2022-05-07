import React from 'react';
import styled from 'styled-components';

import { FaRegSun } from 'react-icons/fa';

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;

  a {
    color: var(--text);
    font-size: 2.2rem;
    font-weight: 600;
    * {
      color: var(--text);
    }
  }
  h2 {
  }
`;

function Navbar() {
  return (
    <Nav>
      <li>
        <a href="">MFocus</a>
      </li>
      <li>
        <a href="">
          <FaRegSun></FaRegSun>
        </a>
      </li>
    </Nav>
  );
}

export default Navbar;
