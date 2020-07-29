import React from "react";
import { PlainButton } from "../ActionButtons"
import { ReactComponent as IconNextSong } from "../../../../images/player/next_ico.svg";

const NextSongButton = ({onNextSongClick}) => {
  return(
    <PlainButton onClick={() => onNextSongClick()}>
      <IconNextSong width="30px"/>
    </PlainButton>
  )
};

export default NextSongButton;

