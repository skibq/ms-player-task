import React from "react"
import styled from "styled-components"
import NextSongButtonContainer from "./next-song-button/NextSongButtonContainer";
import PreviousSongButtonContainer from "./previous-song-button/PreviousSongButtonContainer";
import PlayPauseButtonContainer from "./play-pause-button/PlayPauseButtonContainer";
import RepeatButtonContainer from "./repeat-button/RepeatButtonContainer";
import ShuffleButtonContainer from "./shuffle-button/ShuffleButtonContainer";

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

const ActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 48px;
`;

const ActionButtons = () => {
  return(
    <ActionButtonsWrapper>
      <ShuffleButtonContainer/>
      <PreviousSongButtonContainer />
      <PlayPauseButtonContainer />
      <NextSongButtonContainer/>
      <RepeatButtonContainer />
    </ActionButtonsWrapper>
  )
};

export default ActionButtons;
