import React from "react"
import SongsSlider from "./SongsSlider";
import { connect } from "react-redux";
import { findCurrentSongIndex } from "../../../helpers/playerHelper";

const SongsSliderContainer = ({playlist, currentSong, indexOfCurrentSong}) => {
  return(
    <SongsSlider playlist={playlist}
                 currentSong={currentSong}
                 indexOfCurrentSong={indexOfCurrentSong} />
  );
};

const mapStateToProps = ({player}) => ({
  playlist: player.playlist,
  indexOfCurrentSong: findCurrentSongIndex(player.playlist),
});

const connector = connect(mapStateToProps);

export default connector(SongsSliderContainer);
