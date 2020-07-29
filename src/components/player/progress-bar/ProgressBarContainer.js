import React from "react";
import { connect } from "react-redux";
import ProgressBar from "./ProgressBar"
import { findCurrentSong } from "../../../helpers/playerHelper";

const ProgressBarContainer = ({progressInPercents, progressInSeconds, currentSongDuration}) => (
  <ProgressBar
    progressInPercents={progressInPercents}
    progressInSeconds={progressInSeconds}
    currentSongDuration={currentSongDuration}
  />
);

const mapStateToProps = ({player}) => {
  const currentSong = findCurrentSong(player.playlist);
  const progressInSeconds = player.progressInSeconds;
  const currentSongDuration = currentSong.durationInSeconds
  const progressInPercents = progressInSeconds / currentSongDuration * 100;

  return {
    progressInPercents,
    progressInSeconds,
    currentSongDuration
  }
};

export default connect(mapStateToProps)(ProgressBarContainer)
