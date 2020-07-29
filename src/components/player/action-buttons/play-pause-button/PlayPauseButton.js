import React from "react";
import styled from "styled-components";
import activeIcon from "../../../../images/player/Play_active.png";
import basicIcon from "../../../../images/player/Play_inactive.png";
import { CSSTransition } from 'react-transition-group';

export const PlainButton = styled.button`
  position: relative;
  z-index: 100;
  background-color: transparent;
  border: none;
  padding: 0;
  &:focus {
    outline: none;
  }
`;
const PositionedButtonImg = styled.img`
  position: absolute;
  left: calc(50%);
  top: calc(50%);
  transform: translate(-50%,-50%);
  transition: opacity 0.25s ease-in-out;
`;
const AnimatedIcon = styled(PositionedButtonImg)`
  &.animated-button-enter,
  &.animated-button-active,
  &.animated-button-exit-done {
    opacity: 0;
  }
  &.animated-button-enter-active,
  &.animated-button-enter-done,
  &.animated-button-exit {
    opacity: 1;
  }
`;
const IconContainer = styled.div`
  position: relative;
`;
const InteractiveButton = styled(PlainButton)`
  cursor: pointer;
  width: 140px;
  height: 140px;
  transition: opacity 5s;
`;

const PlayPauseButton = ({musicIsPlaying, toggleMusic}) => {
  const BasicIconWrapper = function() {
    return <AnimatedIcon className="animated-button" src={basicIcon} isMusicPlaying={musicIsPlaying} alt="Active play button" />;
  };
  const ActiveIconWrapper = function() {
    return <AnimatedIcon src={activeIcon} isMusicPlaying={musicIsPlaying} alt="Inactive play button" />;
  };

  return(
    <>
      <IconContainer>
        <CSSTransition classNames={'animated-button'} in={musicIsPlaying} timeout={0}>
          <BasicIconWrapper/>
        </CSSTransition>
        <CSSTransition classNames={'animated-button'} in={!musicIsPlaying} timeout={0}>
          <ActiveIconWrapper />
        </CSSTransition>

        <InteractiveButton onClick={() => toggleMusic()} />
      </IconContainer>
    </>
  )
};

export default PlayPauseButton;
