import React from "react"
import { connect } from "react-redux"
import NextSongInfo from "./NextSongInfo"
import { findNextSong, findCurrentSongIndex } from "../../../helpers/playerHelper";

const NextSongInfoContainer = ({nextSong}) => (
  <NextSongInfo nextSong={nextSong} />
);

const mapStateToProps = ({player}) => {
  const currentSongIndex = findCurrentSongIndex(player.playlist);

  return {
    nextSong: findNextSong(player.playlist, currentSongIndex)
  }
};

export default connect(mapStateToProps)(NextSongInfoContainer)
