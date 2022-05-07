import React from 'react';

import PlayButton from '../reusable/PlayButton.jsx';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { FaYenSign } from 'react-icons/fa';
import Navbar from 'components/Navbar';

import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
`;

const DailyGoals = styled.div`
  display: flex;
  margin-top: 2rem;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 2rem;
  border-radius: 1rem;
  align-items: center;
  gap: 2rem;
  h2 {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;

const DailyTasks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1.6rem;
`;

const DailyTasksHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 600;

  span {
    color: var(--rose);
    cursor: pointer;
  }
`;

const DailyTask = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 2rem;
  border-radius: 1rem;

  .left {
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }
`;

const TaskIcon = styled.div`
  * {
    background-color: var(--rose);
    padding: 0.6rem;
    border-radius: 1rem;
    font-size: 4rem;
    color: white;
  }
`;

const TaskDesc = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

function Home() {
  const progressBarProps = {
    percent: 44, // is require
    colorSlice: '#FF575C',
    colorCircle: 'silver',
    fontSize: '1.6rem',
    fontWeight: 700,
    size: 100,
    stroke: 8,
    speed: 60,
    cut: 0,
    rotation: -90,
    opacity: 10,
    unit: '%',
    textPosition: '0.35em',
    animationOff: false,
    inverse: false,
    round: false,
    number: true,
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Title>Good morning, Matija 👋</Title>
        <DailyGoals>
          <CircularProgressBar {...progressBarProps} />
          <div>
            <h2>Wow your daily goal is almost done!</h2>
            <h3>12/16 completed</h3>
          </div>
        </DailyGoals>

        <DailyTasks>
          <DailyTasksHeader>
            <h2>Today Tasks (15)</h2>
            <span>See All</span>
          </DailyTasksHeader>
          <DailyTask>
            <div className="left">
              <TaskIcon>
                <FaYenSign></FaYenSign>
              </TaskIcon>
              <TaskDesc>
                <h2>Go outside!</h2>
                <span>50 minutes</span>
              </TaskDesc>
            </div>
            <PlayButton></PlayButton>
          </DailyTask>
          <DailyTask>
            <div className="left">
              <TaskIcon>
                <FaYenSign></FaYenSign>
              </TaskIcon>
              <TaskDesc>
                <h2>Go outside!</h2>
                <span>50 minutes</span>
              </TaskDesc>
            </div>
            <PlayButton></PlayButton>
          </DailyTask>
          <DailyTask>
            <div className="left">
              <TaskIcon>
                <FaYenSign></FaYenSign>
              </TaskIcon>
              <TaskDesc>
                <h2>Go outside!</h2>
                <span>50 minutes</span>
              </TaskDesc>
            </div>
            <PlayButton></PlayButton>
          </DailyTask>
        </DailyTasks>
      </Wrapper>
    </>
  );
}

export default Home;
