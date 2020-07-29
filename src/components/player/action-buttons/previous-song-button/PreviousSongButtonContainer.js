import React from "react"
import PreviousSongButton from "./PreviousSongButton"
import { playPreviousSuitableSong } from "../../playerLogic";

const PreviousSongButtonContainer = () => {
  return <PreviousSongButton onPreviousSongClick={() => playPreviousSuitableSong()}/>
};


export default PreviousSongButtonContainer;
