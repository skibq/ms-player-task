import React from "react";
import { PlainButton } from "../ActionButtons"
import { ReactComponent as IconPreviousSong } from "../../../../images/player/previous_ico.svg";

const PreviousSongButton = ({onPreviousSongClick}) => {
  return(
    <PlainButton onClick={() => onPreviousSongClick()}>
      <IconPreviousSong width="30px"/>
    </PlainButton>
  )
};

export default PreviousSongButton;

