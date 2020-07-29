import React from "react";
import styled from "styled-components"
import { ReactComponent as  IconRepeat } from "../../../../images/player/repeat_ico.svg";
import { PlainButton } from "../ActionButtons"

const StyledIconRepeat = styled.div`
  path {
    transition: color 0.5s ease-in-out;
    fill: ${({isRepeat, theme}) => isRepeat ? theme.colors.white : theme.colors.lightViolet}
  }
`;

const RepeatButton = ({onRepeatButtonClick, isRepeat}) => {
  return(
    <PlainButton onClick={() => onRepeatButtonClick()}>
      <StyledIconRepeat isRepeat={isRepeat}>
        <IconRepeat width="26px"/>
      </StyledIconRepeat>
    </PlainButton>
  )
};

export default RepeatButton;
