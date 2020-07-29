import React from "react";
import { connect } from 'react-redux'
import Player from "./Player"
import { findCurrentSong } from "../../helpers/playerHelper";

const PlayerContainer = ({ player }) => {
  return <Player playerState={player} />
};

const mapStateToProps = (state)=> ({
  player: {
    ...state.player,
    currentSong: findCurrentSong(state.player.playlist),
  }
});

const connector = connect(mapStateToProps);

export default connector(PlayerContainer);
