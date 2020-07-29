import React from "react"
import NextSongButton from "./NextSongButton"
import { playNextSuitableSong } from "../../playerLogic";

const NextSongButtonContainer = () => (
  <NextSongButton onNextSongClick={() => playNextSuitableSong()}/>
);

export default NextSongButtonContainer;
