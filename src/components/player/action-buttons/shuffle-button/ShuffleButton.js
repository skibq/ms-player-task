import React from "react";
import styled from "styled-components";
import { ReactComponent as IconShuffle } from "../../../../images/player/shuffle_ico.svg";
import { PlainButton } from "../ActionButtons";

const StyledShuffleButton = styled.div`
  path {
    transition: color 0.5s ease-in-out;
    fill: ${({isShuffle, theme}) => isShuffle ? theme.colors.white : theme.colors.lightViolet}
  }
`;

const ShuffleButton = ({isShuffle, onShuffleButtonClick}) => (
    <PlainButton onClick={() => onShuffleButtonClick()}>
      <StyledShuffleButton isShuffle={isShuffle}>
        <IconShuffle width="26px"/>
      </StyledShuffleButton>
    </PlainButton>
);

export default ShuffleButton;
