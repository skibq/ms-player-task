import React from "react";
import { connect } from "react-redux"
import { toggleMusic } from "../../../../store/actions/player";
import PlayPauseButton from "./PlayPauseButton";

const PlayPauseButtonContainer = ({musicIsPlaying, toggleMusic}) => {
  return(
    <PlayPauseButton musicIsPlaying={musicIsPlaying} toggleMusic={toggleMusic} />
  )
};

const mapStateToProps = ({player}) => ({
  musicIsPlaying: player.musicIsPlaying
});

const mapDispatchToProps = dispatch => ({
  toggleMusic: () => dispatch(toggleMusic())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayPauseButtonContainer)
