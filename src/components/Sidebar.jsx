import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoMdArrowDropright } from 'react-icons/io';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import calendar from '../assets/Calendar.png';

const SidebarContainer = styled.div`
  height: 100vh;
  position: relative;
  background-color: var(--rose);

  transition-duration: 1000ms;
`;

const RightArrow = styled.div`
  .rightArrow {
    position: absolute;
    right: -0.9rem;
    top: 2.25rem;
    font-size: 2.2rem;
    border: 2px solid var(--blue);

    color: var(--rose);
    border-radius: 100%;
    cursor: pointer;
    background-color: white;
  }
`;

const MenuItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  gap: 1rem;
`;

const MenuItem = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;

  :hover {
    background-color: #f0f0f0;
    cursor: pointer;
    h1 {
      color: var(--text-hover);
    }
  }
`;

function Sidebar() {
  const [active, setActive] = useState(true);

  return (
    <div
      className={` ${
        active ? 'w-96' : 'w-32'
      } bg-blue w-96  h-screen p-6 pt-8 relative duration-300`}
    >
      <RightArrow>
        <IoMdArrowDropright
          className={`rightArrow ${active && 'rotate-180'}`}
          onClick={() => setActive(!active)}
        ></IoMdArrowDropright>
      </RightArrow>

      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          className={`cursor-pointer duration-500 ${
            active && 'rotate-[360deg]'
          }`}
        />
        <h1
          className={`text-white origin-left font-bold text-2xl duration-200 ${
            !active && 'scale-0'
          }`}
        >
          Menu
        </h1>
      </div>

      <MenuItems>
        <MenuItem className={' rounded-md p-1'}>
          <img
            src={calendar}
            className={`cursor-pointer duration-500 ${
              active && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !active && 'scale-0'
            }`}
          >
            Scheduler
          </h1>
        </MenuItem>
        <MenuItem className={' rounded-md p-1'}>
          <img
            src={calendar}
            className={`cursor-pointer duration-500 ${
              active && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !active && 'scale-0'
            }`}
          >
            Timer
          </h1>
        </MenuItem>
        <MenuItem className={' rounded-md p-1'}>
          <img
            src={calendar}
            className={`cursor-pointer duration-500 ${
              active && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !active && 'scale-0'
            }`}
          >
            Todo list
          </h1>
        </MenuItem>
      </MenuItems>
    </div>
  );
}

export default Sidebar;
